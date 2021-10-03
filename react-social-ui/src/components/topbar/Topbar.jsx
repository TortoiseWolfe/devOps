import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      {/* TopBarLeft */}
      <div className="topbarLeft">
        <span className="logo">geoLARP</span>
      </div>

      <div className="topbarIcons">
        <div className="topbarIconItem">
          <img
            className="likeIcon"
            src="assets/dollar.png"
            // onClick={likeHandler} 
            alt=""
          />
          <span className="topbarIconBadge">33</span>
        </div>
        <div className="topbarIconItem">
          <img
            className="likeIcon"
            src="assets/heart.png"
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
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
