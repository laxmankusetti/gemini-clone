import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt="menu icon"
          className="menu"
          onClick={() => {
            setExtended((prevState) => !prevState);
          }}
        />
        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="plus icon" />
          {extended && <p>New chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recents">
              {prevPrompts.map((prevPrompt) => (
                <div
                  className="recent-entry"
                  key={Math.random()}
                  onClick={() => loadPrompt(prevPrompt)}
                >
                  <img src={assets.message_icon} alt="message-icon" />
                  <p>{prevPrompt.slice(0, 20)}...</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="settings icon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
