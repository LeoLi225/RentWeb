import React, { useEffect, useState } from "react";
import axios from 'axios';
import Edit from "./EditCloud.jsx";
import SellEdit from "./SellEdit.jsx";

function Clouds() {
    const [clouds, setClouds] = useState([]);
    const [selectedCloud, setSelectedCloud] = useState(null);

    const [sells, setSells] = useState([]);
    const [selectedSell, setSelectedSell] = useState(null);

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
    }, []);

    const handleEdit = (cloud) => {
        setSelectedCloud(cloud);
    };

    const handleEditSell = (sell) => {
        setSelectedSell(sell);
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
                console.log('出售记录删除成功');
                window.location.reload();
            })
            .catch(error => {
                console.error('出售记录删除失败', error);
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
            <h1>出售记录</h1>
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
                                <th>公里数</th>
                                <th>颜色</th>
                                <th>价格</th>
                                <th>姓名</th>
                                <th>地点</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sells.map((sell) => (
                                <tr key={sell._id}>
                                    <td>{sell.year}</td>
                                    <td>{sell.make}</td>
                                    <td>{sell.model}</td>
                                    <td>{sell.km}</td>
                                    <td>{sell.color}</td>
                                    <td>{sell.price}</td>
                                    <td>{sell.name}</td>
                                    <td>{sell.place}</td>
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
        </div>
    );
}

export default Clouds;
