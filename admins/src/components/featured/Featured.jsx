import './featured.scss'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className='featured'>
        {/* first child */}
      <div className="top">
        <h1 className="title">Totaal Revenue</h1>
        <MoreVertIcon font-size="small" />
      </div>
      {/* second child */}
      <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={80} text={"80%"} strokeWidth={4} />
            </div>
            <p className="title">Total Sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">
                Previous transaction processing. Last payments may not be included.
            </p>

            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small" />
                        <div className="resultAmount">$15.8k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <div className="resultAmount">$25.5k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <div className="resultAmount">$30.2k</div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Featured
