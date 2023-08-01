import "./mailList.css";

export default function MailList() {
    return (
     <div className="mailList">
       <h1 className="mailTitle">Save time, save money!</h1>
       <span className="mailDesc">Sign up we'll send the best deals to you</span>
       <div className="mailListInputContainer">
            <input type="text" placeholder="Enter Your Email" />
            <button>Subscribe</button>
       </div>
     </div>
    );
  }