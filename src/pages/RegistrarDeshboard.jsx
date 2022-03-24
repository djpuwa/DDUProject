
import Navbar from "./Navbar1";
import withSidebar from '../hoc/withSidebar';

const RegistrarDeshboard = () => {
  return (
    <div>
     <Navbar/>
     
     <h1>Deshboard</h1>
    </div>
  )
}

export default withSidebar(RegistrarDeshboard)
