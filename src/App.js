import Login from "./pages/Login";
import Reset from "./pages/Reset";
import { Routes, Route } from "react-router-dom";
// import './App.css';
import Navbar1 from './pages/Navbar1';
// import SideBar from "./components/Sidebar";
// import './pages/Navbar2';
// import Navbar2 from './pages/Navbar2';
import Students from "./pages/Students";
import FeesHead from "./pages/FeesHead";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Examination from "./pages/Examination";
import Accounting from "./pages/Accounting";
import SubjectMaster from "./pages/SubjectMaster";
import TeachingScheme  from "./pages/TeachingScheme";
import Registrar from "./pages/Registrar";
import ResetPassword from "./pages/ResetPassword";
import Table from "./pages/Table";
import HomePage from "./pages/HomePage";
import RegistrarDeshboard from "./pages/RegistrarDeshboard";

function App() {
  return (
 <>
 

<Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/reset" element={<Reset />}></Route>
        <Route path="/Navbar" element={<Navbar1 />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>

          <Route path="/table" element={<Table />}/>
          <Route path="/Registrar" element={<Registrar />} />
          <Route path="/Students" element={<Students />} />
          <Route path="/subjectmaster" element={<SubjectMaster />} />
          <Route path="/feeshead" element={<FeesHead />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/examination" element={<Examination />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/teachingscheme " element={<TeachingScheme/>} />




          <Route path="/RegistrarDeshboard " element={<RegistrarDeshboard/>} />



        
          

          {/* <Route path="*" element={<> not found</>} /> */}
        </Routes>

 </>
  );
}

export default App;
