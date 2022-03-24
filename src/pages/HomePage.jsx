// import React from 'react';
// import bgimg from "./../../imges/bg.jpg";
import Navbar from "./Navbar1";
import withSidebar from '../hoc/withSidebar';

const HomePage = () => {
   
  return <div className="title"><Navbar/></div>;
    
    

  
}

export default withSidebar(HomePage)
