import { BsWhatsapp } from "react-icons/bs";
import "./whatsapp.css";
import Link from "next/link";

function Whatsapp() {
  return (
    <article className="what flex-center">
    <Link href="https://wa.me/‎+965 ‎94903036" className="flex-center" aria-label="whatsapp">
        <BsWhatsapp className="what-icon" />
      </Link>
    </article>
  );
}

export default Whatsapp;
