import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      {/* TopBarLeft */}
      <div className="topbarLeft">
        <Link to="/"
          style={{
            textDecoration: "none",
            // color: "white"
          }}>
          {/* <img src={`${PF}/images/logo.png`} alt="logo" /> */}
          <span className="logo">geoLARP</span>
        </Link>
      </div>

      <div className="topbarIcons">
        <div className="topbarIconItem">
          <img
            className="likeIcon"
            src={`${PF}dollar.png`}
            // onClick={likeHandler} 
            alt=""
          />
          <span className="topbarIconBadge">33</span>
        </div>
        <div className="topbarIconItem">
          <img
            className="likeIcon"
            src={`${PF}heart.png`}
            // onClick={likeHandler}
            alt=""
          />
          <span className="topbarIconBadge">7</span>
        </div>
      </div>

      {/* TopBarCenter */}
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

      {/* TopBarRight */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`} >
          <img src={
            // user.profilePicture
            // ? PF + user.profilePicture
            // : 
            PF + 'person/noAvatar.png'}
            alt="profile"
            className="topbarImg"
          />
        </Link>
      </div>
    </div >
  );
}
