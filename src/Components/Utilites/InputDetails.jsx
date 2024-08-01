const InputDetails = ({ Heading, type = "text",placeholder }) => {
  return (
    <div className="w-full">
      <p className="font-Montserrat font-medium text-base text-black pb-6 pt-9">
        {Heading}
      </p>
      <input
        type={type}
        className="border-2 border-[#9F9F9] w-full outline-none px-4 h-[75px] rounded"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputDetails;
