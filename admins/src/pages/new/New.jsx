import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";

const New = ({inputs, title}) => {
  const [file, setFile] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e)=>{
    setUserInfo((prev)=>({...prev, [e.target.id]: e.target.value}))
  };

  const handleClick = async (e)=>{
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset","upload");
    try {
      const uploadResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dkvyk1saa/image/upload",
        data
      );
      // console.log(uploadResponse.data)
      const {url} = uploadResponse.data;
      const newUser = {
        ...userInfo,
        img: url,
      };

      await axios.post("/auth/register", newUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        {/* top container */}
        <div className="top">
          <h1>{title}</h1>
        </div>
        {/* bootom container */}
        <div className="bottom">
           {/* bottom first child */}
           <div className="left">
           <img 
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
              alt="" 
              />
           </div>
          {/* bottom second child */}
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="icon"/> </label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input 
                    onChange={handleChange} 
                    type={input.type} 
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
