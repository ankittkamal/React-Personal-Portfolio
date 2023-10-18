import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Leaf1, Leaf2 } from "../assets";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";
import { FaPaperPlane } from "react-icons/fa";
import Alert from "./Alert";

const Contact = () => {
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    isAlert: false,
    message: "",
    status: null,
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    // update the state for corresponding input values
    setdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMessage = async () => {
    const isEmailValid =
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email);

    if (data.email === "" || data.email === null) {
      // throw alert
      setAlert({
        isAlert: true,
        message: "Required Fields can not be empty",
        status: "warning",
      });
      setInterval(() => {
        setAlert({ isAlert: false, message: "", status: null });
      }, 4000);
    } else if (!isEmailValid) {
      // throw alert
      setAlert({
        isAlert: true,
        message: "Email Address is not valid",
        status: "warning",
      });
      setInterval(() => {
        setAlert({ isAlert: false, message: "", status: null });
      }, 4000);
    } else {
      await addDoc(collection(db, "messages"), { ...data })
        .then(() => {
          // throw that alert message
          setdata({ firstName: "", lastName: "", email: "", message: "" });
          setAlert({
            isAlert: true,
            message: "Thanks for contacting me",
            status: "success",
          });
          setInterval(() => {
            setAlert({ isAlert: false, message: "", status: null });
          }, 4000);
        })
        .catch((err) => {
          //throw alert
          setAlert({
            isAlert: true,
            message: `Error: ${err.message}`,
            status: "danger",
          });
          setInterval(() => {
            setAlert({ isAlert: false, message: "", status: null });
          }, 4000);
        });
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col gap-12 mt-44 mb-16"
    >
      {/* Toast Alert notification */}
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
      </AnimatePresence>

      {/* title */}
      <div className="w-full flex items-center justify-center">
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
      <p className="mt-6  text-texlight text-base">
        Please contact me directly at{" "}
        <a className=" text-primary" href="mailto:ankittkamal@gmail.com">
          {" "}
          ankittkamal@gmail{" "}
        </a>{" "}
        or through this form.
      </p>
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
            cols="0"
            rows="10"
            placeholder="Message here ..."
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary hover:border-primary text-texlight"
          ></textarea>
          <div className="w-full flex items-center justify-center lg:justify-end">
            <button
              className=" group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-700 text-white rounded-full outline-none transition-all focus:scale-110 hover:border-primary hover:text-primary  active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
              onClick={sendMessage}
            >
              <>
                Submit{" "}
                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
              </>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
