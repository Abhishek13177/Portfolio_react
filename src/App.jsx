import './App.css'
import "./index.css"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Id from "./components/id/Idcard"
import Experience from "./components/experience/Experience"
import Contact from './components/contact/Contact'
import Footer from "./components/footer/Footer"


function App() {

  return (
    <>
      <div className='app-container' id="home" >
        <Header/>
        <Hero/>
        <Id/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App;
