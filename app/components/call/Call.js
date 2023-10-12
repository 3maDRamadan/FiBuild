import "./call.css";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

function Call() {
  return (
    <section className="">
      <Link
        className="call flex-center"
        href="tel:+96594903036"
        aria-label="call"
      >
        <FiPhoneCall className="call-icon" />
      </Link>
    </section>
  );
}

export default Call;
