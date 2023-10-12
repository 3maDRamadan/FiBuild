import Image from 'next/image'
import headImg from "../../imgs/headimg.png"

function MainTitle(props) {
  return (
    <article className="main-title">
        <Image className="img" src={headImg} alt='ترميمات بناء هدم تكسير مقاولات سيراميك' />
        <h2>{props.title}</h2>
      </article>
  )
}

export default MainTitle
