'use client';
import React from 'react';
import Image from 'next/image';
import electricalsImg from './assets/electricals.png'
import switchboardImg from './assets/switchboard.png'
import solarpanelImg from './assets/solarpanel.png'
import avrImg from './assets/AVR.png'

export default function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src={solarpanelImg}
            alt="Slide 1"
            className="d-block w-100"
            width={350}
            height={150}
          />
        </div>
        <div className="carousel-item">
          <Image
            src={electricalsImg}
            alt="Slide 2"
            className="d-block w-100"
            width={350}
            height={150}
          />
        </div>
        <div className="carousel-item">
          <Image
            src={switchboardImg}
            alt="Slide 3"
            className="d-block w-100"
            width={350}
            height={150}
          />
        </div>
        <div className="carousel-item">
          <Image
            src={avrImg}
            alt="Slide 4"
            className="d-block w-100"
            width={350}
            height={150}
          />
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  )
}
