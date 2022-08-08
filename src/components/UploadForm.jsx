import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  //allowed file types
  const types = ["image/png", "image/jpeg"];

  const onChangeHandler = (e) => {
    //to get the first selected file
    let selected = e.target.files[0];
    //store the selected file in local state << if file selected >>
    if (selected && types.includes(selected.type)) {
      console.log(selected);
      setFile(selected);
      setError("");
    } else {
      //reset the file value
      setFile(null);
      setError("Please select a valid file (png or jpeg)");
    }
  };
  return (
    <form>
      <label>
        {" "}
        +
        <input type="file" onChange={onChangeHandler} />
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
        {/* pass file to use it with the useStorage hook */}
        {/* pass the setFile also >> when the file upload compeleted setFile(null) to display progress bar */}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
