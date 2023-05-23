import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { GlobalCss } from './styles';

import Rotas from './routes'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;


// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { GlobalCss } from './styles';
// import Home from './pages/Home';
// import Menu from './pages/Menu';

// const rotas = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/restaurante',
//     element: <Menu />
//   }
// ])

// function App() {
//   return (
//     <>
//       <GlobalCss />
//       <div>
//         <RouterProvider router={rotas} />
//       </div>
//     </>
//   );
// }

// export default App;
