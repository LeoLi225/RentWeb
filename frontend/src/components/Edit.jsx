import React, { useState } from "react";

function EditCloud({ cloud, onClose }) {
    const [editedCloud, setEditedCloud] = useState(cloud);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedCloud((prevCloud) => ({ ...prevCloud, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedCloud = {
            ...editedCloud,
            // Additional properties if needed
        };

        console.log(updatedCloud);

        fetch(`/cloudEdit/${cloud._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCloud),
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
            <h2>Edit Cloud</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="form-group">会员</label>
                    <input
                        type="text"
                        name="membership"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.membership}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">VIP</label>
                    <input
                        type="text"
                        name="vip"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.vip}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">SVIP</label>
                    <input
                        type="text"
                        name="svip"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.svip}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">SSVIP</label>
                    <input
                        type="text"
                        name="ssvip"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.ssvip}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">S等级1名称</label>
                    <input
                        type="text"
                        name="SRank1_name"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.SRank1_name}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">S等级2名称</label>
                    <input
                        type="text"
                        name="SRank2_name"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.SRank2_name}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">S等级3名称</label>
                    <input
                        type="text"
                        name="SRank3_name"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.SRank3_name}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">S等级1头像</label>
                    <input
                        type="text"
                        name="SRank1_avatar"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.SRank1_avatar}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">S等级2头像</label>
                    <input
                        type="text"
                        name="SRank2_avatar"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.SRank2_avatar}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">S等级3头像</label>
                    <input
                        type="text"
                        name="SRank3_avatar"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.SRank3_avatar}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">M等级1名称</label>
                    <input
                        type="text"
                        name="MRank1_name"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.MRank1_name}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">M等级2名称</label>
                    <input
                        type="text"
                        name="MRank2_name"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.MRank2_name}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">M等级3名称</label>
                    <input
                        type="text"
                        name="MRank3_name"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.MRank3_name}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">M等级1头像</label>
                    <input
                        type="text"
                        name="MRank1_avatar"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.MRank1_avatar}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">M等级2头像</label>
                    <input
                        type="text"
                        name="MRank2_avatar"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.MRank2_avatar}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">M等级3头像</label>
                    <input
                        type="text"
                        name="MRank3_avatar"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.MRank3_avatar}
                        onChange={handleChange}
                    />
                </div>
                <br />

                <div className="form-group">
                    <label htmlFor="title" className="form-group">M1</label>
                    <input
                        type="text"
                        name="M1"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.M1}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="title" className="form-group">M2</label>
                    <input
                        type="text"
                        name="M2"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.M2}
                        onChange={handleChange}
                    />
                </div>
                <br />

                <div className="form-group">
                    <label htmlFor="title" className="form-group">M3</label>
                    <input
                        type="text"
                        name="M3"
                        autoComplete="off"
                        className="form-control"
                        value={editedCloud.M3}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <button type="submit">保存</button>
                <button onClick={onClose}>取消</button>
            </form>
        </div>
    );
}

export default EditCloud;
