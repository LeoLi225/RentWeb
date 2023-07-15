import React, { useState } from "react";

function MessageEdit({ message, onClose }) {
    const [editedMessage, setEditedMessage] = useState(message);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedMessage((prevMessage) => ({ ...prevMessage, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedMessage = {
            ...editedMessage,
            // Additional properties if needed
        };

        console.log(updatedMessage);

        fetch(`/messageEdit/${message._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedMessage),
        })
            .then((res) => {
                if (res.ok) {
                    console.log("Data updated successfully");
                    alert("Data updated successfully");
                    onClose();
                    window.location.reload();
                } else {
                    console.error("Failed to update data");
                }
            })
            .catch((error) => {
                console.error("Failed to update data", error);
            });

        onClose();
    };

    return (
        <div>
            <h2>Edit Message</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="avatarUrl">Avatar URL</label>
                    <input
                        type="text"
                        name="avatarUrl"
                        autoComplete="off"
                        className="form-control"
                        value={editedMessage.avatarUrl}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        className="form-control"
                        value={editedMessage.name}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="messagehere">Message</label>
                    <input
                        type="text"
                        name="messagehere"
                        autoComplete="off"
                        className="form-control"
                        value={editedMessage.messagehere}
                        onChange={handleChange}
                    />
                </div>
                <br />

                <button type="submit">Save</button>
                <button onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}

export default MessageEdit;
