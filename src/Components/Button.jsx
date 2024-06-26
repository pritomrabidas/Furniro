import { Link } from "react-router-dom";

const Button = ({ title,path }) => {
  return (
    <Link
      className="px-16 py-4 text-base font-bold text-primary border-[1px] rounded-sm border-primary hover:rounded-sm hover:text-white hover:bg-secandari hover:border-secandari hover:delay-100 hover:duration-200"
      to={path}
    >
      {title}
    </Link>
  );
};

export default Button;
