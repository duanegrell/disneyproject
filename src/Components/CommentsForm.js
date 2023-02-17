import React, {useState} from "react";


function CommentsForm( {comments, id} ) {
    // console.log(comments)
    const [newComment, setNewComment] = useState("");

    function handleChange(e) {
        setNewComment(e.target.value);
    }
    function postNewComment(e) {
        e.preventDefault();
        // console.log(newComment);
        fetch(`http://localhost:8004/rides/${id}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Comments: [...comments, newComment] }),
          })
        };
    return (
    <div className="card_comment_form">
        <form id="comment" onSubmit={postNewComment}>
            <label>
                Add a Review: 
                <input 
                    type="text" 
                    className="new-comment"
                    name="comment" 
                    placeholder="Type review here..."
                    onChange={handleChange}
                />
            <button className="comment-button" type="submit">submit</button>
            </label>
        </form>
        <ul className="comments">{comments.map((comment) => (<li>{comment}</li>))}
        </ul>
    </div> 
    );
};

export default CommentsForm;