import Banner from './Components/Banner/Banner';
import MyServices from './Components/MyServices/MyServices';
import Navbar from './Components/Navbar/Navbar';
import Test from './Test';
// import Test from './Test';

function App() {
  return (
    <div className='max-w-[1500px]'>
      <Navbar />
      <Banner />
      <MyServices />
      {/* <Test /> */}
    </div>
  );
}

export default App;
