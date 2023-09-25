import React, { Component } from "react";
import Avatar from "./Avatar";

export default class ChatListItems extends Component {
  
  selectChat = (e) => {
  

    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };

  
  render() {
    return (
      
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={this.selectChat}
        className={`chatlist_item  ${
          this.props.active ? this.props.active : ""
        } `}
      >
        <Avatar
          image={
            this.props.image ? this.props.image : ""
          }
          isonline={this.props.isonline}
          
          time={this.props.time}
        />
          <div >
            <p className="userMeta">{this.props.name}</p>
            <p className="activeTime">{this.props.time}</p>
          </div>
      </div>
    );
  }
}
