import './index.css';
import BlogList from './BlogLists';
import useFetch from './useFetch';

const Home = () => {
    const{data:blog,ispending,error}=useFetch("http://localhost:4040/blog");
    return (
        <div className="content">
            {error && <div>{error}</div>}
            {ispending && <div>Is Loading</div>}
            {blog && <BlogList blogs={blog} title="New Blogs" />}
        </div>
    )
}

export default Home;
