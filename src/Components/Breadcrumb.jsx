import { FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation("");
  const path = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];
  return (
    <div className="justify-center flex pt-3">
      <ul className="flex text-lg items-center gap-3">
        <li className=" font-medium text-[#000000]">
          <Link to="/">Home</Link>
        </li>
        <li>
          <FaChevronRight className="font-normal text-xs text-[#000000]" />
        </li>
        <Link to={`/${path}`} className=" font-normal text-[#000000]">
          {path}
        </Link>
        {path2 && (
          <>
            <li>
              <FaChevronRight className="font-normal text-xs text-[#000000]" />
            </li>
            <Link className=" font-normal text-[#000000]">{path2}</Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumb;
