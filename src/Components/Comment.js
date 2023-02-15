import React from "react";

function Comments() {
    return (
    <div className="card_comment_form">
        <form>
            <label>
                Comment:
                <input type="text" name="comment" />
            </label>
            <input type="submit" name="Submit" />
        </form>
    </div> 
    );
};

export default Comments;




