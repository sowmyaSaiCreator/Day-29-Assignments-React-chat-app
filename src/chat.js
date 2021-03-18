import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Chat(args) {
    let updateMessageDetail = (args, method, array) => {

        let msg = document.getElementById(args.messageIndex).value;
        let currentIndex = args.messageIndex.substr(8, 8);

        let obj = {
            message: msg,
            position: false,
        }
        array[currentIndex].items.push(obj);
        document.getElementById(args.messageIndex).value = " ";
        method([...array]);
    }
    return (
        <div className="card">
            <div className="card-header msg_head">
                <div className="d-flex bd-highlight">
                    <div className="img_cont">
                        <img src={args.property.profileImg} className="rounded-circle user_img" />
                        {
                            args.property.status?<span className="online_icon"></span>:<span className="offline_icon"></span>
                        }
                    </div>
                    <div className="user_info">
                        <span>{args.property.name}</span>
                    </div>
                </div>
            </div>
            <div className="card-body msg_card_body">
                {
                    args.property.items.map((item, index) => {
                        return item.position ? <div className="d-flex justify-content-start mb-4" key={index}>
                            <div className="img_cont_msg">
                                <img src={args.property.profileImg} className="rounded-circle user_img_msg" />
                            </div>
                            <div className="msg_ner">
                                {item.message}
                            </div>
                        </div> : <div className="d-flex justify-content-end mb-4" key={index}>
                            <div className="msg_cotainer_send">
                                {item.message}
                            </div>
                            <div className="img_cont_msg">
                                <img src={args.property.myImg} className="rounded-circle user_img_msg" />
                            </div>
                        </div>
                    })
                }

            </div>
            <div className="card-footer">
                <div className="input-group">
                    <textarea name="" id={args.property.messageIndex} className="form-control type_msg" placeholder="Type your message..."></textarea>
                    <div className="input-group-append">
                        <span className="input-group-text send_btn"  onClick={() => updateMessageDetail(args.property, args.method, args.array)}><FontAwesomeIcon icon="location-arrow" /></span> 
                        {/* <button className="btn btn-success" onClick={() => updateMessageDetail(args.property, args.method, args.array)}>send</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;