import React, { useEffect, useState } from "react";
import axios from 'axios';
import Edit from "./EditCloud.jsx";
import SellEdit from "./SellEdit.jsx";
import NewcomeEdit from "./NewcomeEdit.jsx";
import MessageEdit from "./MessageEdit.jsx";

function Clouds() {
    const [clouds, setClouds] = useState([]);
    const [selectedCloud, setSelectedCloud] = useState(null);

    const [sells, setSells] = useState([]);
    const [selectedSell, setSelectedSell] = useState(null);

    const [newcomes, setNewcomes] = useState([]);
    const [selectedNewcome, setSelectedNewcome] = useState(null);

    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        axios.get('/clouds')
            .then(response => {
                setClouds(response.data);
            })
            .catch(error => {
                console.error('获取云服务失败', error);
            });

        axios.get('/sells')
            .then(response => {
                setSells(response.data);
            })
            .catch(error => {
                console.error('获取出售记录失败', error);
            });

            axios.get('/newcomes')
            .then(response => {
                setNewcomes(response.data);
            })
            .catch(error => {
                console.error('获取新的云服务失败', error);
            });

            axios.get('/messages')
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error('获取留言失败', error);
            });
    }, []);

    const handleEdit = (cloud) => {
        setSelectedCloud(cloud);
    };

    const handleEditSell = (sell) => {
        setSelectedSell(sell);
    };

    const handleEditNewcome = (newcome) => {
        setSelectedNewcome(newcome);
    };

    const handleEditMessage = (message) => {
        setSelectedMessage(message);
    };

    const handleDelete = (cloudId) => {
        axios.delete(`/cloud/${cloudId}`)
            .then(() => {
                console.log('云服务删除成功');
                window.location.reload();
            })
            .catch(error => {
                console.error('云服务删除失败', error);
            });
    };

    const handleDeleteSell = (sellId) => {
        axios.delete(`/sell/${sellId}`)
            .then(() => {
                console.log('客户需求删除成功');
                window.location.reload();
            })
            .catch(error => {
                console.error('客户需求删除失败', error);
            });
    };

    const handleDeleteNewcome = (newcomeId) => {
        axios.delete(`/newcome/${newcomeId}`)
            .then(() => {
                console.log('最新到店删除成功');
                window.location.reload();
            })
            .catch(error => {
                console.error('最新到店删除失败', error);
            });
    };

    const handleDeleteMessage = (messageId) => {
        axios.delete(`/message/${messageId}`)
            .then(() => {
                console.log('留言删除成功');
                window.location.reload();
            })
            .catch(error => {
                console.error('留言删除失败', error);
            });
    };


    return (
        <div className="container">
            <h1>云服务</h1>
            {selectedCloud ? (
                <Edit cloud={selectedCloud} onClose={() => setSelectedCloud(null)} />
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr className="tr">
                                <br />
                                <th>会员</th>
                                <th>VIP</th>
                                <th>SVIP</th>
                                <th>SSVIP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clouds.map((cloud) => (
                                <tr className="boxes" key={cloud._id}>
                                    <td className="btn btn-danger" onClick={() => handleDelete(cloud._id)}>
                                        <span className="close">&times;</span>
                                    </td>
                                    <td className="card-title">{cloud.membership}</td>
                                    <td>{cloud.vip}</td>
                                    <td>{cloud.svip}</td>
                                    <td>{cloud.ssvip}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleEdit(cloud)}
                                        >
                                            编辑
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <h1>客户需求</h1>
            {selectedSell ? (
                <SellEdit sell={selectedSell} onClose={() => setSelectedSell(null)} />
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>年份</th>
                                <th>制造商</th>
                                <th>型号</th>
                                <th>颜色</th>
                                <th>姓名</th>
                                <th>电话</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sells.map((sell) => (
                                <tr key={sell._id}>
                                    <td>{sell.year}</td>
                                    <td>{sell.make}</td>
                                    <td>{sell.model}</td>
                                    <td>{sell.color}</td>
                                    <td>{sell.name}</td>
                                    <td>{sell.phone}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleEditSell(sell)}
                                        >
                                            编辑
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDeleteSell(sell._id)}
                                        >
                                            删除
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <h1>最新到店</h1>
            {selectedNewcome  ? (
                <NewcomeEdit newcome={selectedNewcome} onClose={() => setSelectedNewcome (null)} />
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>年份</th>
                                <th>制造商</th>
                                <th>型号</th>
                                <th>颜色</th>
                                <th>公里数</th>
                                <th>地址</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newcomes.map((newcome) => (
                                <tr key={newcome._id}>
                                    <td>{newcome.year}</td>
                                    <td>{newcome.make}</td>
                                    <td>{newcome.model}</td>
                                    <td>{newcome.color}</td>
                                    <td>{newcome.km}</td>
                                    <td>{newcome.place}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleEditNewcome(newcome)}
                                        >
                                            编辑
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDeleteNewcome(newcome._id)}
                                        >
                                            删除
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <h1>留言</h1>
            {selectedMessage ? (
                <MessageEdit message={selectedMessage} onClose={() => setSelectedMessage(null)} />
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>头像</th>
                                <th>名字</th>
                                <th>留言</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message) => (
                                <tr key={message._id}>
                                    <td>{message.avatarUrl}</td>
                                    <td>{message.name}</td>
                                    <td>{message.messagehere}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleEditMessage(message)}
                                        >
                                            编辑
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDeleteMessage(message._id)}
                                        >
                                            删除
                                        </button>
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

export default Clouds;
