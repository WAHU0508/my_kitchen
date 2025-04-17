'use client'

import { useEffect, useState } from 'react'

type ChatbotProps = {
  userId?: string
}
export default function Chatbot({ userId }: ChatbotProps) {
  const [userHash, setUserHash] = useState(null)

  useEffect(() => {
    if (!userId) return

    fetch('/api/chatbase-hash', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.hash) {
          setUserHash(data.hash)
        }
      })
      .catch(console.error)
  }, [userId])

  useEffect(() => {
    if (!userId || !userHash) return

    const scriptWrapper = document.createElement('script')
    scriptWrapper.innerHTML = `
      (function(){
        if(!window.chatbase || window.chatbase("getState") !== "initialized"){
          window.chatbase = (...args) => {
            if(!window.chatbase.q){ window.chatbase.q = [] }
            window.chatbase.q.push(args)
          }
          window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
              if(prop === "q") return target.q
              return (...args) => target(prop, ...args)
            }
          })
        }

        const onLoad = function(){
          const script = document.createElement("script")
          script.src = "https://www.chatbase.co/embed.min.js"
          script.id = "4-7ge_rK3z1toz9SvEehb"
          script.setAttribute("domain", "www.chatbase.co")
          script.setAttribute("data-user-id", "${userId}")
          script.setAttribute("data-user-hash", "${userHash}")
          document.body.appendChild(script)
        }

        if(document.readyState === "complete"){
          onLoad()
        } else {
          window.addEventListener("load", onLoad)
        }
      })()
    `
    document.body.appendChild(scriptWrapper)
  }, [userId, userHash])

  return null
}
