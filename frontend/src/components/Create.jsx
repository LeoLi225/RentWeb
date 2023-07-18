import React, { useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "./Create.css";

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
        Satisfaction: ''
    });

    const [sellInput, setSellInput] = useState({
        _id: uniqueId,
        year: '',
        make: '',
        model: '',
        color: '',
        name: '',
        phone: ''
    });

    const [newcomeInput, setNewcomeInput] = useState({
        _id: uniqueId,
        year: '',
        make: '',
        model: '',
        color: '',
        km: '',
        place: ''
    });

    const [messageInput, setMessageInput] = useState({
        _id: uniqueId,
        avatarUrl: '',
        name: '',
        messagehere: ''
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

    function handleNewcomeChange(event) {
        const { name, value } = event.target;

        setNewcomeInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    }

    function handleMessageChange(event) {
        const { name, value } = event.target;

        setMessageInput(prevInput => ({
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
            Satisfaction: input.Satisfaction,
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
            color: sellInput.color,
            name: sellInput.name,
            phone: sellInput.phone
        };

        try {
            axios.post('http://localhost:3001/sells', newSell);
            alert('客户需求成功添加');
            window.location.reload();
        } catch (error) {
            alert('添加客户需求时出现错误');
        }
    }

    function handleNewcomeSubmit(event) {
        event.preventDefault();

        const newNewcome = {
            _id: newcomeInput._id,
            year: newcomeInput.year,
            make: newcomeInput.make,
            model: newcomeInput.model,
            color: newcomeInput.color,
            km: newcomeInput.km,
            place: newcomeInput.place
        };

        try {
            axios.post('http://localhost:3001/newcome', newNewcome);
            alert('最新到店成功添加');
            window.location.reload();
        } catch (error) {
            alert('添加新到店时出现错误');
        }
    }

    function handleMessageSubmit(event) {
        event.preventDefault();

        const newMessage = {
            _id: messageInput._id,
            avatarUrl: messageInput.avatarUrl,
            name: messageInput.name,
            messagehere: messageInput.messagehere,
        };

        try {
            axios.post('http://localhost:3001/message', newMessage);
            alert('留言成功添加');
            window.location.reload();
        } catch (error) {
            alert('添加留言时出现错误');
        }
    }


    return (
        <div className="container">
            <br />
            <h1>创建一个新的云服务</h1>
            <br />
            <form>
                <div className="form-group col-md-4">
                    <div>会员</div>
                    <input onChange={handleChange} name="membership" value={input.membership} autoComplete="off" className="form-control" placeholder="会员" />
                </div>
                <br />
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div>VIP</div>
                        <input onChange={handleChange} name="vip" value={input.vip} autoComplete="off" className="form-control" placeholder="VIP" />
                    </div>

                    <div className="form-group col-md-4">
                        <div>SVIP</div>
                        <input onChange={handleChange} name="svip" value={input.svip} autoComplete="off" className="form-control" placeholder="SVIP" />
                    </div>

                    <div className="form-group col-md-4">
                        <div>SSVIP</div>
                        <input onChange={handleChange} name="ssvip" value={input.ssvip} autoComplete="off" className="form-control" placeholder="SSVIP" />
                    </div>
                </div>
                <br />
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div>S等级1名称</div>
                        <input onChange={handleChange} name="SRank1_name" value={input.SRank1_name} autoComplete="off" className="form-control" placeholder="S等级1名称" />
                    </div>
                    <br />
                    <div className="form-group  col-md-4">
                        <div>S等级2名称</div>
                        <input onChange={handleChange} name="SRank2_name" value={input.SRank2_name} autoComplete="off" className="form-control" placeholder="S等级2名称" />
                    </div>
                    <br />
                    <div className="form-group col-md-4">
                        <div>S等级3名称</div>
                        <input onChange={handleChange} name="SRank3_name" value={input.SRank3_name} autoComplete="off" className="form-control" placeholder="S等级3名称" />
                    </div>
                </div>
                <br />
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div>S等级1头像</div>
                        <input onChange={handleChange} name="SRank1_avatar" value={input.SRank1_avatar} autoComplete="off" className="form-control" placeholder="S等级1头像" />
                    </div>
                    <br />
                    <div className="form-group col-md-4">
                        <div>S等级2头像</div>
                        <input onChange={handleChange} name="SRank2_avatar" value={input.SRank2_avatar} autoComplete="off" className="form-control" placeholder="S等级2头像" />
                    </div>
                    <br />
                    <div className="form-group col-md-4">
                        <div>S等级3头像</div>
                        <input onChange={handleChange} name="SRank3_avatar" value={input.SRank3_avatar} autoComplete="off" className="form-control" placeholder="S等级3头像" />
                    </div>
                </div>
                <br />
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div>M等级1名称</div>
                        <input onChange={handleChange} name="MRank1_name" value={input.MRank1_name} autoComplete="off" className="form-control" placeholder="M等级1名称" />
                    </div>
                    <br />
                    <div className="form-group col-md-4">
                        <div>M等级2名称</div>
                        <input onChange={handleChange} name="MRank2_name" value={input.MRank2_name} autoComplete="off" className="form-control" placeholder="M等级2名称" />
                    </div>
                    <br />
                    <div className="form-group col-md-4">
                        <div>M等级3名称</div>
                        <input onChange={handleChange} name="MRank3_name" value={input.MRank3_name} autoComplete="off" className="form-control" placeholder="M等级3名称" />
                    </div>
                </div>
                <br />
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div>M等级1头像</div>
                        <input onChange={handleChange} name="MRank1_avatar" value={input.MRank1_avatar} autoComplete="off" className="form-control" placeholder="M等级1头像" />
                    </div>
                    <br />
                    <div className="form-group col-md-4">
                        <div>M等级2头像</div>
                        <input onChange={handleChange} name="MRank2_avatar" value={input.MRank2_avatar} autoComplete="off" className="form-control" placeholder="M等级2头像" />
                    </div>
                    <br />
                    <div className="form-group col-md-4">
                        <div>M等级3头像</div>
                        <input onChange={handleChange} name="MRank3_avatar" value={input.MRank3_avatar} autoComplete="off" className="form-control" placeholder="M等级3头像" />
                    </div>
                </div>
                <br />
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div>M1</div>
                        <input onChange={handleChange} name="M1" value={input.M1} autoComplete="off" className="form-control" placeholder="M1" />
                    </div>
                    <br />
                    <div className="form-group col-md-4">
                        <div>M2</div>
                        <input onChange={handleChange} name="M2" value={input.M2} autoComplete="off" className="form-control" placeholder="M2" />
                    </div>
                    <br />
                    <div className="form-group col-md-4">
                        <div>M3</div>
                        <input onChange={handleChange} name="M3" value={input.M3} autoComplete="off" className="form-control" placeholder="M3" />
                    </div>
                </div>
                <br />
                <div className="form-group col-md-4">
                    <div>满意度</div>
                    <input
                        onChange={handleChange}
                        name="Satisfaction"
                        value={input.Satisfaction}
                        autoComplete="off"
                        className="form-control"
                        placeholder="满意度"
                    />
                </div>

                <br />
                <button onClick={handleClick} className="btn btn-lg btn-info">添加云服务</button>
            </form>
            <br />
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
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
                    <div className="form-group col-md-4">
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
                    <div className="form-group col-md-4">
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
                </div>
                <br />
                <div className="form-row">
                    <div className="form-group col-md-4">
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
                    <div className="form-group col-md-4">
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
                    <div className="form-group col-md-4">
                        <div>电话</div>
                        <input
                            onChange={handleSellChange}
                            name="phone"
                            value={sellInput.phone}
                            autoComplete="off"
                            className="form-control"
                            placeholder="位置"
                        />
                    </div>
                </div>
                <br />
                <button onClick={handleSellSubmit} className="btn btn-lg btn-info">添加客户需求</button>
            </form>
            <br />
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div>年份</div>
                        <input
                            onChange={handleNewcomeChange}
                            name="year"
                            value={newcomeInput.year}
                            autoComplete="off"
                            className="form-control"
                            placeholder="年份"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <div>制造商</div>
                        <input
                            onChange={handleNewcomeChange}
                            name="make"
                            value={newcomeInput.make}
                            autoComplete="off"
                            className="form-control"
                            placeholder="制造商"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <div>型号</div>
                        <input
                            onChange={handleNewcomeChange}
                            name="model"
                            value={newcomeInput.model}
                            autoComplete="off"
                            className="form-control"
                            placeholder="型号"
                        />
                    </div>
                </div>
                <br />
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div>颜色</div>
                        <input
                            onChange={handleNewcomeChange}
                            name="color"
                            value={newcomeInput.color}
                            autoComplete="off"
                            className="form-control"
                            placeholder="颜色"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <div>公里数</div>
                        <input
                            onChange={handleNewcomeChange}
                            name="km"
                            value={newcomeInput.km}
                            autoComplete="off"
                            className="form-control"
                            placeholder="公里数"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <div>位置</div>
                        <input
                            onChange={handleNewcomeChange}
                            name="place"
                            value={newcomeInput.place}
                            autoComplete="off"
                            className="form-control"
                            placeholder="位置"
                        />
                    </div>
                </div>
                <br />
                <button onClick={handleNewcomeSubmit} className="btn btn-lg btn-info">添加最新到店</button>
            </form>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div>头像</div>
                        <input
                            onChange={handleMessageChange}
                            name="avatarUrl" // Corrected typo from "avatorURL" to "avatarUrl"
                            value={messageInput.avatarUrl}
                            autoComplete="off"
                            className="form-control"
                            placeholder="头像"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <div>名字</div>
                        <input
                            onChange={handleMessageChange}
                            name="name"
                            value={messageInput.name}
                            autoComplete="off"
                            className="form-control"
                            placeholder="名字"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <div>留言</div>
                        <input
                            onChange={handleMessageChange}
                            name="messagehere"
                            value={messageInput.messagehere}
                            autoComplete="off"
                            className="form-control"
                            placeholder="留言"
                        />
                    </div>
                </div>
                <br />
                <button onClick={handleMessageSubmit} className="btn btn-lg btn-info">添加留言</button>
            </form>
        </div>
    );
}

export default Create;
