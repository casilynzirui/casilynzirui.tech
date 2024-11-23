import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css';
import Introduction from '../components/Introduction';
import Featured from '../components/Featured';


const Home = () => {
  
  return (
    <div className="main-content">
        

        <Introduction />
        <Featured />
    </div>
  );
};

export default Home;