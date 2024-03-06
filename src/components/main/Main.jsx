import "./main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img
          src={assets.laxman_icon}
          alt="laxman icon"
          className="laxman-icon"
        />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggest some beautiful places to see on an upcoming road trip
                </p>
                <img src={assets.compass_icon} alt="compass icon" />
              </div>
              <div className="card">
                <p>Briefly summarize this conecpt : Urban planning</p>
                <img src={assets.bulb_icon} alt="compass icon" />
              </div>
              <div className="card">
                <p>Braistroam team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="compass icon" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="compass icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.laxman_icon} alt="laxman icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter here..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <div className="search-icons">
              <img src={assets.gallery_icon} alt="gallery icon" />
              <img src={assets.mic_icon} alt="mic icon" />
              <img
                src={assets.send_icon}
                alt="send icon"
                onClick={() => onSent()}
              />
            </div>
          </div>
          <p className="bottom-line">
            Gemini may display inaccurate info, including about people, so
            double check it&apos;s responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
