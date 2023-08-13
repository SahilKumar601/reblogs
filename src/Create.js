import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Create = () => {
    const navigate=useNavigate();
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const handlesubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        fetch('http://localhost:4040/blog',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("Blog Added");
            navigate('/');
        })
    }
    return ( 
        <div>
            <div className="create">
                <h2>Create a New Post</h2>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="title">Blog Title</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label htmlFor="body">So What's on your Mind</label>
                    <textarea name="body" cols="30" rows="7" required value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
                    <label htmlFor="author">Written By: </label>
                    <input type="text" name="author" value={author} onChange={(e)=> setAuthor(e.target.value)} required />
                    <button>Done</button>
                </form>
            </div>
        </div>    
    )
}
 
export default Create;
