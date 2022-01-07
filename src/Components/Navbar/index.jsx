import React, { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import Logo from '../../assets/images/Martin_Forget_logo.png';
import i18n from '../../i18n';

// eslint-disable-next-line react/prop-types
const Navbar = ({ t }) => {
  const [frToogle, setFrToggle] = useState(false);
  const [enToogle, setEnToggle] = useState(true);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  React.useEffect(() => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
    if (language === 'fr') {
      setFrToggle(true);
      setEnToggle(false);
    }
  }, [language]);

  const handleOnClick = () => {
    window.scrollTo(0, 0);
  };

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    setFrToggle(!frToogle);
    setEnToggle(!enToogle);
  };

  return (
    <>
      <Popover className="relative bg-black sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <button type="button" onClick={handleOnClick} className="text-base font-medium text-white hover:text-yellow-700">
                <img
                  className="h-8 w-auto h-16"
                  src={Logo}
                  alt=""
                />
              </button>
            </div>
            <div className="-mr-2 -my-2 sm:hidden">
              <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden sm:flex space-x-10 items-center">
              <Link className="navbar-link" activeClass="active" to="portfolio" spy smooth duration={0}>
                Portfolio
              </Link>
              <Link className="navbar-link" activeClass="active" to="about" spy smooth duration={0}>
                {t('About')}
              </Link>
              <Link className="navbar-link" activeClass="active" to="contact" spy smooth duration={0}>
                Contact
              </Link>
              <a href="https://github.com/Martinfzz" className="mt-1 text-4xl text-white mr-10 hover:text-yellow-700" aria-label="Github logo" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/martin-forget7" className="mt-1 text-4xl text-white hover:text-yellow-700" aria-label="LinkedIn logo" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <div>
                <button type="button" id="fr" className={`navbar-link mr-2 ${frToogle ? 'active' : ''}`} onClick={() => changeLanguage('fr')}>fr</button>
                <button type="button" id="en" className={`navbar-link ${enToogle ? 'active' : ''}`} onClick={() => changeLanguage('en')}>en</button>
              </div>
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
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-yellow-700">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <button type="button" onClick={handleOnClick} className="text-base font-medium text-white">MartinF</button>
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
                  <Link className="navbar-link-dropdown" activeClass="active" to="portfolio" spy smooth duration={0}>
                    Portfolio
                  </Link>
                  <Link className="navbar-link-dropdown" activeClass="active" to="about" spy smooth duration={0}>
                    About
                  </Link>
                  <Link className="navbar-link-dropdown" activeClass="active" to="contact" spy smooth duration={0}>
                    Contact
                  </Link>
                  <a href="https://github.com/Martinfzz" className="mt-1 text-3xl text-white mr-10" aria-label="Github logo"><FontAwesomeIcon icon={faGithub} /></a>
                  <a href="https://www.linkedin.com/in/martin-forget7" className="mt-1 text-3xl text-white" aria-label="LinkedIn logo"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <div>
                    <button type="button" id="fr" className={`navbar-link-dropdown mr-2 ${frToogle ? 'active' : ''}`} onClick={() => changeLanguage('fr')}>fr</button>
                    <button type="button" id="en" className={`navbar-link-dropdown ${enToogle ? 'active' : ''}`} onClick={() => changeLanguage('en')}>en</button>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Navbar;
