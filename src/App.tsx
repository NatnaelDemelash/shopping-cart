import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="container mx-auto m-4 px-2 md:m-8 md:px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
};

export default App;
