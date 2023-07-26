import './index.css'
import {useState} from 'react';
import BlogList from './BlogLists';

const Home = () => {
    const [blog, setblog] = useState([
        {title:'New day in LA', body:"lorem ispne .......", author:"James", id:1},
        {title:'Welcome Party', body:"lorem ispne .......", author:"James", id:2},
        {title:'Game Fest', body:"lorem ispne .......", author:"James", id:3},
        {title:'Riot on Streets', body:"lorem ispne .......", author:"James", id:4}
    ]);
    return ( 
        <div className="content">
            <BlogList  blogs={blog} title="New Blogs" />
        </div>
     );
}
 
export default Home;