import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        {/* profile */}
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt="profile background cover"
              />
              <img
                className="profileUserImg"
                src="assets/person/Turtlewolfe.png"
                // src="assets/person/10.jpeg"
                alt="profile"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">TurtleWolfe</h4>
              <span className="profileInfoDesc">Rogue Dwarf</span>
            </div>
          </div>
          {/* profile Right Bottom */}
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
