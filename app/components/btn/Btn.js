import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

function Btn() {
  return (
    <button className="btn">
       <Link href="tel:+96594903036" aria-label="call">
        تواصل معنا
        <FiPhoneCall className="call-icon" />
      </Link>
    </button>
  );
}

export default Btn;
