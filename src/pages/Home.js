import React, { useEffect } from 'react';
import './Home.css';
import Introduction from '../components/Introduction';
import Featured from '../components/Featured';


const Home = () => {
  return (
    <div id="home" className="main-content">
        <Introduction />
        <Featured />
    </div>
  );
};

export default Home;