import './index.css'
import { useState, useEffect } from 'react';
import BlogList from './BlogLists';

const Home = () => {
    const [blog, setblog] = useState([null]);
    const [ispending,setpending]=useState(true);
    function handleDelete(id){
        const newblogs=blog.filter(blog => blog.id !== id);
        setblog(newblogs);
    }
    useEffect(()=>{
        console.log('use effect arn')
        setTimeout(()=>{
            fetch("http://localhost:4040/blog")
            .then((res)=>{
                return res.json();
            })
            .then(data=>{
                setblog(data);
                setpending(false)
            });
        },1000)
    },[])
    return ( 
        <div className="content">
            {ispending&&<div>Is Loading</div>}
            {/* {blog && <BlogList  blogs={blog} title="New Blogs"/>}; */}
        </div>
     )
}
 
export default Home;