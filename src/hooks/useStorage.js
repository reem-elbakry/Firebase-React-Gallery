import { useState, useEffect } from "react";
// Storage sdk
import { appStorage } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //create a ref
    const storageRef = appStorage.ref(file.name);

    //try to upload the file to the ref
    //async func
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        //snapshot in time of the upload
        //state changed multiple time within the upload

        //percentage of the upload progress
        //how many bytes transferred at this moment
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        //get the url of the uploaded image
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { url, error, progress };
};

export default useStorage;
