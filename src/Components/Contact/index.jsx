import React, { useRef, useState } from 'react';
import emailjs, { init } from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import UiManager from '../../services';

init(process.env.REACT_APP_USER_ID);
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Contact = () => {
  const form = useRef();
  const [isSend, setIsSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.user_name.value.length === 0
      || form.current.user_email.value.length === 0
      || form.current.message.value.length === 0) {
      setIsSend(true);
      UiManager.openNotification(
        'error',
        'Validation errors. All fields must be filled 😣',
      );
      setIsSend(false);
    } else {
      setIsSend(true);
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current,
      )
        .then(() => {
          setIsSend(false);
          form.current.user_name.value = '';
          form.current.user_email.value = '';
          form.current.message.value = '';
          UiManager.openNotification(
            'success',
            'Message send, you will receive an answer soon 😃',
          );
        }, (error) => {
          setIsSend(true);
          console.log(error.text);
        });
    }
  };

  return (
    <>
      <div className="mt-8 sm:px-3 bg-gray-100 py-20 sm:py-60" id="contact">
        <h2 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl uppercase text-center">Contact</h2>
        <div className="md:grid md:grid-cols-6 md:gap-6 container mx-auto">
          <div className="md:col-start-2 md:col-end-4 mt-8">
            <div className="px-4 sm:px-0 text-center md:text-left">
              <h3 className="text-xl font-medium leading-6 text-gray-500 font-bold">Let&apos;s create something great together!</h3>
              <p className="mt-1 text-lg text-gray-500">If you want to be part of an adventure with me or if you simply have a question, send me a message.</p>
              <p className="mt-1 text-lg text-gray-500">You can also find me here:</p>
              <div className="flex justify-center my-3">
                <a href="https://github.com/Martinfzz" className="mt-1 text-4xl text-gray-500 mr-10 hover:text-yellow-700" aria-label="Github logo" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/martin-forget7" className="mt-1 text-4xl text-gray-500 hover:text-yellow-700" aria-label="LinkedIn logo" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-8 md:col-start-4 md:col-end-7 xl:col-start-4 xl:col-end-6 border-2 rounded-md border-yellow-500">
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
                        className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        autoComplete="email"
                        placeholder="Email"
                        className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Your message"
                        defaultValue=""
                      />
                    </div>

                  </div>
                </div>
                <div className="px-4 py-3 bg-white text-right sm:px-6">
                  {isSend && <span className="pr-3"><Spin indicator={antIcon} style={{ color: '#B91C1C' }} /></span>}
                  <button
                    type="submit"
                    disabled={isSend}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 uppercase"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
