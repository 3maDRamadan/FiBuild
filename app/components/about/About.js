import Image from "next/image";
import "./about.css";
import abImg from "../../imgs/about.svg";
function About() {
  return (
    <section className="about flex-center-c">
      <main className="about-main">
        <h3>من نحن ؟</h3>
        <article className=" flex-center">
          <p>
            نقوم بكل اعمال البناء ونقوم أيضا بالتركيبات الداخلية والخارجية التي
            تحتاجها المنازل كما اننا نقوم أيضا بأعمال البناء والترميم في أي
            مكان، فإننا نقوم ببناء الفلل والقصور وأيضا الشركات ومؤسسات العمل
            ونستطيع ان نقوم بعمل تصميمات فريدة لكل هذه المباني والاماكن، فيمكنك
            ان تقوم بالإعتماد علينا
          </p>
          <Image src={abImg} alt="مقاولات عامة بناء ترميمات عامه بناء صباغ " />
        </article>
      </main>
    </section>
  );
}

export default About;
