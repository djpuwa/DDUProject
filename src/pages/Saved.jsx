import Navbar from "./Navbar1";
import withSidebar from '../hoc/withSidebar';


const Saved = () => {
  return <div className="title"><Navbar/></div>;
};

export default withSidebar(Saved);
