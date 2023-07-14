import React, { useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function Create() {
    const uniqueId = uuidv4();

    const [input, setInput] = useState({
        _id: uniqueId,
        membership: '',
        vip: '',
        svip: '',
        ssvip: '',
        SRank1_name: '',
        SRank2_name: '',
        SRank3_name: '',
        SRank1_avatar: '',
        SRank2_avatar: '',
        SRank3_avatar: '',
        MRank1_name: '',
        MRank2_name: '',
        MRank3_name: '',
        MRank1_avatar: '',
        MRank2_avatar: '',
        MRank3_avatar: '',
        M1: '',
        M2: '',
        M3: '',
    });

    const [sellInput, setSellInput] = useState({
        _id: uniqueId,
        year: '',
        make: '',
        model: '',
        km: '',
        color: '',
        price: '',
        name: '',
        place: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            };
        });
    }

    function handleSellChange(event) {
        const { name, value } = event.target;

        setSellInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    }

    function handleClick(event) {
        event.preventDefault();

        const newCloud = {
            _id: input._id,
            membership: input.membership,
            vip: input.vip,
            svip: input.svip,
            ssvip: input.ssvip,
            SRank1_name: input.SRank1_name,
            SRank2_name: input.SRank2_name,
            SRank3_name: input.SRank3_name,
            SRank1_avatar: input.SRank1_avatar,
            SRank2_avatar: input.SRank2_avatar,
            SRank3_avatar: input.SRank3_avatar,
            MRank1_name: input.MRank1_name,
            MRank2_name: input.MRank2_name,
            MRank3_name: input.MRank3_name,
            MRank1_avatar: input.MRank1_avatar,
            MRank2_avatar: input.MRank2_avatar,
            MRank3_avatar: input.MRank3_avatar,
            M1: input.M1,
            M2: input.M2,
            M3: input.M3,
        };

        try {
            axios.post('http://localhost:3001/create', newCloud);
            alert('成功添加');
            window.location.reload();
        } catch (error) {
            alert('出现错误');
        }
    }

    function handleSellSubmit(event) {
        event.preventDefault();

        const newSell = {
            _id: sellInput._id,
            year: sellInput.year,
            make: sellInput.make,
            model: sellInput.model,
            km: sellInput.km,
            color: sellInput.color,
            price: sellInput.price,
            name: sellInput.name,
            place: sellInput.place
        };

        try {
            axios.post('http://localhost:3001/sells', newSell);
            alert('出售记录成功添加');
            window.location.reload();
        } catch (error) {
            alert('添加出售记录时出现错误');
        }
    }

    return (
        <div className="container">
            <br />
            <h1>创建一个新的云服务</h1>
            <br />
            <form>
                <div className="form-group">
                    <div>会员</div>
                    <input onChange={handleChange} name="membership" value={input.membership} autoComplete="off" className="form-control" placeholder="会员" />
                </div>
                <br />
                <div className="form-group">
                    <div>VIP</div>
                    <input onChange={handleChange} name="vip" value={input.vip} autoComplete="off" className="form-control" placeholder="VIP" />
                </div>
                <br />
                <div className="form-group">
                    <div>SVIP</div>
                    <input onChange={handleChange} name="svip" value={input.svip} autoComplete="off" className="form-control" placeholder="SVIP" />
                </div>
                <br />
                <div className="form-group">
                    <div>SSVIP</div>
                    <input onChange={handleChange} name="ssvip" value={input.ssvip} autoComplete="off" className="form-control" placeholder="SSVIP" />
                </div>
                <br />
                <div className="form-group">
                    <div>S等级1名称</div>
                    <input onChange={handleChange} name="SRank1_name" value={input.SRank1_name} autoComplete="off" className="form-control" placeholder="S等级1名称" />
                </div>
                <br />
                <div className="form-group">
                    <div>S等级2名称</div>
                    <input onChange={handleChange} name="SRank2_name" value={input.SRank2_name} autoComplete="off" className="form-control" placeholder="S等级2名称" />
                </div>
                <br />
                <div className="form-group">
                    <div>S等级3名称</div>
                    <input onChange={handleChange} name="SRank3_name" value={input.SRank3_name} autoComplete="off" className="form-control" placeholder="S等级3名称" />
                </div>
                <br />
                <div className="form-group">
                    <div>S等级1头像</div>
                    <input onChange={handleChange} name="SRank1_avatar" value={input.SRank1_avatar} autoComplete="off" className="form-control" placeholder="S等级1头像" />
                </div>
                <br />
                <div className="form-group">
                    <div>S等级2头像</div>
                    <input onChange={handleChange} name="SRank2_avatar" value={input.SRank2_avatar} autoComplete="off" className="form-control" placeholder="S等级2头像" />
                </div>
                <br />
                <div className="form-group">
                    <div>S等级3头像</div>
                    <input onChange={handleChange} name="SRank3_avatar" value={input.SRank3_avatar} autoComplete="off" className="form-control" placeholder="S等级3头像" />
                </div>
                <br />
                <div className="form-group">
                    <div>M等级1名称</div>
                    <input onChange={handleChange} name="MRank1_name" value={input.MRank1_name} autoComplete="off" className="form-control" placeholder="M等级1名称" />
                </div>
                <br />
                <div className="form-group">
                    <div>M等级2名称</div>
                    <input onChange={handleChange} name="MRank2_name" value={input.MRank2_name} autoComplete="off" className="form-control" placeholder="M等级2名称" />
                </div>
                <br />
                <div className="form-group">
                    <div>M等级3名称</div>
                    <input onChange={handleChange} name="MRank3_name" value={input.MRank3_name} autoComplete="off" className="form-control" placeholder="M等级3名称" />
                </div>
                <br />
                <div className="form-group">
                    <div>M等级1头像</div>
                    <input onChange={handleChange} name="MRank1_avatar" value={input.MRank1_avatar} autoComplete="off" className="form-control" placeholder="M等级1头像" />
                </div>
                <br />
                <div className="form-group">
                    <div>M等级2头像</div>
                    <input onChange={handleChange} name="MRank2_avatar" value={input.MRank2_avatar} autoComplete="off" className="form-control" placeholder="M等级2头像" />
                </div>
                <br />
                <div className="form-group">
                    <div>M等级3头像</div>
                    <input onChange={handleChange} name="MRank3_avatar" value={input.MRank3_avatar} autoComplete="off" className="form-control" placeholder="M等级3头像" />
                </div>
                <br />
                <div className="form-group">
                    <div>M1</div>
                    <input onChange={handleChange} name="M1" value={input.M1} autoComplete="off" className="form-control" placeholder="M1" />
                </div>
                <br />
                <div className="form-group">
                    <div>M2</div>
                    <input onChange={handleChange} name="M2" value={input.M2} autoComplete="off" className="form-control" placeholder="M2" />
                </div>
                <br />
                <div className="form-group">
                    <div>M3</div>
                    <input onChange={handleChange} name="M3" value={input.M3} autoComplete="off" className="form-control" placeholder="M3" />
                </div>
                <br />
                <button onClick={handleClick} className="btn btn-lg btn-info">添加云服务</button>
            </form>
            <br />
            <form>
                <div className="form-group">
                    <div>年份</div>
                    <input
                        onChange={handleSellChange}
                        name="year"
                        value={sellInput.year}
                        autoComplete="off"
                        className="form-control"
                        placeholder="年份"
                    />
                </div>
                <div className="form-group">
                    <div>制造商</div>
                    <input
                        onChange={handleSellChange}
                        name="make"
                        value={sellInput.make}
                        autoComplete="off"
                        className="form-control"
                        placeholder="制造商"
                    />
                </div>
                <div className="form-group">
                    <div>型号</div>
                    <input
                        onChange={handleSellChange}
                        name="model"
                        value={sellInput.model}
                        autoComplete="off"
                        className="form-control"
                        placeholder="型号"
                    />
                </div>
                <div className="form-group">
                    <div>公里数</div>
                    <input
                        onChange={handleSellChange}
                        name="km"
                        value={sellInput.km}
                        autoComplete="off"
                        className="form-control"
                        placeholder="公里数"
                    />
                </div>
                <div className="form-group">
                    <div>颜色</div>
                    <input
                        onChange={handleSellChange}
                        name="color"
                        value={sellInput.color}
                        autoComplete="off"
                        className="form-control"
                        placeholder="颜色"
                    />
                </div>
                <div className="form-group">
                    <div>价格</div>
                    <input
                        onChange={handleSellChange}
                        name="price"
                        value={sellInput.price}
                        autoComplete="off"
                        className="form-control"
                        placeholder="价格"
                    />
                </div>
                <div className="form-group">
                    <div>姓名</div>
                    <input
                        onChange={handleSellChange}
                        name="name"
                        value={sellInput.name}
                        autoComplete="off"
                        className="form-control"
                        placeholder="姓名"
                    />
                </div>
                <div className="form-group">
                    <div>位置</div>
                    <input
                        onChange={handleSellChange}
                        name="place"
                        value={sellInput.place}
                        autoComplete="off"
                        className="form-control"
                        placeholder="位置"
                    />
                </div>

                <button onClick={handleSellSubmit} className="btn btn-lg btn-info">添加卖车记录</button>
            </form>
        </div>
    );
}

export default Create;
