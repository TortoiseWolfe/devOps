import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  MenuBookTwoTone
} from "@material-ui/icons";
import PetsIcon from '@material-ui/icons/Pets';
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          {/* <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li> */}
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarList">
          {/* list of links */}
          <li className="sidebarListItem">
            <MenuBookTwoTone className="sidebarIcon" />
            <span className="sidebarListItemText">
              <a
                className="App-link"
                href="https://StoryBook.geoLARP.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4><code>Story Book</code></h4>
              </a>
              .geoLARP
            </span>
          </li>
          {/* list of links */}
          <li className="sidebarListItem">
            <MenuBookTwoTone className="sidebarIcon" />
            <span className="sidebarListItemText">
              <a
                className="App-link"
                href="https://WordPress.geoLARP.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4><code>Word Press</code></h4>
              </a>
              .geoLARP
            </span>
          </li>
          {/* list of links */}
          <li className="sidebarListItem">
            <PetsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">
              <a
                className="App-link"
                href="https://CatApp.geoLARP.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4><code>Cat App</code></h4>
              </a>
              .geoLARP
            </span>
          </li>
          {/* list of links */}
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">
              <a
                className="App-link"
                href="https://WhoAmI.geoLARP.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4><code>Who Am I</code></h4>
              </a>
              .geoLARP
            </span>
          </li>
          {/* list of links */}
          <li className="sidebarListItem">
            {/* <AttachMoneyIcon className="sidebarIcon" /> */}
            <span className="sidebarListItemText">

              <a href="https://www.digitalocean.com/?refcode=b6508f8816fd&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
                <img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg" alt="DigitalOcean Referral Badge" />
              </a>
            </span>
          </li>
          {/* list of links */}
          <li className="sidebarListItem">
            <GitHubIcon className="sidebarIcon" />
            <span className="sidebarListItemText">
              <a
                className="App-link"
                href="https://github.com/TurtleWolfe/devOps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4><code>gitHub</code></h4>
              </a>
              .com
            </span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
