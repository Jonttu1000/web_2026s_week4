import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
    const [fileURL, setFileURL] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(file);


  };

  const handleFileChange = (event) => {
    console.log(event.target);
    setFile(event.target.files[0]);
    setFileURL(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
        <h2>Upload Media</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          accept="image/*, video/*"
          onChange={handleFileChange}
        />
        <button type="submit">Upload</button>
      </form>

      {fileURL && (
        <div>
            <h3>Preview:</h3>
            {file.type.startsWith("image/") ? (
                <img src={fileURL} alt="Preview" maxWidth="300" />
            ) : (
                <video src={fileURL} controls maxWidth="300" />
            )}
        </div>

      )}
    </div>
  );
};

export default Upload;
