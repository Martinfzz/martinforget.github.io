import React from 'react';
import { Link } from 'react-scroll';
import Profilepicture from '../../assets/images/profile_picture.jpg';

const Hero = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-xl lg:w-1/2 xl:max-w-3xl xl:w-full 2xl:max-w-4xl lg:pb-28 xl:pb-32">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform lg:translate-x-full xl:translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="0,0 100,0 50,100 0,100" />
        </svg>

        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          {' '}
        </div>

        <main className="mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-10 lg:mt-16 lg:px-8 xl:mt-24">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Martin Forget
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I&apos;m a Fullstack web developper. I&apos;ll create
              {' '}
              or recreate the website of your dreams.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link className="uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10" activeClass="active" to="portfolio" spy smooth duration={0}>
                  See my work
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 xl:w-auto">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={Profilepicture}
        alt="Martin Forget in the wood"
      />
    </div>
  </div>
);

export default Hero;
