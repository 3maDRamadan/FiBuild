import React from "react";
import "./service.css";
import Image from "next/image";
import avatar from "../../imgs/eng.png";
import Link from "next/link";
import MainTitle from "../mainTitle/MainTitle";

const Sercive = () => {
  const data = [
    {
      id: 1,
      alt: "مقاولات وتشطيبات   ترميمات عامة",
      heading: "مقاولات",
      linkRef: "/page_finishing",
      linkContent: "مقاولات وتشطيبات ",
    },
    {
      id: 2,
      alt: "مقاولات وترميمات عامة   ترميمات عامة",
      heading: "ترميمات",
      linkRef: "/mokaoulat",
      linkContent: "مقاولات وترميمات عامة ",
    },
    {
      id: 3,
      alt: "مقاول دهان وصباغة   ترميمات عامة",
      heading: "دهانات",
      linkRef: "/colors",
      linkContent: "مقاول دهان وصباغة ",
    },
    {
      id: 4,
      alt: " مقاول تركيب سيراميك   ترميمات عامة",
      heading: "سيراميك",
      linkRef: "/siramik",
      linkContent: " مقاول تركيب سيراميك ",
    },
    {
      id: 5,
      alt: " في الكويت مقاول تركيب رخام   ترميمات عامة",
      heading: "رخام",
      linkRef: "/rokham",
      linkContent: "مقاول تركيب رخام ",
    },
    {
      id: 6,
      alt: "مقاول دهانات وديكور   ترميمات عامة",
      heading: "ديكور",
      linkRef: "/colors",
      linkContent: "مقاول دهانات وديكور ",
    },
    {
      id: 7,
      alt: "معلم صباغ   ترميمات عامة",
      heading: "صباغ",
      linkRef: "/sbaga",
      linkContent: "معلم صباغ ",
    },
    {
      id: 8,
      alt: "مقاول تشطيب علي المفتاح   ترميمات عامة",
      heading: "تشطيب",
      linkRef: "/key",
      linkContent: "مقاول تشطيب علي المفتاح ",
    },
    {
      id: 9,
      alt:  "معلم سباك صحي   ترميمات عامة",
      heading: "سباك",
      linkRef: "/sbak",
      linkContent: "معلم سباك صحي ",
    },
    {
      id: 10,
      alt: "مقاول بناء ملاحق   ترميمات عامة",
      heading: "بناء",
      linkRef: "/banaa",
      linkContent: "مقاول بناء ملاحق ",
    },
    {
      id: 11,
      alt: "مقاول ترميم مباني   ترميمات عامة",
      heading: "مباني",
      linkRef: "/tarmim",
      linkContent: "مقاول ترميم مباني ",
    },
    {
      id: 12,
      alt:  "مقاول عزل اسطح جيتاروف   ترميمات عامة",
      heading: "عزل",
      linkRef: "/gitarof",
      linkContent: "مقاول عزل اسطح جيتاروف ",
    },
    {
      id: 13,
      alt: "مقاول مساح وسيجما   ترميمات عامة",
      heading: "مساح",
      linkRef: "/msah",
      linkContent: "مقاول مساح وسيجما ",
    },
    {
      id: 14,
      alt: "مقاول تكسير مباني   ترميمات عامة",
      heading: "تكسير",
      linkRef: "/hadm",
      linkContent: "مقاول تكسير مباني ",
    },
    {
      id: 15,
      alt: "مقاول تركيب كربستون   ترميمات عامة",
      heading: "كربستون",
      linkRef: "/taslim",
      linkContent: "مقاول تركيب كربستون ",
    },
  ];
  return (
    <section className="services">
      <MainTitle title="خدماتنا" />
      <section className="container">
        {data.map((box) => (
          <article className="box" key={box.id}>
            <Image src={avatar} alt={box.alt} />
            <h3>{box.heading}</h3>
            <div className="info">
              <Link href={box.linkRef}>{box.linkContent} </Link>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Sercive;
