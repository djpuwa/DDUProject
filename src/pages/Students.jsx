import SideBar from "../components/Sidebar";
import Navbar from "./Navbar1";
import withSidebar from '../hoc/withSidebar';

const Students = () => {
  return <div className="title">
    <SideBar />
    <Navbar/>
  </div>;
};

export default withSidebar(Students);
