import React from 'react'
//import ReactDOM from 'react-dom'

const CommentDetails = (props) => {
    console.log(props);
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                       {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">Nice blog Post! </div>
                </div>
            </div>
    );
}
export default CommentDetails ;