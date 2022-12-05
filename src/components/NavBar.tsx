import companyLogo from '../images/logo.gif'

const NavBar = () => {
    return (
        <div className="navigation">
            <img id="companyLogo" src={companyLogo} alt="" />
            <ul className="navBar">
                <li>
                    <a href="/register">Register</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/addCourse">Add Course</a>
                </li>
                <li>
                    <a href="/catalogue">Courses</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
