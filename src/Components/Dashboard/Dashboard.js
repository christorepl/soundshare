import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";

function Dashboard() {
  const [files, getFiles] = useState(null);

  const handleFile = (e) => {
    let files = e.target.files[0];
    getFiles(files);
  };

  const handleUpload = (e) => {
    let formData = new FormData();

    formData.append("name", "Name");
    formData.append("files", files);

    axios
      .post(`${API_BASE_URL}/upload`, formData)
      .then((res) => alert(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Select your files</h1>
      <form>
        <input
          type="file"
          multiple="multiple" //To select multiple files
          // accept=".jpg"
          accept=".mp3, .wav, .wave, .flac, .ogg, .shn, .ape, .aac, .aif, .aifc, .aiff, .m4a, .pcm, .au, .l16, .wmv, .oga, .mogg, .3gp, .m4r, .raw, .wma, .caf"
          onChange={(e) => {
            handleFile(e);
          }}
        />
      </form>
      <button onClick={(e) => handleUpload(e)}>Send Files</button>
    </div>
  );
}
export default Dashboard;

// import React, { useState } from "react";

// import Axios from "axios";

// function App() {
//   const [name, setName] = useState();
//   const [file, setFile] = useState();

//   const send = (event) => {
//     const data = new FormData();
//     data.append("name", name);
//     data.append("file", file);

//     Axios.post("https://httpbin.org/anything", data)
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <form action="#" encType="multipart/form-data">
//           <div className="flex">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               onChange={(event) => {
//                 const { value } = event.target;
//                 setName(value);
//               }}
//             />
//           </div>
//           <div className="flex">
//             <label htmlFor="file">File</label>
//             <input
//               type="file"
//               id="file"
//               accept=".jpg"
//               onChange={(event) => {
//                 const file = event.target.files[0];
//                 setFile(file);
//               }}
//             />
//           </div>
//         </form>
//         <button onClick={send}>Send</button>
//       </header>
//     </div>
//   );
// }

// export default App;
