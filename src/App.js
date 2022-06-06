import { useEffect, useMemo, useState } from "react";
import "./App.css";

import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";

function App() {
  const db = getDatabase();
  const chatList = ref(db, "List");
  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState("");

  const sendChat = async () => {
    const chatRef = await push(chatList);
    await set(chatRef, {
      name: name,
      message: msg,
    });
    setMsg("");
    updateHeight();
  };
  const updateHeight = () => {
    const el = document.getElementById("chat");
    if (el) {
      el.scrollTop = el.scrollHeight + el.clientHeight;
    }
  };

  useMemo(() => {
    onChildAdded(chatList, (data) => {
      setChats((chats) => [...chats, data.val()]);
    });
  }, []);

  return (
    <div className="main">
      {name ? null : (
        <div className="nameContainer">
          <input
            id="myInput"
            type="text"
            placeholder="Enter Your name"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setName(e.target.value);
              }
            }}
            onBlur={(e) => setName(e.target.value)}
            autoFocus
          />
          <button>Submit</button>
        </div>
      )}

      {name ? (
        <div>
          <div className="headingDiv">
            <h1> {name}</h1>
          </div>

          <div id="chat" className="chat-container">
            {chats.map((c, i) => (
              <div
                key={i}
                className={`container ${c.name === name ? "me" : ""}`}
              >
                <p className="chatbox">
                  <strong>{c.name}: </strong>
                  <span>{c.message}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="btm">
            <input
              type="text"
              placeholder="Enter your message"
              onInput={(e) => setMsg(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  sendChat();
                }
              }}
              value={msg}
              autoFocus
            />
            <button onClick={sendChat}>send</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
