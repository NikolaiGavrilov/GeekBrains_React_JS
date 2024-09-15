import { useState } from "react";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это 1-й комментарий" },
        { id: 2, text: "Это 2-й комментарий" },
        { id: 3, text: "Это 3-й комментарий" },
        { id: 4, text: "Это 4-й комментарий" },
        { id: 5, text: "Это 5-й комментарий" }
    ]);

    const removeComment = (id) => {
        const newComments = comments.filter((comment) => comment.id !== id);
        setComments(newComments);
    }

    return comments.map(comment => (
        <div key={comment.id} className="comment">
            <p className="comment__text">{comment.text}</p>
            <button className="comment__delete-button" onClick={() => removeComment(comment.id)}>Удалить</button>
        </div>
    ));
}

export default CommentsList;