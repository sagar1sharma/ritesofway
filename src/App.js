import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe"
import ContactCarolyn from "./pages/ContactCarolyn"
import DogCelebrations from "./pages/DogCelebrations"
import LivingFunerals from "./pages/LivingFunerals"
import Namings from "./pages/Namings"
import QuirkyWedding from "./pages/QuirkyWedding"
import ReadBlogs from "./pages/ReadBlogs"

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<AboutMe />} />
      <Route path="/Contact Carolyns" element={<ContactCarolyn />} />
      <Route path="/Dog Celebrations" element={<DogCelebrations />} />
      <Route path="/Living Funerals" element={<LivingFunerals />} />
      <Route path="/Namings" element={<Namings />} />
      <Route path="/Quirky Weddings" element={<QuirkyWedding />} />
      <Route path="/Read The Blogs" element={<ReadBlogs />} />
    </Routes>
  );
}
export default App;
