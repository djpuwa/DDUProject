import React from 'react'
import logo1 from "./../images/logo1.png";
import "./Navbar1.css";
import "./Navbar2";
import "../components/Sidebar";
import "../components/SidebarMenu";
import withSidebar from '../hoc/withSidebar';


const Navbar1 = () => {
  return (
    <>
    <nav>
      <div class="navbar">
     <div><img src={logo1} alt="" width="100px" height="100px" />
                </div>

        <div class="logo"><a href="/">Dharmshinh Desai university</a></div>
        <div class="search-box">
        
          <div class="input-box">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
       
      </div>
    </nav>
    

    <div class="navbar1">
  <a href="#home">Deshbord</a>
  <div class="subnav">
    <button class="subnavbtn">Insert <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#company">OPtion1</a>
      <a href="#team">Option2</a>
      <a href="#careers">Option3</a>
      <a href="#careers">Option4</a>
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn">Option <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#bring">Option1</a>
      <a href="#deliver">Option2</a>
      <a href="#package">Option3</a>
      <a href="#express">Option4</a>
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn">Option<i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
      <a href="#link4">Link 4</a>
    </div>
  </div>
  
</div>
      
    </>
  )
}

export default withSidebar(Navbar1)
