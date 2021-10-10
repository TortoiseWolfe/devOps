import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {

  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append("file", file);
      newPost.img = fileName;
      // const config = {
      //   headers: {}
      // };
      // console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    } // end if file
    try {
      await axios.post('/posts', newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };  // end of submitHandler

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg"
            src={user.profilePicture
              ? PF + user.profilePicture
              : PF + 'person/noAvatar.png'}
            alt={user.username} />
          <input
            placeholder={user.username + ", How do you want to do this ?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form
          className="shareBottom"
          onSubmit={submitHandler}
          encType="multipart/form-data"
        >
          <div className="shareOptions">
            <label htmlFor='file' className="shareOption">
              <PermMedia htmlColor="#80acaa" className="shareIcon" />
              <span className="shareOptionText">Photo</span>
              <input
                style={{ display: 'none' }}
                type="file"
                id="file"
                name="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="#605542" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="#6e2f3b" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="#80acaa" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type='submit' >Share</button>
        </form>
      </div>
    </div>
  );
};
