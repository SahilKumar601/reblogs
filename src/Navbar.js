import { Link } from 'react-router-dom';
import './index.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>ReBlogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className="edit">Write Something New</Link>
            </div>
        </div>
    )
}
 
export default Navbar;