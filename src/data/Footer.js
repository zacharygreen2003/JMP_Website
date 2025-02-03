// import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import { AiFillFacebook } from "react-icons/ai";

import { FaLinkedin } from "react-icons/fa";

export const data = [
  {
    contact: "sales@jmproducts.com",
    icon: (
      <img
        src="/images/ILS.webp"
        alt="ILS Logo"
        width={24}
        height={24}
      />
    ),
    link: "https://www.ilsmart.com/",
  },
  {
    contact: "FAX: +1-800-624-2198",
    icon: <FaLinkedin style={{ color: "#0077B5" }} size={24} />,
    link: "https://www.linkedin.com/company/j-&-m-products-inc-/",
  },
  {
    contact: "TEL: +1-818-837-0205",
    icon: <div className="w-6 h-6" />, // Non-clickable placeholder
    link: "#", // Keep it a dummy link for structure
  },
];