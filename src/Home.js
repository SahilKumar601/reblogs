import './index.css';
import { useState, useEffect } from 'react';
import BlogList from './BlogLists';

const Home = () => {
    const [error,seterror]=useState();
    const [blog, setblog] = useState([]);
    const [ispending, setpending] = useState(true);

    function handleDelete(id) {
        const newblogs = blog.filter(blog => blog.id !== id);
        setblog(newblogs);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:4040/blog")
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Couldn't Fetch the Data For that Request");
                    }
                    return res.json();
                })
                .then(data => {
                    setblog(data);
                    setpending(false);
                })
                .catch((err) => {
                    setpending(false);
                    seterror(err.message);
                });
        }, 1000);
    }, []);

    return (
        <div className="content">
            {error && <div>{error}</div>}
            {ispending && <div>Is Loading</div>}
            {blog && <BlogList blogs={blog} title="New Blogs" />}
        </div>
    );
}

export default Home;
