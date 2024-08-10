import BlogItem from "../components/BlogItem";
import blogs from "../data/blogs";

export default function Blogs() {
    return (
        <div className='p-8'>
            <h1 className='text-xl font-bold'>Blog List</h1>
            <div className="mt-6 p4">
                {blogs.map(blog => <BlogItem title={blog.title} discription={blog.discription} key={blog.id} />)}
            </div>
        </div>
    )
}
