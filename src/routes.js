import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./comopnents/Home/Home";
import Experience from "./comopnents/experience/experience";
import Work from "./comopnents/work/work";
import About from "./comopnents/about/about";
import Contact from "./comopnents/contact/contact";
import Resume from "./comopnents/resume/resume";
import { useMediaQuery } from "react-responsive";

const Router = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 990px)",
  });
  return (
    <>
      {isDesktopOrLaptop ? (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about-me' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      ) : (
        <>
          <Home />
          <Experience />
          <Work />
          <About />
          <Contact />
        </>
      )}
    </>
  );
};
export default Router;
