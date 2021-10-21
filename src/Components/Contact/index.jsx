import React, { useRef } from 'react';
// import emailjs, { init } from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import UiManager from '../../services';

// init(process.env.REACT_APP_USER_ID);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current.user_name.value);

    UiManager.openNotification(
      'warning',
      'Les deux mots de passe ne sont pas identiques 😉',
    );

    // emailjs.sendForm(
    //   process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current,
    // )
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  };

  return (
    <>
      <div>
        <div className="mt-10 sm:mt-0 sm:px-3 bg-red-400 py-20">
          <div className="md:grid md:grid-cols-6 md:gap-6 container mx-auto">
            <div className="md:col-start-2 md:col-end-4">
              <div className="px-4 sm:px-0">
                <h3 className="text-xl font-medium leading-6 text-white font-bold">Let&apos;s create something great together!</h3>
                <p className="mt-1 text-lg text-white">If you want to be part of an adventure with me or if you simply have a question, send me a message.</p>
                <p className="mt-1 text-lg text-white">You can also find me here:</p>
                <div className="flex justify-center my-3">
                  <a href="https://github.com/Martinfzz" className="mt-1 text-4xl text-white mr-10" aria-label="Github logo"><FontAwesomeIcon icon={faGithub} /></a>
                  <a href="https://www.linkedin.com/in/martin-forget7" className="mt-1 text-4xl text-white" aria-label="LinkedIn logo"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-start-4 md:col-end-7 xl:col-start-4 xl:col-end-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <input
                          type="text"
                          name="user_name"
                          id="user_name"
                          autoComplete="name"
                          placeholder="Name"
                          className="mt-1 focus:ring-red-700 focus:border-red-700 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <input
                          type="text"
                          name="user_email"
                          id="user_email"
                          autoComplete="email"
                          placeholder="Email"
                          className="mt-1 focus:ring-red-700 focus:border-red-700 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-6">
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="shadow-sm focus:ring-red-700 focus:border-red-700 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Your message"
                          defaultValue=""
                        />
                      </div>

                    </div>
                  </div>
                  <div className="px-4 py-3 bg-white text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
