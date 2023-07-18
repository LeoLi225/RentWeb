import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./Car.css";
import FlipNumbers from 'react-flip-numbers';
import { useSpring, animated, config } from 'react-spring';



function Cars() {
  const [clouds, setClouds] = useState([]);
  const [newData, setNewData] = useState([]);

  const [startIndex, setStartIndex] = useState(0);


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

  const vipCount = parseInt(uniqueVipStrings);
  const svipCount = parseInt(uniqueSVipStrings);
  const ssvipCount = parseInt(uniquesSVipStrings);

  const total = vipCount + svipCount + ssvipCount;
  const vipPercentage = ((vipCount / total) * 100).toFixed(2);
  const svipPercentage = ((svipCount / total) * 100).toFixed(2);
  const ssvipPercentage = ((ssvipCount / total) * 100).toFixed(2);

  const data = {
    labels: [`VIP       ${vipPercentage}%`, `SVIP     ${svipPercentage}%`, `SSVIP  ${ssvipPercentage}%`],
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
        labels: {
          boxWidth: 15, // 设置图形的宽度和高度相等，形成正方形
          fontSize: 16, // 设置标签字体大小
          color: "white",
          borderColor: "transparent",
        },
      },
      outlabels: {
        text: "%l %p",
        color: "black",
        backgroundColor: "transparent",
        font: {
          size: 14,
        },
      },
    },
  };


  useEffect(() => {
    fetch("/newcomes")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setNewData(jsonRes);
      })
      .catch((error) => {
        console.error("获取云服务失败", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % newData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [newData]);

  const displayedData = [];
  for (let i = 0; i < 5; i++) {
    const dataIndex = (startIndex + i) % newData.length;
    const newItem = newData[dataIndex];
    if (newItem) {
      displayedData.push(newItem);
    }
  }

  const [sellData, setSellData] = useState([]); // Your data
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    fetch("/sells")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setSellData(jsonRes);
      })
      .catch((error) => {
        console.error("获取云服务失败", error);
      });
  }, []);


  const rowHeight = 52; // Set this to your actual row height
  const containerHeight = 200; // Set this to `rowHeight * rowsToShow`
  const totalHeight = sellData.length * rowHeight;

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollTop((prevTop) => {
        const nextTop = prevTop + rowHeight;
        return nextTop >= totalHeight * 10 ? 0 : nextTop;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [sellData, rowHeight, totalHeight]);

  const renderTable = (data) => (
    <table className="carousel2">
      <tbody>
        {data.map((sellItem) => (
          <tr key={sellItem._id} className="onerow">
            <td className="as">{sellItem.name}</td>
            <td className="as">{sellItem.phone}</td>
            <td className="as">
              <td>{sellItem.year}</td>
              <td>{sellItem.color}</td>
              <td>{sellItem.make} {sellItem.model}</td>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const [messagesData, setMessagesData] = useState([]);
  useEffect(() => {
    fetch("/messages")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setMessagesData(jsonRes);
      })
      .catch((error) => {
        console.error("获取云服务失败", error);
      });
  }, []);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messagesData.length);
    }, 5000);

    return () => clearInterval(interval);  // 清理函数，防止内存泄漏
  }, [messagesData]);

  function convertDriveLink(inputLink) {
    let fileId = inputLink.split('/d/')[1].split('/view')[0]; // 提取出文件 ID
    return `https://drive.google.com/uc?export=view&id=${fileId}`; // 返回可用版本的链接
  }

  const [membership, setMembership] = useState(0);

  useEffect(() => {
    if (clouds.length > 0) {
      const membershipCount = parseInt(clouds[0].membership);
      setMembership(membershipCount);
    }
  }, [clouds]);

  useEffect(() => {
    const updateMembership = () => {
      setMembership(prevMembership => prevMembership + 1);

      const randomDelay = Math.random() * 5000 + 1000; // 生成介于 1 秒到 6 秒之间的随机延迟时间
      setTimeout(updateMembership, randomDelay);
    };

    const initialDelay = Math.random() * 5000 + 1000; // 初始延迟时间
    const timeoutId = setTimeout(updateMembership, initialDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const cd = new Date();
      setTime(
        zeroPadding(cd.getHours(), 2) +
          ':' +
          zeroPadding(cd.getMinutes(), 2) +
          ':' +
          zeroPadding(cd.getSeconds(), 2)
      );
      setDate(
        zeroPadding(cd.getFullYear(), 4) +
          '-' +
          zeroPadding(cd.getMonth() + 1, 2) +
          '-' +
          zeroPadding(cd.getDate(), 2) +
          ' ' +
          week[cd.getDay()]
      );
    };
  
    const timerId = setInterval(updateTime, 1000);
    updateTime();
  
    return () => {
      clearInterval(timerId);
    };
  }, );
  
  const zeroPadding = (num, digit) => {
    let zero = '';
    for (let i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  };
  
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const map = (value, sMin, sMax, dMin, dMax) => {
    return dMin + ((value - sMin) / (sMax - sMin)) * (dMax - dMin);
  };



  const pi = Math.PI;
  const tau = 2 * pi;

  const [satisfication, setSatisfication] = useState(0);

  useEffect(() => {
    if (clouds.length > 0) {
      const count = parseFloat(clouds[0].Satisfaction);
      setSatisfication(count);
    }
  }, [clouds]);

  var numDashOff = (100 - satisfication) * 785.4 * 0.01;
  console.log(numDashOff);


  const { dashOffset } = useSpring({
    dashOffset: 78.54,
    from: { dashOffset: 785.4 },
    to: { dashOffset: numDashOff },
    config: config.molasses,
  });

  function Satisfication() {
    return (
      <div className="p-4 h-full">
        <div className="flex justify-between items-center">
          <div className="R3_title">Satisfication</div>
        </div>
        <div className="R3_subtitle">From all projects</div>
        <div className="R3_icon">
          <svg
            viewBox="0 0 700 380"
            fill="none"
            width="300"
            xmlns="http://www.w3.org/2000/svg"
            id="svg"
          >
            <path
              d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
              stroke="#2d2d2d"
              strokeWidth="40"
              strokeLinecap="round"
            />
            <animated.path
              d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
              stroke="#2f49d0"
              strokeWidth="40"
              strokeLinecap="round"
              strokeDasharray="785.4"
              strokeDashoffset={dashOffset}
              id="svgPath"
              className="svgPath"
            />

            <animated.circle
              cx={dashOffset.interpolate(
                (x) => 350 + 250 * Math.cos(map(x, 785.4, 0, pi, tau)),
              )}
              cy={dashOffset.interpolate(
                (x) => 350 + 250 * Math.sin(map(x, 785.4, 0, pi, tau)),
              )}
              r="12"
              fill="#fff"
            />
            <circle cx="140" cy="350" r="5" fill="#2f49d0" />
            <circle
              cx="144.5890038459008"
              cy="306.3385449282706"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="158.15545389505382"
              cy="264.58530495408195"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="180.10643118126103"
              cy="226.56509701858067"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="209.48257266463972"
              cy="193.93958664974724"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="244.9999999999999"
              cy="168.1346652052679"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="285.10643118126103"
              cy="150.27813157801776"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="328.0490227137926"
              cy="141.15040197266262"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="371.95097728620715"
              cy="141.1504019726626"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="414.8935688187389"
              cy="150.27813157801774"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="454.9999999999999"
              cy="168.1346652052678"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="490.51742733536014"
              cy="193.93958664974713"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="519.8935688187389"
              cy="226.5650970185806"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="541.8445461049462"
              cy="264.58530495408183"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="555.4109961540992"
              cy="306.33854492827044"
              r="5"
              fill="#2f49d0"
            />
            <circle cx="560" cy="349.99999999999994" r="5" fill="#2f49d0" />
            <path
              d="M349.292 375C395.845 375 433.583 337.261 433.583 290.708C433.583 244.155 395.845 206.417 349.292 206.417C302.739 206.417 265 244.155 265 290.708C265 337.261 302.739 375 349.292 375Z"
              fill="white"
            />
            <path
              d="M349.292 358.708C386.847 358.708 417.292 328.264 417.292 290.708C417.292 253.153 386.847 222.708 349.292 222.708C311.736 222.708 281.292 253.153 281.292 290.708C281.292 328.264 311.736 358.708 349.292 358.708Z"
              fill="#D2D6E7"
            />
            <path
              d="M347.167 343.833C376.898 343.833 401 319.731 401 290C401 260.269 376.898 236.167 347.167 236.167C317.435 236.167 293.333 260.269 293.333 290C293.333 319.731 317.435 343.833 347.167 343.833Z"
              fill="#FFE17D"
            />
            <path
              d="M347.167 316.482C339.696 316.482 332.608 313.623 328.204 308.835C327.391 307.953 327.449 306.58 328.331 305.768C329.213 304.956 330.588 305.013 331.399 305.896C334.996 309.807 340.89 312.141 347.167 312.141C353.443 312.141 359.338 309.807 362.935 305.896C363.745 305.013 365.121 304.956 366.003 305.768C366.885 306.58 366.942 307.953 366.13 308.835C361.725 313.623 354.637 316.482 347.167 316.482Z"
              fill="#AA7346"
            />
            <path
              d="M328.933 290C326.535 290 324.592 288.056 324.592 285.659V282.186C324.592 279.788 326.535 277.844 328.933 277.844C331.33 277.844 333.274 279.788 333.274 282.186V285.659C333.274 288.056 331.33 290 328.933 290Z"
              fill="#7D5046"
            />
            <path
              d="M328.933 277.844C328.635 277.844 328.345 277.875 328.064 277.932V283.922C328.064 285.361 329.231 286.527 330.669 286.527C332.108 286.527 333.274 285.361 333.274 283.922V282.186C333.274 279.788 331.331 277.844 328.933 277.844Z"
              fill="#9C6846"
            />
            <path
              d="M365.401 290C363.003 290 361.059 288.056 361.059 285.659V282.186C361.059 279.788 363.003 277.844 365.401 277.844C367.798 277.844 369.742 279.788 369.742 282.186V285.659C369.742 288.056 367.798 290 365.401 290Z"
              fill="#7D5046"
            />
            <path
              d="M365.401 277.844C365.103 277.844 364.813 277.875 364.532 277.932V283.922C364.532 285.361 365.699 286.527 367.137 286.527C368.576 286.527 369.742 285.361 369.742 283.922V282.186C369.742 279.788 367.798 277.844 365.401 277.844Z"
              fill="#9C6846"
            />
            <path
              d="M354.981 336.019C325.25 336.019 301.148 311.917 301.148 282.186C301.148 269.31 305.673 257.496 313.213 248.232C301.085 258.103 293.333 273.144 293.333 290C293.333 319.731 317.435 343.833 347.167 343.833C364.023 343.833 379.064 336.081 388.935 323.953C379.671 331.493 367.857 336.019 354.981 336.019Z"
              fill="#FFD164"
            />
          </svg>
        </div>

        <div className="R3_inline" style={{ width: '300px' }}>

          <div className="" style={{ width: '50px', paddingLeft: '16px' }}>
            0%
          </div>
          <div
            className="R3_Mnum"
            style={{
              width: '150px',
              textAlign: 'center',
            }}
          >
            <div
              style={{ color: '#2f49d1', fontSize: '18px' }}
            >
              {satisfication}%
            </div>
            <div>Based on Likes</div>
          </div>
          <div className=".R3_Lnum" style={{ width: '50px' }}>
            100%
          </div>
        </div>

      </div>
    );
  }


  return (
    <>
      <div className="grid-all">
        <div className="grid-top">
          <div className="title">MOTORONE壹站云海系统</div>
          <div className="clock">
            <p className="date">{date}</p>
            <p className="time">{time}</p>
          </div>
        </div>
        <div className="grid-container">
          {clouds.map((cloud) => (
            <>
              <div className="grid-itemL" key={cloud._id}>
                <div className="L1">
                  <div>会员</div>
                  <div>总计：</div>
                  <div className="flip-numbers-background"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/num.png)`,
                      backgroundSize: '35px 35px'
                    }}
                  >
                    <FlipNumbers
                      height={35}
                      width={35}
                      play
                      numbers={String(membership)}
                    />
                  </div>
                </div>
                <div className="L2">
                  <Doughnut
                    data={data}
                    options={options}
                  />
                </div>
                <div className="L3">
                  <div>收车排行榜</div>
                  <div>
                    <table>
                      <tr>
                        <td><img src={convertDriveLink(cloud.SRank1_avatar)} alt="SRank1" /></td>
                        <td>{cloud.SRank1_name}</td>
                        <td className="nameS">1</td>
                      </tr>
                      <tr>
                        <td><img src={convertDriveLink(cloud.SRank2_avatar)} alt="SRank2" /></td>
                        <td>{cloud.SRank2_name}</td>
                        <td className="nameS">2</td>
                      </tr>
                      <tr>
                        <td><img src={convertDriveLink(cloud.SRank3_avatar)} alt="SRank3" /></td>
                        <td>{cloud.SRank3_name}</td>
                        <td className="nameS">3</td>
                      </tr>
                    </table>
                  </div>
                </div>


                <div className="L4">
                  <div>销售排行榜</div>
                  <div>
                    <table>
                      <tr>
                        <td><img src={convertDriveLink(cloud.MRank1_avatar)} alt="SRank1" /></td>
                        <td>{cloud.MRank1_name} </td>
                        <td className="nameS">1</td>
                      </tr>
                      <tr>
                        <td><img src={convertDriveLink(cloud.MRank2_avatar)} alt="SRank2" /></td>
                        <td>{cloud.MRank2_name}</td>
                        <td className="nameS">2</td>
                      </tr>
                      <tr>
                        <td><img src={convertDriveLink(cloud.MRank3_avatar)} alt="SRank3" /></td>
                        <td>{cloud.MRank3_name}</td>
                        <td className="nameS">3</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="grid-itemM" >
            <div className="M1">
              {clouds.map((cloud) => (
                <>
                  <div>
                    <div className="texts">库存总数</div>
                    <p className="nums">
                      <span>{cloud.M1}</span>
                      <span className="smallT">辆</span>
                    </p>
                  </div>
                  <div>
                    <div className="texts">本月收购</div>
                    <p className="nums">
                      <span>{cloud.M2}</span>
                      <span className="smallT">辆</span>
                    </p>
                  </div>
                  <div>
                    <div className="texts">本月销售</div>
                    <p className="nums">
                      <span>{cloud.M3}</span>
                      <span className="smallT">辆</span>
                    </p>
                  </div>
                </>
              ))}
            </div>
            <div className="M2" style={{ backgroundImage: `url(/vancouver.webp)`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat' }}>
              <div className="blinking-dot"></div>
            </div>
            <div className="M3">

              {messagesData.length > 0 && (
                <div key={messagesData[currentMessageIndex]._id} className="messageCard">
                  <div className="inline">
                    <img className="messageImage" src={convertDriveLink(messagesData[currentMessageIndex].avatarUrl)} alt={messagesData[currentMessageIndex].name} />
                    <div className="messageName">{messagesData[currentMessageIndex].name}</div>
                  </div>
                  <div className="messageText">{messagesData[currentMessageIndex].messagehere}</div>
                </div>
              )}

            </div>

          </div>

          <div className="grid-itemR">
            <div className="R1">
              <div className="R1_title">最新到店</div>
              <div className="card-container">
                <table className="carousel">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Make</th>
                      <th>Model</th>
                      <th>Color</th>
                      <th>KM</th>
                      <th>Place</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedData.map((newItem) => (
                      <tr key={newItem._id}>
                        <td>{newItem.year}</td>
                        <td>{newItem.make}</td>
                        <td>{newItem.model}</td>
                        <td>{newItem.color}</td>
                        <td>{newItem.km}</td>
                        <td>{newItem.place}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
            <div className="R2">
              <div className="R2_title">客户需求</div>
              <div className="CTitle">
                <div className="nameC">姓名</div>
                <div className="pC">电话</div>
                <div className="nC">年份</div>
                <div className="cC">颜色</div>
                <div>型号</div>
              </div>
              <div className="carousel-container" style={{ height: containerHeight }}>
                <div className="carousel-content" style={{ top: -scrollTop, transition: scrollTop === 0 ? 'none' : 'top 1s linear' }}>
                  {renderTable(sellData)}
                  {renderTable(sellData)}
                  {renderTable(sellData)}
                  {renderTable(sellData)}
                  {renderTable(sellData)}
                  {renderTable(sellData)}
                  {renderTable(sellData)}
                  {renderTable(sellData)}
                  {renderTable(sellData)}
                  {renderTable(sellData)}
                  {renderTable(sellData)}
                  {renderTable(sellData)}
                  {renderTable(sellData)}
                </div>
              </div>
            </div>
            <div className="R3">
              <Satisfication />
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Cars;


