import React, {useState} from "react";

function Comments() {
    const [comment, setComment] = useState("");

    return (
    <div className="card_comment_form">
        <p>{comment}</p>
        <form>
            <label>
                New Comment: 
                <input 
                    type="text" 
                    name="comment" 
                    placeholder="Type comments here..."
                    onChange={(e) => setComment(e.target.value)}
                />
            </label>
            <input type="submit" name="Submit" onSubmit={(e) => setComment(e.target.value)}/>
        </form>
    </div> 
    );
};

export default Comments;




