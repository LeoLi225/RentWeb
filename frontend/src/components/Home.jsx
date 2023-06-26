import React, { useEffect, useState } from "react";
import "./Home.css"

function Cars() {
    const [cars, setCars] = useState([{
        _id: '',
        title: '',
        content: '',
        day: '',
        week: '',
        month: '',
        videoLink: '',
        active: ''
    }])

    useEffect(() => {
        fetch("/cars").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setCars(jsonRes));
    })

    const handleDelete = (carToDelete) => {

        fetch(`/cars/${carToDelete}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.ok) {
                    window.location.reload();
                } else {
                    console.error('删除失败');
                }
            })
            .catch((error) => {
                console.error('删除失败', error);
            });
    };

    const handleCheckboxChange = (event, carId) => {
        const newActive = event.target.checked;

        fetch(`/cars/${carId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ active: newActive }),
        })
            .then((res) => {
                if (res.ok) {
                    console.log("状态已更新");
                } else {
                    console.error("更新失败");
                }
            })
            .catch((error) => {
                console.error("更新失败", error);
            });
    };



    return <div className="container">
        <h1>租车展示</h1>
        {cars?.map(car =>
            <div className="boxes"  key={car._id}>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{car.title}</h5>
                            <p className="card-text">{car.content}</p>
                            <div>每天：${car.day}</div>
                            <div>每周：${car.week}</div>
                            <div>每月：${car.month}</div>
                            <div>视频链接：{car.videoLink}</div>
                            <div>检查：{car.active}</div>
                            <div className="btn btn-primary">Go somewhere</div>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(car._id)}
                            >删除</button>
                            <label className="switch">
                                <input type="checkbox" checked={car.active}
                                    onChange={(event) => handleCheckboxChange(event, car._id)}
                                />
                                <span className="slider"></span>
                            </label>


                        </div>
                    </div>
                </div>
            </div>

        )}

    </div>
}

export default Cars;