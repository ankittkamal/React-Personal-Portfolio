import { AnimatePresence } from "framer-motion";
import HomeSocialLinks from "../components/HomeSocialLinks";
import { Socials } from "../utils/helper";
import { ankitkamalCV } from "../assets";
import { BsArrow90DegDown } from "react-icons/bs";

function ContactMeSocials() {
  return (
    <div className="w-full flex justify-start items-center flex-col  mb-12">
      <div className="flex items-center justify-center gap-16 mt-16">
        <AnimatePresence>
          {Socials &&
            Socials.map((item, index) => (
              <HomeSocialLinks key={index} data={item} index={index} />
            ))}
        </AnimatePresence>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
        <div className="w-full flex  justify-center items-center gap-3 lg:mt-1 mt-4">
          <span className="text-texlight text-center">
            Feel free to send an e-mail on{" "}
            <p>
              <a
                className="text-center text-primary"
                href="mailto:ankittkamal@gmail.com"
              >
                {" "}
                ankittkamal@gmail.com
              </a>
            </p>
          </span>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3 lg:mt-1 mt-4">
          <span className="text-texlight text-center">
            Mobile No. <p className="text-primary">+91 7317882680</p>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center lg:mt-1 mt-8">
          <span className="text-primary  flex justify-between hover:text-secondary text-xl">
            <BsArrow90DegDown /> <p className="-my-4"> Hire Me</p>
          </span>
          <a
            href={ankitkamalCV}
            download="Ankit_Kamal_Resume.pdf"
            className="mt-2 border border-[rgba(255,255,255,0.3)]  rounded-xl px-8 py-3 active:95 
            group hover:border-primary"
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
          >
            <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
              Download CV{" "}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMeSocials;
