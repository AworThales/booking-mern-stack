import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({inputs, title}) => {
  const [file, setFile] = useState("");

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
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              {/* <div className="formInput">
                <label htmlFor="">First and Surname</label>
                <input type="text" placeholder='Thales Awor' />
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Thallo@gmail.com' />
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder='+234 70 673 00 133' />
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Calabar South' />
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder='Nigeira' />
              </div> */}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
