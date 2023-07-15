import React, { useState } from "react";

function NewcomeEdit({ newcome, onClose }) {
    const [editedNewcome, setEditedNewcome] = useState(newcome);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedNewcome((prevNewcome) => ({ ...prevNewcome, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedNewcome = {
            ...editedNewcome,
            // Additional properties if needed
        };

        console.log(updatedNewcome);

        fetch(`/newcomeEdit/${newcome._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedNewcome),
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
            <h2>Edit Newcome</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input
                        type="text"
                        name="year"
                        autoComplete="off"
                        className="form-control"
                        value={editedNewcome.year}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="make">Make</label>
                    <input
                        type="text"
                        name="make"
                        autoComplete="off"
                        className="form-control"
                        value={editedNewcome.make}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        name="model"
                        autoComplete="off"
                        className="form-control"
                        value={editedNewcome.model}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="color">Color</label>
                    <input
                        type="text"
                        name="color"
                        autoComplete="off"
                        className="form-control"
                        value={editedNewcome.color}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="km">KM</label>
                    <input
                        type="text"
                        name="km"
                        autoComplete="off"
                        className="form-control"
                        value={editedNewcome.km}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="place">Place</label>
                    <input
                        type="text"
                        name="place"
                        autoComplete="off"
                        className="form-control"
                        value={editedNewcome.place}
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

export default NewcomeEdit;
