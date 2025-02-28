import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "../icons";

function SocialLinks() {
  return (
    <div className="mt-4 -mb-4 flex justify-center space-x-6">
      <Link
        to="https://www.facebook.com/share/3zYu98oocApRxJiY/?mibextid=qi2Omg"
        target="_blank"
      >
        <FacebookIcon
          size={50}
          className="text-blue-500 bg-white rounded-lg hover:text-blue-600"
        />
      </Link>
      <Link
        to="https://www.instagram.com/tanveer_hussain459?igsh=MW0wcnlxOWNvZjFvZQ=="
        target="_blank"
      >
        <InstagramIcon
          size={50}
          className="text-orange-900 bg-white rounded-lg hover:text-orange-700"
        />
      </Link>
      <Link to="https://www.linkedin.com/in/im-tanveerhussain" target="_blank">
        <LinkedinIcon
          size={50}
          className="text-blue-800 bg-white rounded-lg hover:text-blue-700"
        />
      </Link>
      <Link to="https://wa.me/+923097053070" target="_blank">
        <WhatsappIcon
          size={50}
          className="text-green-500 bg-white rounded-lg hover:text-green-600"
        />
      </Link>
    </div>
  );
}

export default SocialLinks;
