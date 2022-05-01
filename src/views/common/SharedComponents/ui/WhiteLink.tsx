import { Link } from "react-router-dom";

const WhiteLink = ({ label, ...rest }: any) => {
  return (
    <li>
      <Link
      {...rest}
        to="/account/login"
        className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
      >
        {label}
      </Link>
    </li>
  );
};
export default WhiteLink;
