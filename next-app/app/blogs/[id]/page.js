import blogs from "@/app/data/blogs";

export function generateStaticParams() {
    return blogs.map((blog) => ({
        id: blog.id
    }))
}


export default function page({ params }) {
    const { id } = params; // folder name id ty hoba 
    const blog = blogs.find(blog => blog.id === id);
    const { title, discription } = blog;
    return (
        <div>
            <div className="p-8">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="mt-6">{discription}</p>
            </div>
        </div>
    )
}
