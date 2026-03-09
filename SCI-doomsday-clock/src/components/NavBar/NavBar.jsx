import "./NavBar.css";
import "@/index.css";

function NavBar({title})
{
    return <div className="nav-bar">
        <h1>{title}</h1>
    </div>
}

export default NavBar;