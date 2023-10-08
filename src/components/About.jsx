import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                    I&apos;ve always been interested in technology for as long as I can remember. It wasn&apos;t until I discovered software engineering where I saw the power in being able to create elegant and effecitve solutions to everyday problems. After graduating and moving to NYC, I enrolled in Codesmith, a full-stack coding bootcamp where I&apos;ve been fortunate to have found such an incredible community. Over the past couple months, I&apos;ve been able to get hands-on experience with technologies such as React, Node, PostgresQL, MongoDB, Jest, and many more.
                    </p>
                    <p>As for my career, I&apos;m currently working as a Technology Analyst for Barclays. For my first rotation, I&apos;m working within the Global Technology Infrastructure Services division helping support a COBOL host terminal emulator. I was previously at Scholastic as an Associate Business Analyst where I led product development for a corporate eReader written in React.js. I&apos;m interested in design, development, and everything in between to contribute to a company&apos;s objectives while obtaining valuable industry experience. Checkout my projects and skillset below!</p>
                </div>
                <div className="about-img">
                    <Image src='/images/profile pic.png' className="profile-img" width={300} height={500} alt="Jesse Profile Pic" />
                </div>
            </div>
        </div>

    )
}

export default About;