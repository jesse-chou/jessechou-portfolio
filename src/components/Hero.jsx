// components/Hero.jsx

import Image from "next/image";
import Icons from "./Icons"

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile pic.png' className="profile-img" width={300} height={300} alt="Jesse's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Jesse 👋</h1>
        <p>
          I'm an aspiring software engineer based in New York City. I'm currently working for Barclays as a Technology Analyst. I graduated in December 2022 from The University of Texas McCombs School of Business and have previously worked for Scholastic, NBCUniversal, and Yext.
        </p>
        <p>
          I'm passionate about leveraging technology to tackle real world problems. In my free time I enjoy working out, skydiving, and traveling. Feel free to get in touch below!
        </p>
        <Icons/>
      </div>
    </div>
  )
}

export default Hero;