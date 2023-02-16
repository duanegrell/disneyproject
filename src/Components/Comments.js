import React, {useState} from "react";


function Comments( {comment} ) {

    const [newComment, setNewComment] = useState("");
    
    function postNewComment(e) {
        e.preventDefault();

        const newCommentArray = [...comment, newComment]
        console.log(newCommentArray)

        // fetch(` http://localhost:8004/rides/`, {
        //     method: "PATCH",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         newCommentArray
        //     })
        // })

    }

    return (
    <div className="card_comment_form">
        <form id="comment">
            <p className="comments">Reviews: {comment}</p>
            <label>
                Add a Review: 
                <input 
                    type="text" 
                    className="new-comment"
                    name="comment" 
                    placeholder="Type comments here..."
                    onChange={(e) => setNewComment(e.target.value)}
                />
            <button className="comment-button" type="submit" onClick={postNewComment}>submit</button>
            </label>
        </form>
    </div> 
    );
};

export default Comments;




// newCommentArray.forEach((oneComment) => {
//     const li = document.createElement("li");
//     li.textContent = oneComment;
// })