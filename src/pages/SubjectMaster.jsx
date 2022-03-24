import Navbar from "./Navbar1";
import withSidebar from '../hoc/withSidebar';



const SubjectMaster = () => {
  return <div className="title"> <Navbar/></div>;
};

export default withSidebar(SubjectMaster);
