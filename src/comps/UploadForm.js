import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (event) => {
    let selected = event.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Select an image file (png or jpeg)");
    }
  }

  return (
    <form>
      <input type="file" onChange={handleChange} />
      <div className="output">
        { error && <div className="error">{ error }</div> }
        { file && <div>{ file.name }</div> }
      </div>
    </form>
  )
}

export default UploadForm;