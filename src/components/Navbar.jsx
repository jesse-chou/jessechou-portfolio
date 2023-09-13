import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          jessechou.dev
        </Link>
      </div>
      <a href="/public/Jesse Chou Resume 2023.pdf" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;