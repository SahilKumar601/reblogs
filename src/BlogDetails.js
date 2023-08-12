import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import './index.css';

const BlogDetails = () => {
    const {id}=useParams();
    const {data:blog,ispending,error}=useFetch("http://localhost:4040/blog/"+id);
    return ( 
        <div className="blog-details">
        { ispending && <div> Loading..🧐 </div> }
        {error && <div> {error} ❌Oops..😐❌</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
                <div>
                    {blog.body}
                </div>
            </article>
        )}
        </div>
    );
}
 
export default BlogDetails;