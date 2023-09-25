import React, { Component } from "react";
import Avatar from "../chatlist/Avatar";
import dateFormat from "dateformat";



let date ="12-Jan-2023";

class ChatItem extends Component {
  
  render() {
    return (
      <>
      
      <div
              style={{ animationDelay: `0.3s`}}
              className={`chat_item ${this.props.user ? this.props.user : ""}`}
              
            >
              
              <div className="chat_item_content">
                <div className="header_name" style={{fontSize: '12px', fontWeight: 'bold'}}>{this.props.header}</div>
                <div className="chat_msg">{this.props.msg}</div>
                <div className="chat_meta">
                  <span>{dateFormat(date,"dd-mmm-yyyy")}</span>
                  <span>01:10PM <i className="fa-brands fa-whatsapp" style={{color: 'white', backgroundColor: 'limegreen', borderRadius: '5px'}}></i></span> 
                  
                </div>
              </div>

              <Avatar isonline="active" image={this.props.image} />
              
              
      </div>
      </>
    );
  }
}

export default ChatItem;