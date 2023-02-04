import Home from './Components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import ReactLoading from 'react-loading';
import { useState } from 'react';

function App() {

  const [loadingTime, setLoadingTime] = useState(true);

  setTimeout(() => {
    setLoadingTime(false);
  }, 3000)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/', element: <Home />
        },

        {
          path: 'home', element: <Home />
        },

        {
          path: 'blogs', element: <Blogs />
        },

        {
          path: '*', element: <NotFound />
        }
      ]
    },
  ])

  return (
    <>
      {
        !loadingTime ? <RouterProvider router={router} /> :
          <ReactLoading
            className='flex justify-center items-center'
            type={"bars"}
            color={"#fff"}
            height={'100vh'}
            width={100}
          />
      }
    </>
  );
}

export default App;
