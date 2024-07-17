import { FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation("")
    const path = location.pathname.split("/")
  return (
    <div className="justify-center flex pt-3">
      <ul className="flex text-base">
        <li className=" font-medium text-[#000000]">Home</li>
        <li>
          <FaChevronRight className="pt-2 font-semibold text-base text-[#000000]" />
        </li>
        <li className=" font-normal text-[#000000]">{path}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
