import "./web3.css";
import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";




// require("dot-env").config({path:".env"});

const projectId = "2M5aWABDDME6TZYRmrMEMftAbdq"
const projectSecretKey = "91a42de39accf97776173ae66975e3ca"
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);

function Web3() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const ipfs = ipfsHttpClient({
    url: "https://filecoin.infura.io",
    headers: {
      authorization,
    },
  });
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const files = form[0].files;

    if (!files || files.length === 0) {
      return alert("No files selected");
    }

    const file = files[0];
    // upload files
    const result = await ipfs.add(file);

    setUploadedImages([
      ...uploadedImages,
      {
        cid: result.cid,
        path: result.path,
      },
    ]);

    form.reset();
  };

  return (
    <div className="app">
      <div className="app__container">
        {ipfs ? (
          <div className="container">
            <h1>IPFS uploader</h1>
            <form onSubmit={onSubmitHandler}>
              <label for="file-upload" class="custom-file-upload">
                Select File
              </label>
              <input id="file-upload" type="file" name="file" />
              <button className="button" type="submit">
                Upload file
              </button>
            </form>
          </div>
        ) : null}
        <div className="data">
          {uploadedImages.map((image, index) => (
            <>
              <img
                className="image"
                alt={`Uploaded #${index + 1}`}
                src={"https://filecoin.infura.io" + image.path}
                style={{ maxWidth: "400px", margin: "15px" }}
                key={image.cid.toString() + index}
              />
              <h4>Link to IPFS:</h4>
              <a href={"https://filecoin.infura.io" + image.path}>
                <h3>{"https://filecoin.infura.io" + image.path}</h3>
              </a>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Web3;
