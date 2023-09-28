import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="body-text text-white w-full p-20 border-t border-black"
    >
      <div className="flex flex-between border border-grey-200 mx-20  rounded-lg shadow p-10">
        <div>
          <h2 className="heading2  mb-5 ">Get in touch</h2>
          <p className="text-body text-white-800">
            Want to work together or have any questions?
          </p>
        </div>
        <div className="bg-purple py-3 px-5 rounded-lg text-xl">
          <button>Say Hello</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
