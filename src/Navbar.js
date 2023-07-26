import './index.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>ReBlogs</h1>
            <div className="links">
                <a href="#">Home</a>
                <a href="#" className="edit">Write Something New</a>
            </div>
        </div>
    );
}
 
export default Navbar;