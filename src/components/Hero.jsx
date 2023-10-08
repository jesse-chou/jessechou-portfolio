// components/Hero.jsx

import Image from "next/image";
import Icons from "./Icons"

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile pic.png' className="profile-img" width={300} height={300} alt="Jesse's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I&apos;m Jesse 👋</h1>
        <p>
          I&apos;m an aspiring software engineer based in New York City currently working for Barclays as a Technology Analyst.
        </p>
        <p>
          I graduated from The University of Texas at Austin - McCombs School of Business with a degree in Management Information Systems and have previously worked for Scholastic, NBCUniversal, and Yext.
        </p>
        <p>
          I&apos;m passionate about leveraging technology to solve real world problems. In my free time I enjoy working out, skydiving, and traveling. Feel free to get in touch below!
        </p>
      </div>
        <Icons/>
    </div>
  )
}

export default Hero;