import React, { useState } from "react";

function SellEdit({ sell, onClose }) {
    const [editedSell, setEditedSell] = useState(sell);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedSell((prevSell) => ({ ...prevSell, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedSell = {
            ...editedSell,
            // Additional properties if needed
        };

        console.log(updatedSell);

        fetch(`/sellEdit/${sell._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedSell),
        })
            .then((res) => {
                if (res.ok) {
                    console.log("数据已更新");
                    alert("数据已更新");
                    onClose();
                    window.location.reload();
                } else {
                    console.error("更新失败");
                }
            })
            .catch((error) => {
                console.error("更新失败", error);
            });

        onClose();
    };

    return (
        <div>
            <h2>Edit Sell</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input
                        type="text"
                        name="year"
                        autoComplete="off"
                        className="form-control"
                        value={editedSell.year}
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
                        value={editedSell.make}
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
                        value={editedSell.model}
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
                        value={editedSell.color}
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
                        value={editedSell.name}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        autoComplete="off"
                        className="form-control"
                        value={editedSell.phone}
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

export default SellEdit;
