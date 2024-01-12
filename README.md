import React, { useEffect, useState } from "react";

const useDeviceType = () => {
const [deviceType, setDeviceType] = useState("");
useEffect(() => {
const handleResize = () => {
const width = window.innerWidth;

      if (width >= 768) {
        setDeviceType("desktop");
      } else {
        setDeviceType("phone");
      }
    };
    // Thực hiện lấy kích thước màn hình ban đầu
    handleResize();

    // Lắng nghe sự kiện resize để cập nhật loại thiết bị khi thay đổi kích thước màn hình
    window.addEventListener("resize", handleResize);

    // Clear effect khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };

}, []);
return deviceType;
};

export default useDeviceType;
