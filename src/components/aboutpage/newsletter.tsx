import React, { useState, FormEvent } from 'react';

function NewsLetter() {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      setMessage('');
      return;
    }

    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: trimmedEmail })
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(data => Promise.reject(data.message));
        }
        return res.json();
      })
      .then(data => {
        setMessage(data.message);
        setError('');
        setEmail('');
        setIsChecked(false);
      })
      .catch(err => {
        setError(err);
        setMessage('');
      });
  };

  return (
    <div className='w-[95%] md:w-[90%] lg:w-[80%] flex items-center justify-center flex-col gap-4 h-auto mb-4'>
      {/* text section */}
      <div className='text-white border-l-2 border-white h-auto w-full ml-[10px] flex flex-row gap-4'>
        <div className='border-l-2 border-white mt-[40px] h-[30px]'></div>
        <div className='flex flex-col gap-6'>
          <p className='text-[16px]'>News</p>
          <p className='text-[20px]'>Alver Power in the Press</p>
        </div>
      </div>

      {/* form section */}
      <div className='w-full md:w-[70%] lg:w-[50%] items-center justify-center'>
        <form onSubmit={handleSubmit} className='bg-white text-black px-4 py-4 md:px-2'>
          <p className='font-bold text-lg mb-2'>Join our mailing list</p>
          <p className='text-sm'>Email*</p>

          <div className='w-full flex flex-col md:flex-row gap-2'>
            <input
              type='text'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full border-b px-2 focus:outline-none border-black'
              required
            />
            <button
              type='submit'
              className='border border-black text-black bg-white px-4 py-2 max-w-max hover:bg-black hover:text-white transition'
            >
              Subscribe
            </button>
          </div>

          <div className='w-full flex flex-row mt-2 gap-2'>
            <input
              type='checkbox'
              name='checkbox'
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className='mt-1'
              required
            />
            <p className='text-sm'>I want to subscribe to your mailing list.</p>
          </div>

          {/* Feedback Messages */}
          {message && <p className='text-green-600 mt-2'>{message}</p>}
          {error && <p className='text-red-600 mt-2'>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
