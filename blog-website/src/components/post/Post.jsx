import React, { useState } from "react";
import './post.css'


function Post() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Title:", title);
        console.log("Description:", description);
        setTitle("");
        setDescription("");
    };

    return (
        <div className="form-container">
            <h2>Submit Your Post</h2>
            <form onSubmit={handleSubmit}>
                <label className="label">
                    Title:
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="input-field"
                    />
                </label>

                <label className="label">
                    Description:
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className="textarea-field"
                    ></textarea>
                </label>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Post;
