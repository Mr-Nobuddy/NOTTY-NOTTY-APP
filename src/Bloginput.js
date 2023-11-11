import React, { useContext } from 'react'
import Blogcontext from './Blogcontext'
import { useTranslation } from 'react-i18next';

const Bloginput = () => {
    const {posttitle,setTitle,author,setAuthor,post,setPost,addPost} = useContext(Blogcontext);
    const {t,i18n} = useTranslation();
    return (
        <div>
            <h3 className="in-between">{t('add_new')}</h3>
            <div className="lower-section">
            <div className="postarea">
                <input
                className="title-box"
                type="text"
                placeholder={t('title_placeholder')}
                id="title"
                value={posttitle}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input
                className="author"
                type="text"
                placeholder={t("author_placeholder")}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea
                className="text"
                id="content"
                value={post}
                placeholder={t("content_placeholder")}
                rows={10}
                cols={140}
                onChange={(e) => setPost(e.target.value)}
                ></textarea>
            </div>
            <div className="count-words">{post.trim().length}/2000</div>
            <div className="save-class">
                <button className="save-button" onClick={addPost}>
                {t("publish")}
                </button>
            </div>
            </div>
        </div>
    )
}

export default Bloginput