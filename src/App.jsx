import Blog from "./components/Blog";
import Headers from "./components/Header";

import img1 from "./assets/leaders.png";
import img2 from "./assets/img2_1.jpg";
import img3 from "./assets/img3_1.jpg";
import Companies from "./components/Companies";
import Review from "./components/Review";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";




// import Review from "./components/Review";
// import Footer from "./components/Footer/Footer";

// import Features from './components/Features'
// import Ours from "./components/Ours";

// import Projects from "./components/Projects";
// import Hire from "./components/Hire";
// import Video from "./components/Video";
// import Explain from "./components/Explain";
// import Contact from "./components/Contact";
// import Leadership from "./components/Leadership";




import Features from './components/Features'
import Ours from "./components/Ours";
const App = () => {
  const contents = [
    {
      title: "​Leadership Management",
      des: "​Our leadership management services help businesses develop the skills and capabilities necessary to build effective and high-performing teams. We provide a range of services, from leadership training and coaching to talent management and succession planning",
      img: img1,
    },
    {
      title: "Enjoy Your Life With Us Now!",
      des: "Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      img: img2,
    },
    {
      title: "Let’s Enjoy Nature With Us",
      des: "Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      img: img3,
    },
  ];
  return (
    <div className="font-Poppins">

      <Headers />
      <Blog content={contents[0]} />


<BrowserRouter>
    
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<Headers/>} />
        <Route path="about" element={<About />} />
       
       
   
        
      </Routes>
      <Footer/>
      
    </BrowserRouter>

      
      
      
     

      <Companies />
      <Features/>
      <Ours/>
      
      <Blog content={contents[1]} alternative={true} />
      <Blog content={contents[2]} />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
