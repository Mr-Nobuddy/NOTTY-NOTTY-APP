import React, { useContext,useState } from "react";
import Blogcontext from "./Blogcontext";
import { AiFillDelete } from "react-icons/ai";
import {AiOutlineCheck} from 'react-icons/ai';
import {GrUpdate} from 'react-icons/gr';
import Blog from "./Blog";
const style = {};
const Bloglist = ({id,post,text}) => {
  const { posts, setPosts, Delete, search,updateBlog} = useContext(Blogcontext);

  // const [edit, setEdit] = useState(false);
  // const [edited, setEdited] = useState(text);
  // const editNote = () => setEdit(true);

  // // const {updateBlog} = useContext(Blogcontext);
  // const update = () => {
  //     setEdit(false);
  //     updateBlog(id, edited);
  // };
  return (
    <div>
      {posts
        .filter((val) => val.title.toLowerCase().includes(search.toLowerCase()))
        .map((val) =>{

          return (
            <Blog key={val.id} id={val.id} title={val.title} text = {val.text} author={val.auth} date={val.date}/>
            // <div className="post" key={val.id}>
            //   <div>
            //     <h3>{val.title}</h3>
            //   </div>
            //   <hr />
            //   <p>
            //     {edit ? <textarea value={edited} onChange={(e) => setEdited(e.target.value)} autoFocus/> : <p onDoubleClick={editNote}>{val.text}</p>}
            //   </p>
            //   <p>
            //     Published by <b>{val.auth}</b>
            //   </p>
            //   <div>
            //     <h6>
            //       <b>{val.date}</b>
            //     </h6>
            //   </div>
            //   <div className="buttons">
            //     <div>
            //       {/* <button onClick={() => Delete(val.id)} className="save-button"> Delete</button> */}
            //       {edit ? <button className='check-button' onClick={update}><AiOutlineCheck/> Save</button> : <button onClick={() => Delete(id)} className="save-button"> Delete</button>}
            //     </div>
            //   </div>
            // </div>
          );
        })}
    </div>
  );
};

export default Bloglist;
