"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./nav.css";
import { BsFillCaretDownFill, BsListNested } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const links = [
    {
      id:1,
      ref: "/",
      content: "الرئيسية",
    },
    {
      id:2,
      ref: "/mokaoulat",
      content: "مقاولات وترميمات عامة",
    },
    {
      id:3,
      ref: "/page_finishing",
      content: "مقاولات وتشطيبات",
    },
    {
      id:4,
      ref: "/colors",
      content: "دهانات وديكور",
    },
    {
      id:5,
      ref: "/key",
      content: " تشطيب علي المفتاح",
    },
  ];
  const moreLinks = [
    {
      id:1,
      ref: "/sbaga",
      content: "دهان وصباغة",
    },
    {
      id:2,
      ref: "/sbak",
      content: "معلم سباك صحي",
    },
    {
      id:3,
      ref: "/siramik",
      content: " مقاول تركيب سيراميك",
    },
    {
      id:4,
      ref: "/rokham",
      content: " مقاول تركيب رخام",
    },
    {
      id:5,
      ref: "/banaa",
      content: "مقاول بناء ملاحق",
    },
    {
      id:6,
      ref: "/tarmim",
      content: "مقاول ترميم مباني",
    },
    {
      id:7,
      ref: "/taslim",
      content: "بناء فلل تسليم مفتاح",
    },
    {
      id:8,
      ref: "/hadm",
      content: "مقاول هدم وتكسير",
    },
    {
      id:9,
      ref: "/gitarof",
      content: "عزل اسطح جيتاروف",
    },
    {
      id:10,
      ref: "/msah",
      content: "مساح وسيجما",
    },
  ];
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <header className="container">
      <nav className="navbar">
        <img src="../../imgs/icon.png/icon.jpg" alt=" ترميم منازل تشطيب شقق توسعات سيراميك مقاول ترميم مباني تركيب سراميك جيتاروف ديكور الكويت مقاول بناء مقاولات عامة بناء هيكل اسود اصباغ اعمال صحي بناء ملاحق ومصاعد ترميمات عامة هدم بناء مساح سيجما توسيعات اضافة ادوار تكسير حمامات ومطابخ" />
        <ul>
          {links.map((link) => (
            <Link href={link.ref} key={link.id}>
              <li>{link.content} </li>
            </Link>
          ))}
          <li className="more" onClick={() => setToggle(!toggle)}>
            المزيد <BsFillCaretDownFill className="nav-icon" />
          </li>
        </ul>
        <div className="toogle">
          <BsListNested className="list-icon" onClick={() => setMenu(!menu)} />
        </div>
      </nav>
      <div className="sidebar" style={{ display: toggle && "block" }}>
        <ul>
          {moreLinks.map((mLink) => (
            <Link href={mLink.ref} key={mLink.id}>
              <li onClick={() => setToggle(false)}> {mLink.content}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="side-mobile" style={{ display: menu && "block" }}>
        <div className="navbar-close-icon">
          <AiOutlineCloseCircle
            onClick={() => setMenu(false)}
            className="close-icon"
          />
        </div>
        <ul>
          {links.map((link) => (
            <Link href={link.ref} key={link.id}>
              <li onClick={() => setMenu(false)}>{link.content} </li>
            </Link>
          ))}
          {moreLinks.map((mLink) => (
            <Link href={mLink.ref} key={mLink.id}>
              <li onClick={() => setMenu(false)}> {mLink.content}</li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
