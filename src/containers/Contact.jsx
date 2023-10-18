import { motion } from "framer-motion";
import React, { useState } from "react";
import { Leaf1, Leaf2 } from "../assets";

const Contact = () => {
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleTextChange = (e) => {
    const { name, value } = e.target;

    // update the state for corresponding input values
    setdata((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col gap-12 mt-36"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Contact me
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className=" w-full flex flex-col items-center justify-start gap-4">
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleTextChange}
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary hover:border-primary text-texlight"
            />
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleTextChange}
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent  focus:border-primary outline-none hover:border-primary text-texlight"
            />
          </div>
          {/* Email Field */}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleTextChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary hover:border-primary text-texlight"
          />
          <textarea
            name="message"
            value={data.message}
            onChange={handleTextChange}
            id=""
            cols="30"
            rows="10"
            placeholder="Message here ..."
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary hover:border-primary text-texlight"
          ></textarea>
          <div className="w-full lg:w-auto flex items-center justify-center lg:justify-end">
            <button className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md text-base hover:bg-gradient-to-br  hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary duration-200">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
