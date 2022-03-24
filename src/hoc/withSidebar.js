import SideBar from "../components/Sidebar"

function withSidebar(Component) {
    return function (props) {
        return <><SideBar /><Component {...props} /></>
    }
}

export default withSidebar;