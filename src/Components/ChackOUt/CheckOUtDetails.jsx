import { Link } from "react-router-dom";
import InputDetails from "../Utilites/InputDetails";
import SelectDetails from "../Utilites/SelectDetails";

const CheckOUtDetails = () => {
  return (
    <section className="py-16">
      <div className="container py-9 gap-10 justify-between flex">
        <div className="w-2/5">
          <h3 className="font-Popins font-semibold text-3xl text-black">
            Billing details
          </h3>
          <div className="flex gap-8">
            <InputDetails Heading={"First Name"} />
            <InputDetails Heading={"Last Name"} />
          </div>
          <InputDetails Heading={"Company Name (Optional)"} />
          <SelectDetails Heading={"Country / Region"} />
          <InputDetails Heading={"Street address"} />
          <InputDetails Heading={"Town / City"} />
          <SelectDetails Heading={"Province"} />
          <InputDetails Heading={"ZIP code"} type="number" />
          <InputDetails Heading={"Phone"} type="number" />
          <InputDetails Heading={"Email address"} type="email" />
          <InputDetails placeholder={"Additional information"} />
        </div>
        <div className="w-2/5 py-20">
          <div className="justify-between flex">
            <h3 className="font-Montserrat font-medium text-2xl text-black">
              Product
            </h3>
            <h3 className="font-Montserrat font-medium text-2xl text-black">
              Subtotal
            </h3>
          </div>
          <div className="justify-between flex pt-3.5">
            <p className="font-Opensans font-normal text-base text-[#9F9F9F]">
              Asgaard sofa X 1
            </p>
            <p className="font-nunitoFont font-normal text-base text-black">
              Rs. 250,000.00
            </p>
          </div>
          <div className="justify-between flex pt-3.5">
            <p className="font-Opensans font-normal text-base text-black">
              Subtotal
            </p>
            <p className="font-nunitoFont font-normal text-base text-black">
              Rs. 250,000.00
            </p>
          </div>
          <div className="justify-between flex pt-3.5">
            <p className="font-Opensans font-normal text-base text-black">
              Total
            </p>
            <p className="font-nunitoFont font-bold text-2xl text-[#B88E2F]">
              Rs. 250,000.00
            </p>
          </div>
          <p className="border w-full text-[#D9D9D9] mt-8 mb-6"></p>
          <h3 className="font-Popins font-normal text-base text-black">
            <span className="w-3 h-3 rounded-full bg-black inline-block mr-2"></span>
            Direct Bank Transfer
          </h3>
          <p className="font-nunitoFont font-light text-base text-[#9F9F9F] pt-3 pb-6">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <div className="flex gap-3.5 font-nunitoFont font-medium text-base text-[#9F9F9F]">
            <input type="radio" id="Bank" name="payment" />
            <label
              htmlFor="Bank"
              className="cursor-pointer"
            >
              Direct Bank Transfer
            </label>
          </div>
          <div className="flex gap-3.5 font-nunitoFont font-medium text-base text-[#9F9F9F]">
            <input type="radio" id="Cash" name="payment" />
            <label
              htmlFor="Cash"
              className=" cursor-pointer"
            >
              Cash On Delivery
            </label>
          </div>
          <p className="font-nunitoFont font-light text-base text-[#9F9F9F] pt-3 pb-10">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="text-black font-medium">privacy policy.</span>
          </p>
          <div className="text-center">
            <Link className="px-20 py-4 rounded-2xl border border-[#000000] text-xl font-normal font-Popins text-[#000000]">
              Place order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOUtDetails;
