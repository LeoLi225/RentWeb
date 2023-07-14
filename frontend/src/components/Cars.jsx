import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./Car.css";

function Cars() {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    fetch("/clouds")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setClouds(jsonRes);
      })
      .catch((error) => {
        console.error("获取云服务失败", error);
      });
  }, []);

  const vipStrings = clouds.map((cloud) => cloud.vip).filter((vip) => typeof vip === 'string');
  const uniqueVipStrings = [...new Set(vipStrings)];

  const svipStrings = clouds.map((cloud) => cloud.svip).filter((svip) => typeof svip === 'string');
  const uniqueSVipStrings = [...new Set(svipStrings)];


  const ssvipStrings = clouds.map((cloud) => cloud.ssvip).filter((ssvip) => typeof ssvip === 'string');
  const uniquesSVipStrings = [...new Set(ssvipStrings)];

  const data = {
    labels: ["VIP", "SVIP", "SSVIP"],
    datasets: [
      {
        label: "VIP Levels",
        data: [uniqueVipStrings, uniqueSVipStrings, uniquesSVipStrings],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <>

      {clouds.map((cloud) => (
        <div className="grid-all">
          <div>
            <h2>MotorOne Auto Sales</h2>
          </div>
          <div className="grid-container">
            <div className="grid-itemL" key={cloud._id}>
              <div className="L1">
                <h2>会员: {cloud.membership}</h2>
              </div>
              <div className="L2">
                <Doughnut data={data} options={options} />
              </div>
              <div className="L3">
                <div>
                  <h4>收车排行榜</h4>
                </div>
                <div>
                  <h4>排名  头像  姓名</h4>
                </div>
                <div>
                  <p>1  {cloud.SRank1_avatar}   {cloud.SRank1_name}</p>
                </div>
                <div>
                  <p>2  {cloud.SRank2_avatar}   {cloud.SRank2_name}</p>
                </div>
                <div>
                  <p>3  {cloud.SRank3_avatar}   {cloud.SRank3_name}</p>
                </div>
              </div>

              <div className="L4">
                <div>
                  <h4>卖车排行榜</h4>
                </div>
                <div>
                  <h4>排名  头像  姓名</h4>
                </div>
                <div>
                  <p>1  {cloud.MRank1_avatar}   {cloud.MRank1_name}</p>
                </div>
                <div>
                  <p>2  {cloud.MRank2_avatar}   {cloud.MRank2_name}</p>
                </div>
                <div>
                  <p>3  {cloud.MRank3_avatar}   {cloud.MRank3_name}</p>
                </div>
              </div>
            </div>

            <div className="grid-itemM" >
              <div className="M1">{cloud.M1} {cloud.M2} {cloud.M3}</div>
              <div className="M2" style={{ backgroundImage: `url(/vancouver.webp)`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat' }}>
                <div className="blinking-dot"></div>
                
              </div>
              <div className="M3"></div>
            </div>

            <div className="grid-itemR">
              <div className="R1"> a</div>
              <div className="R2"> a</div>
              <div className="R3"> a</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );

}

export default Cars;


