import React, { useState } from "react";
import axios from 'axios';

function Create() {
    const [input, setInput] = useState({
        title: '',
        content: '',
        day: '',
        week: '',
        month: ''

    })

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();

        const newCar = {
            title: input.title,
            content: input.content,
            day: input.day,
            week: input.week,
            month: input.month
        }

        axios.post('http://localhost:3001/create', newCar)
    }


    return <div className="container">
        <br />
        <h1>创建一个新的租车</h1>
        <br />
        <form>
            <div className="form-group">
                <div>车名字</div>
                <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control" placeholder="车名字"></input>
            </div>
            <br />
            <div className="form-group">
                <div>车辆信息</div>
                <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control" placeholder="车辆信息"></textarea>
            </div>
            <br />
            <div className="col-3">
                <div>一天</div>
                <input type="text" onChange={handleChange} name="day" value={input.day} className="form-control" placeholder="$" />
            </div>
            <br />
            <div className="col-3">
                <div>一周</div>
                <input type="text" onChange={handleChange} name="week" value={input.week} className="form-control" placeholder="$" />
            </div>
            <br />
            <div className="col-3">
                <div>一月</div>
                <input type="text" onChange={handleChange} name="month" value={input.month} className="form-control" placeholder="$" />
            </div>
            <br />
            <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>

        </form>



    </div>
}

export default Create;