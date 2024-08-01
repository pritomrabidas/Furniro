import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import InputDetails from "../Utilites/InputDetails";
import { Link } from "react-router-dom";
import Button from "../Button";

const ContactDetails = () => {
  return (
    <div className="flex">
      <div className="w-2/5 justify-end  mx-auto pt-8">
        <div className="flex gap-7 ">
          <span className="items-start pt-2 text-xl">
            <FaLocationDot />
          </span>
          <div className="">
            <h4 className="font-Popins font-medium text-2xl text-black">
              Address
            </h4>
            <p className="font-nunitoFont font-normal text-base text-black w-1/2">
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>
        </div>
        <div className="flex gap-7 py-10">
          <span className="items-start pt-2 text-xl">
            <FaPhoneAlt />
          </span>
          <div className="">
            <h4 className="font-Popins font-medium text-2xl text-black">
              Phone
            </h4>
            <Link
              to="tel: +(84) 546-6789"
              className="font-nunitoFont font-normal text-base text-black w-full block"
            >
              Mobile: +(84) 546-6789
            </Link>
            <Link
              to="tel: +(84) 456-6789"
              className="font-nunitoFont font-normal text-base text-black w-full block"
            >
              Hotline: +(84) 456-6789
            </Link>
          </div>
        </div>
        <div className="flex gap-7 pb-10">
          <span className="items-start pt-2 text-xl">
            <MdAccessTimeFilled />
          </span>
          <div className="">
            <h4 className="font-Popins font-medium text-2xl text-black">
              Working Time
            </h4>
            <p className="font-nunitoFont font-normal text-base text-black w-3/5">
              Monday-Friday: 9:00 - 22:00
            </p>
            <p className="font-nunitoFont font-normal text-base text-black w-3/5 ">
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/5">
        <InputDetails Heading={"Your name"} placeholder={"Abc"} />
        <InputDetails
          Heading={"Email"}
          type="email"
          placeholder={"abc@def.com"}
        />
        <InputDetails Heading={"Subject"} placeholder={"This is an optional"} />
        <InputDetails
          Heading={"Message"}
          placeholder={"Hi! i’d like to ask about"}
        />
        <div className="py-16">
          <Button title={"Submit"} />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
