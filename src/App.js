import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Chat from './chat';
import { useState } from "react";

library.add(faLocationArrow);

function App() {

  let [messageDetails, addMessageDetail] = useState(
    [
      {
        messageIndex: "uniqueId0",
        name: "Bala",
        myImg: "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
        profileImg: "https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg",
        status: true,
        items: [
          {
            message: "Hi, how are you ?",
            position: true,
          },
          {
            message: "Hi Sowmya i am good tnx how about you?",
            position: false,
          },
        ]
      },
      {
        messageIndex: "uniqueId1",
        name: "Prasanna",
        myImg: "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
        profileImg: "https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg",
        status: false,
        items: [
          {
            message: "Hi, how are you ?",
            position: true,
          },
          {
            message: "Hi Prasanna i am good tnx how about you?",
            position: false,
          },
        ]
      },
      {
        messageIndex: "uniqueId2",
        name: "Buttu",
        myImg: "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
        profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_oDCpYXF_hXElVqjIQpUsSD6S7kxk4-hwg&usqp=CAU",
        status: false,
        items: [
          {
            message: "Hi, how are you ?",
            position: true,
          },
          {
            message: "Hi Buttu i am good tnx how about you?",
            position: false,
          },
        ]
      },
      {
        messageIndex: "uniqueId3",
        name: "Kuttu",

        myImg: "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
        profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKDCOpj1A9Q7Y3DdKUdd21uGUwYLActZv9A&usqp=CAU",
        status: true,
        items: [
          {
            message: "Hi, how are you ?",
            position: true,
          },
          {
            message: "Hi Kuttu i am good tnx how about you?",
            position: false,
          },
        ]
      }
    ]
  );
  let [item, getItem] = useState(messageDetails[0]);

  let updateMsg = (messageIndex) => {
    let msg = document.getElementById(messageIndex).value;
    let currentIndex = messageIndex.substr(8, 8);

    let obj = {
      message: msg,
      position: false,
    }
    messageDetails[currentIndex].items.push(obj);
    document.getElementById(messageIndex).value = " ";
    addMessageDetail([...messageDetails]);
  }
  return (
    <div className="container-fluid h-100 padMar20">
      <div className="row justify-content-center h-100">
        <div className="col-md-4 col-xl-3 chat">
          <div className="card mb-sm-3 mb-md-0 contacts_card">
            <div className="card-body contacts_body">
              <ul className="contacts">
                {
                  messageDetails.map((message, index) => {
                    return <li key={index} className="pointerCursor" onClick={() => {
                      getItem(message);
                    }} >
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img src={message.profileImg} className="rounded-circle user_img" />
                          {
                            message.status ? <span className="online_icon"></span> : <span className="offline_icon"></span>
                          }
                        </div>
                        <div className="user_info">
                          <span>{message.name}</span>
                          <p className="text-truncate maxWidth200">{message.items[message.items.length - 1].message}</p>
                        </div>
                      </div>
                    </li>
                  })
                }
              </ul>
            </div>
            <div className="card-footer"></div>
          </div></div>
        <div className="col-md-8 col-xl-6 chat">
          {<Chat property={item} handleClick={updateMsg}></Chat>}
        </div>
      </div>
    </div>
  );
}

export default App;
