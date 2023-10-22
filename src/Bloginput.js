import React, { useContext } from 'react'
import Blogcontext from './Blogcontext'

const Bloginput = () => {
    const {posttitle,setTitle,author,setAuthor,post,setPost,addPost} = useContext(Blogcontext);
    return (
        <div>
            <h3 className="in-between">Add a new post</h3>
            <div className="lower-section">
            <div className="postarea">
                <input
                className="title-box"
                type="text"
                placeholder="Add your title"
                id="title"
                value={posttitle}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input
                className="author"
                type="text"
                placeholder="Add author of the blog"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea
                className="text"
                id="content"
                value={post}
                placeholder="Add your content here"
                rows={10}
                cols={140}
                onChange={(e) => setPost(e.target.value)}
                ></textarea>
            </div>
            <div className="count-words">{post.trim().length}/2000</div>
            <div className="save-class">
                <button className="save-button" onClick={addPost}>
                Publish
                </button>
            </div>
            </div>
        </div>
    )
}

export default Bloginput