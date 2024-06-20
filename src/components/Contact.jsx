import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div
        className="max-w-[1000px] mx-auto mt-24 px-6 grid md:grid-cols-2 place-items-center"
        id="contact"
      >
        <div>
          <div className="text-gray-300 my-3 p-2">
            <h3 className="text-4xl font-semibold mb-5">
              Let&apos;s <span>connect</span>
            </h3>
            <p className="text-justify leading-7">
              I am always eager to explore new opportunities and collaborate
              with professionals in the tech industry. If you have a project in
              mind, are interested in discussing potential roles, or have any
              questions, please don&apos;t hesitate to reach out via the form. I
              am committed to responding promptly and look forward to the
              possibility of working together.
            </p>
          </div>

          <div className="flex mt-10 items-center gap-7">
            <div className="p-5 rounded-lg">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-200">
                5 <span>+</span>
              </h3>
              <p className="text-xs md:text-base text-gray-200">Projects</p>
            </div>

            <div className="p-5 rounded-lg">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-200">
                -
              </h3>
              <p className="text-xs md:text-base text-gray-200">
                Years experience
              </p>
            </div>

            <div className="p-5 rounded-lg">
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
          action="https://getform.io/f/paqgrgoa"
          method="POST"
          className="max-w-6xl p-5 md:p-12"
          id="form"
        >
          <input
            type="text"
            id="name"
            placeholder="Your name ..."
            name="user_name"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Your email ..."
            name="user_email"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            type="textarea"
            cols="30"
            rows="4"
            id="textarea"
            placeholder="Your message ..."
            name="message"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 resize-none"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
