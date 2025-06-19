import { useParams } from "react-router-dom";

const blogPosts = [
    { id: 1, title: "First Blog Post", content: "This is my first post!" },
    { id: 2, title: "React is Awesome!", content: "Let's learn React together." }
];

function PostDetails() {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    return (
        <div>
            <h2>{post?.title}</h2>
            <p>{post?.content}</p>
        </div>
    );
}

export default PostDetails;
