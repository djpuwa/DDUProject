
import Navbar from "./Navbar1";

import withSidebar from '../hoc/withSidebar';
import  Table  from "./Table";

const Registrar = () => {
  return <div className="title"><Navbar/>
  <Table/>
 
  
  </div>;
};

export default withSidebar(Registrar);
