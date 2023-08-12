import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogdetails/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <h5>{blog.body}</h5>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;