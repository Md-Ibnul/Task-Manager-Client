import Home from "./Home/home";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Home />
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
};

export default App;
