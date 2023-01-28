import AboutMe from './Components/AboutMe/AboutMe';
import Banner from './Components/Banner/Banner';
import CodingSkil from './Components/CodingSkil/CodingSkil';
import Experience from './Components/Experience/Experience';
import MyServices from './Components/MyServices/MyServices';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-[1500px]'>
      <Navbar />
      <Banner />
      <AboutMe />
      <MyServices />
      <Experience />
      <CodingSkil />
    </div>
  );
}

export default App;
