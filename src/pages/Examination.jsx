import Navbar from "./Navbar1";
import withSidebar from '../hoc/withSidebar';



const Examination = () => {
  return <div className="title"><Navbar/></div>;
};

export default withSidebar(Examination);