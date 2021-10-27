import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => (
  <Popover className="relative bg-black sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center py-6 md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#z">
            <a href="#z" className="text-base font-medium text-white hover:text-yellow-700">MartinF</a>
            {/* <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            /> */}
          </a>
        </div>
        <div className="-mr-2 -my-2 sm:hidden">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden sm:flex space-x-10 items-center">
          <a href="#z" className="navbar-link">
            Portfolio
          </a>
          <a href="#z" className="navbar-link">
            About
          </a>
          <a href="#z" className="navbar-link">
            Contact
          </a>
          <a href="https://github.com/Martinfzz" className="mt-1 text-4xl text-white mr-10 hover:text-yellow-700" aria-label="Github logo"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/martin-forget7" className="mt-1 text-4xl text-white hover:text-yellow-700" aria-label="LinkedIn logo"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </Popover.Group>
      </div>
    </div>

    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <a href="#z" className="text-base font-medium text-white">MartinF</a>
              </div>
              <div className="-mr-2">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-3 gap-y-4 gap-x-8">
              <a href="#z" className="navbar-link-dropdown">
                Portfolio
              </a>
              <a href="#z" className="navbar-link-dropdown">
                About
              </a>
              <a href="#z" className="navbar-link-dropdown">
                Contact
              </a>
              <a href="https://github.com/Martinfzz" className="mt-1 text-3xl text-white mr-10" aria-label="Github logo"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/martin-forget7" className="mt-1 text-3xl text-white" aria-label="LinkedIn logo"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default Navbar;
