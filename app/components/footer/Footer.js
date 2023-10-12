import "./footer.css";
import Image from "next/image";
import landImg from "../../imgs/landd.jpg";
import Btn from "../btn/Btn";

function Footer() {
  return (
    <footer className="foot">
      <article className="right flex-center-c">
        <h1>مقاولات وترميمات عامة</h1>
        <h2> مقاول عام أبو احمد بالكويت</h2>
        <Btn/>
      </article>
      <article className="left">
        <Image src={landImg} alt="مقاول عام في الكويت ترميمات عامه تكسير هدم بناء تشطيب سيراميك بناء ملاحق جيتاروف سيراميك بلاط صباغ صباغة سباك في الكويت ترميم تشطيب تسليم علي المفتاح بناء فلل وقصور بناء شركات بناء شركة رخام مساح" />
      </article>
      <div className="end">
        <span>
          © حقوق النشر {new Date().getFullYear()}، جميع الحقوق محفوظة لـلبشمهندس
          عماد رمضان
        </span>
      </div>
    </footer>
  );
}

export default Footer;
