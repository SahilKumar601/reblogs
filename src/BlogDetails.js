import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import './index.css';
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const {id}=useParams();
    const navi=useNavigate();
    const {data:blog,ispending,error}=useFetch("http://localhost:4040/blog/"+id);
    const handleClick=()=>{
        fetch("http://localhost:4040/blog/"+id, {
            method:'DELETE'
            }).then(()=>{
                navi('/');
            })
        }
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
                <button onClick={handleClick}>Delete</button>
            </article>
        )}
        </div>
    );
}
export default BlogDetails;