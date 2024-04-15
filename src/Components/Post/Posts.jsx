import Post from "./Post"
import "./style.css"

function Posts () {
    return (
        <div className="Posts">
            <h3>Posts</h3>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts