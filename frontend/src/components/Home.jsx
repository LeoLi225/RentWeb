import React, { useEffect, useState } from "react";
import axios from 'axios';
import Edit from "./Edit.jsx";

function Clouds() {
    const [clouds, setClouds] = useState([]);
    const [selectedCloud, setSelectedCloud] = useState(null);

    useEffect(() => {
        axios.get('/clouds')
            .then(response => {
                setClouds(response.data);
            })
            .catch(error => {
                console.error('获取云服务失败', error);
            });
    }, []);

    const handleEdit = (cloud) => {
        setSelectedCloud(cloud);
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

    // const handleCheckboxChange = (event, cloudId) => {
    //     const newActive = event.target.checked;

    //     axios.put(`/cloudEdit/${cloudId}`, { active: newActive })
    //         .then(() => {
    //             console.log('云服务状态已更新');
    //         })
    //         .catch(error => {
    //             console.error('云服务状态更新失败', error);
    //         });
    // };

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
                                <br/>
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
        </div>
    );
}

export default Clouds;
