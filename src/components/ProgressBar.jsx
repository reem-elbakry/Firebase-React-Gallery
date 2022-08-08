import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  //progress === width percentage of the bar
  console.log(progress, url);
  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
