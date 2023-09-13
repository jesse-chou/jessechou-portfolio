import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      {/* <main>{children}</main> */}
      <Hero/>
      <Footer/>
    </>
  )
}

export default Layout