import "./featured.css";

export default function Featured() {
    return (
     <div className="featured">
        <div className="featuredItem">
            <img
                className="featuredImg"
                src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                alt=""
            />
            <div className="featuredTitles">
                <h1>Sulai</h1>
                <h2>200 properties</h2>
            </div>
        </div>
      
      <div className="featuredItem">
            <img
            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
            alt=""
            className="featuredImg"
            />
            <div className="featuredTitles">
            <h1>Blesing</h1>
            <h2>330 properties</h2>
            </div>
      </div>
      <div className="featuredItem">
            <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt=""
            className="featuredImg"
            />
            <div className="featuredTitles">
            <h1>Thales</h1>
            <h2>400 properties</h2>
            </div>
      </div>
     </div>
    );
  }