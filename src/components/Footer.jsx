import Icons from "./Icons";

// components/Footer.jsx

const Footer = () => {
  return (
    <>
      <hr/>
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Jesse Chou's Portfolio
        </p>
        <Icons/>
      </div>
    </>
  )
}

export default Footer;