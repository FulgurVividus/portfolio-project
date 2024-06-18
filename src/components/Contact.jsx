import React, { useRef } from "react";
import { FaTelegram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = function (e) {
    e.preventDefault();

    emailjs
      .send("service_hr0s3kq", "template_d20gv0i", form.current, {
        publicKey: "lG-nLHPX7LSZNEYC6",
      })
      .then(alert(`Email Sent :)`))
      .catch((error) => alert(error));
  };

  return (
    <>
      <div
        className="max-w-[1000px] mx-auto px-6 grid md:grid-cols-2 place-items-center"
        id="contact"
      >
        <div>
          <div className="text-gray-300 my-3 p-2">
            <h3 className="text-4xl font-semibold mb-5">
              Let&apos;s <span>connect</span>
            </h3>
            <p className="text-justify leading-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              explicabo quibusdam ad illum, iste dicta a eius neque vel cum
              voluptatibus illo. Sit tempora fugit aliquid laboriosam ad iusto
              quia, magni optio porro maiores quam deserunt consectetur beatae
              numquam eius! Magni soluta quaerat consectetur reiciendis.
              Aspernatur aperiam numquam dolore odit?
            </p>
          </div>

          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#171717]/40 p-5 rounded-lg">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-200">
                5 <span>+</span>
              </h3>
              <p className="text-xs md:text-base text-gray-200">Projects</p>
            </div>

            <div className="bg-[#171717]/40 p-5 rounded-lg">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-200">
                -
              </h3>
              <p className="text-xs md:text-base text-gray-200">
                Years experience
              </p>
            </div>

            <div className="bg-[#171717]/40 p-5 rounded-lg">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-200">
                ∞ <span>+</span>
              </h3>
              <p className="text-xs md:text-base text-gray-200">
                Future happy companies & clients
              </p>
            </div>
          </div>
        </div>

        <form
          className="max-w-6xl p-5 md:p-12"
          id="form"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            id="name"
            placeholder="Your name ..."
            name="name"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Your email ..."
            name="email"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
            required
          />
          <input
            type="subject"
            id="subject"
            placeholder="The subject ..."
            name="subject"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
            required
          />
          <textarea
            type="textarea"
            cols="30"
            rows="4"
            id="textarea"
            placeholder="Your message ..."
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 resize-none"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
