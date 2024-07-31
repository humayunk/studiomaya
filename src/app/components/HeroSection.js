'use client';
import { TypeAnimation } from 'react-type-animation';
import { Space_Mono } from "next/font/google";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function HeroSection({ spaceMono }) {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.set(contentRef.current, { opacity: 0, y: 20 });
  }, []);

  const handleAnimationComplete = () => {
    gsap.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    });
  };

  return (
    <div className="relative h-screen flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={(e) => e.target.play()}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-white opacity-80"></div>
      <div className="relative w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-7 xl:col-span-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <TypeAnimation
                  sequence={[
                    'Studio',
                    500,
                    'Studio Maya',
                    () => {
                      console.log('Animation completed');
                      handleAnimationComplete();
                    }
                  ]}
                  wrapper="h1"
                  speed={1}
                  className="text-4xl text-gray-900 sm:text-6xl lg:text-8xl font-custom"
                  repeat={0}
                  cursor={false}
                />
                <div ref={contentRef} className="mt-6">
                  <p className="text-lg leading-8 text-gray-600 font-mono">
                    A product studio by <a href="https://humayunk.com" className="underline" target="_blank" rel="noopener noreferrer">Humayun K.</a> that helps early-stage startups and Fortune 500 companies level up their digital product design.
                  </p>
                  <div className="mt-8 flex items-center">
                    <a
                      href="https://savvycal.com/khanhumayun/12a708c5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full text-xl font-mono font-light bg-yellow-300 border-2 border-black px-8 py-4 text-black shadow-sm transition-all duration-300 ease-in-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Schedule a call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
