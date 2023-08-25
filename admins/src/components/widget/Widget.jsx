import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
    let data;

    // TEMPORARY
    const amount = 200;
    const diff = 30;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon 
                className="icon"
                style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                  }}
                 />
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon 
                className="icon" 
                style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                  }}
                />
            }
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View all earnings",
                icon: <MonetizationOnOutlinedIcon 
                className="icon" 
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", 
                color: "green" }}
                />
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon 
                className="icon" 
                style={{
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                    color: "purple",
                  }}
                />
            }
            break;
    
        default:
            break;
    }

  return (
    <div className='widget'>
        {/* first child */}
      <div className="left">
        <spa className="title">{data.title}</spa>
        <spa className="counter">
            {data.isMoney && "$"} {amount}
        </spa>
        <spa className="link">{data.link}</spa>
      </div>
      {/* Second child */}
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon />
           {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
