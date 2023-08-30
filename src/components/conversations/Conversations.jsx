import { useState } from "react";
import "./conversation.css";

export default function Conversations() {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 
  return (
    <div className="conversation">
      <img
        className="conversationImage"
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      />
      <span className="conversationName">Ram{user?.username}</span>
    </div>
  );
}


