"use client";
import "./land.css";
import Image from "next/image";
import landImg from "../../imgs/landd.jpg";
import Btn from "../btn/Btn";
const Land = () => {
  return (
    <section className="land">
      <article className="head">
        <h1>مقاولات وترميمات عامة</h1>
        <h2> مقاول عام أبو احمد بالكويت</h2>
        <Btn/>
      </article>
      <article className="img">
        <Image src={landImg} alt="" />
      </article>
    </section>
  );
};

export default Land;
