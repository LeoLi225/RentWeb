import React, { useEffect, useState } from "react";
import "./Home.css"
import Edit from "./Edit.jsx";


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

    const [selectedCar, setSelectedCar] = useState(null);

    const handleEdit = (car) => {
        setSelectedCar(car);
    };


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



    return (
        <div className="container">
            <h1>e租车</h1>
            {selectedCar ? (
                <Edit car={selectedCar} onClose={() => setSelectedCar(null)} />
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr className="tr">
                                <th></th>
                                <th>标题</th>
                                <th>每天 $</th>
                                <th>每周 $</th>
                                <th>每月 $</th>
                                {/* <th>视频链接</th> */}
                                <th></th>
                                <th>开/关</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars?.map((car) => (
                                <tr className="boxes" key={car._id}>

                                    <td className="btn btn-danger"
                                        onClick={() => handleDelete(car._id)}><span className="close">&times;</span>
                                    </td>
                                    <td className="card-title">{car.title}</td>
                                    <td>${car.day}</td>
                                    <td>${car.week}</td>
                                    <td>${car.month}</td>
                                    {/* <td>{car.videoLink}</td> */}
                                    <td><button
                                        className="btn btn-primary"
                                        onClick={() => handleEdit(car)}
                                    >
                                        Edit
                                    </button></td>

                                    <td><label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={car.active}
                                            onChange={(event) => handleCheckboxChange(event, car._id)}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Cars;