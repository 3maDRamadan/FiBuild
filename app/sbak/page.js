import React from "react";
import Bg from "../components/bg/Bg";
import Box from "../components/boxes/Box";

export const metadata = {
  title: "سباك صحي",
  description: "سباك صحي سباك منازل في الكويت حمامات ",
};

function page() {
  return (
    <section>
      <Bg name="مقاول سباك صحي" />
      <Box />
    </section>
  );
}

export default page;
