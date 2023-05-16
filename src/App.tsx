import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles';
import Home from './pages/Home';
import Menu from './pages/Menu';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurante',
    element: <Menu />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <RouterProvider router={rotas} />
      </div>
    </>
  );
}

export default App;
