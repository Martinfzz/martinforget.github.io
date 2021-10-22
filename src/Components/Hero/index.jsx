import React from 'react';

const Hero = () => (
  <div className="bg-red-500 py-48 flex justify-center text-center transition duration-300 ease-in-out">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className=" tracking-tight text-white ">
        <p className="text-3xl sm:text-4xl block font-bold">Martin Forget</p>
        <p className="text-xl sm:text-2xl block">I&apos;m a Full Stack Developper. I&apos;ll create, recreate the website of your dreams</p>
      </h2>
      <div className="mt-14">
        <a
          href="#a"
          className="items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-white hover:text-red-600 transition duration-500"
        >
          CHECK MY WORK
        </a>
      </div>
    </div>
  </div>
);

export default Hero;
