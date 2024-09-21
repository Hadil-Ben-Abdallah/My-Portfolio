import { useEffect, useRef, useState } from 'react';
import HyperOne from '../customH1/HyperOne';
import emailjs from '@emailjs/browser';
export default function ContactMe() {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false);
  const [isNotEmpty, setIsNotEmpty] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    // Validation logic
    const userName = form.current.user_name.value;
    const userEmail = form.current.from_name.value;
    const message = form.current.message.value;

    if (!userName || !userEmail || !message) {
      setIsNotEmpty(true); // Show validation error message
      return; // Don't proceed with email sending
    }

    // Continue with email sending logic
    emailjs
      .sendForm(
        'service_cnuk8aj',
        'template_klyj8ri',
        form.current,
        'lio_aMUhSkOeURXu0'
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    if (isMessageSent) {
      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    }
    if (isNotEmpty) {
      setTimeout(() => {
        setIsNotEmpty(false);
      }, 3000);
    }
  }, [isMessageSent, isNotEmpty]);
  return (
    <>
      <style jsx>{`
        .popup {
          position: fixed;
          top: 10%;
          right: 1%;
          background-color: rgba(0, 0, 0, 0.6);
          padding:20px;
          color: var(--textColor)
          padding: 16px;
          border-radius: 4px;
        }
      `}</style>
      <div className="my-16">
        <HyperOne value={'Contact me'} />
      </div>
      <main
        id="contact"
        className="container mx-auto flex flex-col sm:flex-row justify-center items-center"
      >
        <section className="mx-8 sm:mx-16 flex flex-col max-w-xl">
          <h2 className=" font-bold text-5xl sm:text-7xl">
            Let&apos;s Connect!
          </h2>
          <p className="text-lg  mt-4">
            Feel free to reach out! I&apos;m always excited to connect with like-minded professionals and explore new opportunities. Whether you have a project in mind or want to collaborate on innovative ideas, let&apos;s work together to create something amazing. Send me a message, and let&apos;s start the conversation!
          </p>
        </section>
        <section className="flex flex-col mx-8 sm:mx-16 mt-8 sm:mt-0">
          <form ref={form} className="max-w-md mx-auto" onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="user_name" className=" font-semibold mb-2">
                Name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                className="w-full px-4 py-2 bg-gray-800  outline-none  border-transparent border-2 transition focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="from_name" className=" font-semibold mb-2">
                Email
              </label>
              <input
                id="from_name"
                type="email"
                name="from_name"
                className="w-full px-4 py-2 bg-gray-800  outline-none  border-transparent border-2 transition focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 bg-gray-800  outline-none  border-transparent border-2 transition focus:border-primary"
                rows="4"
                name="message"
              ></textarea>
            </div>
            <input
              className="bg-primary text-white cursor-pointer font-bold py-2 px-4 "
              type="submit"
              value="Send Message"
            />
          </form>
        </section>
      </main>
      {isMessageSent && (
        <div className="popup">
          <p>Message sent successfully! 💙✅</p>
        </div>
      )}
      {isNotEmpty && (
        <div className="popup">
          <p>Please fill out the fields ❌⚠️</p>
        </div>
      )}
    </>
  );
}
