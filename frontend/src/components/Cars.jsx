import React, { useEffect, useState } from "react";

function Cars() {

    const [cars, setCars] = useState([{
        title: '',
        content: '',
        day: '',
        week: '',
        month: ''
    }])

    useEffect(() => {
        fetch("/cars").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setCars(jsonRes));
    })

    return <div className="container">
        <h1>租车展示</h1>
        {cars?.map(car =>
            <div>
                <h1>{car.title}</h1>
                <h4>{car.content}</h4>
                <div>每天：${car.day}</div>
                <div>每周：${car.week}</div>
                <div>每月：${car.month}</div>
            </div>

        )}

    </div>
}

export default Cars;