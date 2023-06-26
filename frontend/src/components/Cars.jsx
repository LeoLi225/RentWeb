import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./Car.css";

function Cars() {
  const [cars, setCars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);

  useEffect(() => {
    fetch("/cars")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        const activeCars = jsonRes.filter((car) => car.active); // 过滤active为true的车辆
        setCars(activeCars);
      });
  }, []);

  const nextCar = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const previousCar = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = cars.length - 1;
    }
    setPreviousIndex(currentIndex);
    setCurrentIndex(newIndex);
  };

  const currentCar = cars[currentIndex];

  return (
    <div className="container">
      <h1>租车展示</h1>
      {currentCar && (
        <div key={currentCar._id}>
          <h1>{currentCar.title}</h1>
          <h4>{currentCar.content}</h4>
          {currentCar.videoLink.includes("youtube.com") ? (
            <div>
              <YouTube videoId={getYouTubeVideoId(currentCar.videoLink)} />
            </div>
          ) : (
            <div>链接不正确</div>
          )}
          <div className="row">
            <div>每天：${currentCar.day}</div>
            <div>每周：${currentCar.week}</div>
            <div>每月：${currentCar.month}</div>
          </div>
        </div>
      )}
      {!currentCar && <div>没有可展示的车辆</div>}
      <button onClick={previousCar} disabled={previousIndex === null}>
        上一辆车
      </button>
      <button onClick={nextCar}>下一辆车</button>
    </div>
  );
}

// 从YouTube链接中提取视频ID
function getYouTubeVideoId(url) {
  const videoIdMatch = url.match(/youtube\.com.*(?:\/|v=)([^&$]+)/);
  return videoIdMatch && videoIdMatch[1];
}

export default Cars;
