import { Link } from 'react-router-dom';
import './App.css';
import { Outlet } from 'react-router-dom'; 
import SignUp from './Component/signup';

function App() {
   return (
      <div className="w-full h-full">
         <Outlet />
      </div>
   );
}

export default App; 
