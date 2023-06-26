import React, { useState } from "react";

function Edit({ car, onClose }) {
    const [editedCar, setEditedCar] = useState(car);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedCar((prevCar) => ({ ...prevCar, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        

        const updatedCar = {
            ...editedCar,
            // Additional properties if needed
        };

        console.log(updatedCar);

        fetch(`/carEdit/${car._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCar),
        })
            .then((res) => {
                if (res.ok) {
                    console.log("数据已更新");
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
            <h2>Edit Car</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="form-group">车名字</label>
                    <input
                        type="text"
                        name="title"
                        autoComplete="off"
                        className="form-control"
                        value={editedCar.title}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">车辆信息</label>
                    <input
                        type="text"
                        name="content"
                        autoComplete="off"
                        className="form-control"
                        value={editedCar.content}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="col-3">
                    <label htmlFor="title" className="form-group">一天</label>
                    <input
                        type="text"
                        name="day"
                        autoComplete="off"
                        className="form-control"
                        value={editedCar.day}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="col-3">
                    <label htmlFor="title" className="form-group">一周</label>
                    <input
                        type="text"
                        name="week"
                        autoComplete="off"
                        className="form-control"
                        value={editedCar.week}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="col-3">
                    <label htmlFor="title" className="form-group">一月</label>
                    <input
                        type="text"
                        name="month"
                        autoComplete="off"
                        className="form-control"
                        value={editedCar.month}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="col-10">
                    <label htmlFor="title" className="form-group">视频链接</label>
                    <input
                        type="text"
                        name="videoLink"
                        autoComplete="off"
                        className="form-control"
                        value={editedCar.videoLink}
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

export default Edit;
