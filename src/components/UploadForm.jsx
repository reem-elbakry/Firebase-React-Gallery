import React from "react";
import { useState } from "react";

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
      <input type="file" onChange={onChangeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
