import React, { useEffect, useId, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FiSearch } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import Search from "./Search";
import Blogcontext from "./Blogcontext";
import Bloginput from "./Bloginput";
import Bloglist from "./Bloglist";
import Blog from "./Blog";
import i18n from "./i18n";
function App() {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [posttitle, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const addPost = () => {
    if (post.trim() && posttitle.trim() && author.trim()) {
      const data = {
        id: uuid(),
        title: posttitle.trim(),
        text: post.trim(),
        date: new Date().toLocaleDateString(),
        auth: author.trim(),
      };
      setPosts((pre) => [...pre, data]);
      setPost("");
      setTitle("");
      setAuthor("");
    } else {
      alert("title,author name or post content is missing");
    }
  };

  const Delete = (id) => {
    setPosts((pre) => pre.filter((p) => p.id !== id));
  };

  const updateBlog = (id, edited) => {
    setPosts((pre) =>
      pre.map((p) => (p.id === id ? { ...p, text: edited } : p))
    );
  };

  const updateTitle = (id,edittitle) => {
    setPosts((pre) => 
      pre.map((p) => (p.id === id ? {...p, title: edittitle} : p))
    )
  }

  const updateAuthor = (id,editauthor) => {
    setPosts((pre) => 
      pre.map((p) => (p.id === id ? {...p, auth: editauthor} : p))
    )
  }

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("blog-app", JSON.stringify(posts));
    }
  }, [posts]);

  useEffect(() => {
    const n = localStorage.getItem("blog-app");
    if (n) setPosts(JSON.parse(n));
  }, []);

  const value = useMemo(
    () => ({
      post,
      setPost,
      posts,
      setPosts,
      posttitle,
      setTitle,
      author,
      setAuthor,
      search,
      setSearch,
      addPost,
      Delete,
      updateBlog,
      updateTitle,
      updateAuthor
    }),
    [
      post,
      setPost,
      posts,
      setPosts,
      posttitle,
      setTitle,
      author,
      setAuthor,
      search,
      setSearch,
      addPost,
      Delete,
      updateBlog,
      updateTitle,
      updateAuthor
    ]
  );

  return (
    <>
      <Blogcontext.Provider value={value}>
        <Search />

        <Bloglist />

        <Bloginput />
      </Blogcontext.Provider>

      {/* <div className="container search-box">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>  ye search box wala component hai */}

      {/* <h3 className="in-between">Add a new post</h3>
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
              placeholder="Add author of the blog(Optional)"
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
              Save
            </button>
          </div>
      </div>  ye blog input wala component hai */}

      {/* <div>
          {posts.filter(n => n.title.toLowerCase().includes(search.toLowerCase())).map((val) => {
            return (
              <div className="post" key={val.id}>
                <div>
                  <h3>{val.title}</h3>
                </div>
                <hr />
                <p>{val.text}</p>
                <p>
                  Published by <b>{val.auth}</b>
                </p>
                <div>
                  <h6>
                    <b>{val.date}</b>
                  </h6>
                </div>
                <div>
                  <button onClick={() => Delete(val.id)} className="save-button">
                    <AiFillDelete /> Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>  ye blog list wala component hai */}
    </>
  );
}

export default App;
