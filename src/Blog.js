import React,{useContext,useState} from 'react'
import Blogcontext from './Blogcontext'
import {AiOutlineCheck} from 'react-icons/ai';

const Blog = ({id,title,text,author,date}) => {
    const [edit, setEdit] = useState(false);
    const [edited, setEdited] = useState(text);
    const [edittile,setEditTitle] = useState(title);
    const [editauthor,setEditAuthor] = useState(author);
    const editNote = () => setEdit(true);

    const {updateBlog,Delete,updateTitle,updateAuthor} = useContext(Blogcontext);
    const update = () => {
        setEdit(false);
        updateBlog(id, edited);
        updateTitle(id, edittile);
        updateAuthor(id, editauthor);
    };
    
    return (
            <div className="post" key={id}>
              <div>
                 {/* <h3>{title}</h3> */}
                 {edit ? <textarea value={edittile} onChange={(e) => setEditTitle(e.target.value)} autoFocus/> : <h3 onDoubleClick={editNote}>{title}</h3>}
               </div>
               <hr />
               <p>
                 {edit ? <textarea value={edited} onChange={(e) => setEdited(e.target.value)} autoFocus/> : <p onDoubleClick={editNote}>{text}</p>}
               </p>
               <p>
                 Published by {edit ? <textarea value={editauthor} onChange={(e) => setEditAuthor(e.target.value)} autoFocus/> : <b><p onDoubleClick={editNote}>{author}</p></b>}
               </p>
               <div>
                 <h6>
                   <b>{date}</b>
                 </h6>
               </div>
               <div className="buttons">
                 <div>
                   {edit ? <button className='check-button' onClick={update}><AiOutlineCheck/> Save</button> : <button onClick={() => Delete(id)} className="save-button"> Delete</button>}
                 </div>
               </div>
             </div>
    )
}

export default Blog

{/* <button onClick={() => Delete(id)} className="save-button"> Delete</button> */}