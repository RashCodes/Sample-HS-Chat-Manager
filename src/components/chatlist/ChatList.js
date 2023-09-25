import React, { Component } from "react";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 1,
      name: "Aziah Binti Yaacub",
      active: true,
      isonline: true,
      time: true,
      
      
    },
    {
      image:
        "https://kidzartworx.com.au/wp-content/uploads/2017/01/circle-man.png",
      id: 2,
      name: "Clyve",
      active: false,
      isonline: true,
      time: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      id: 3,
      name: "De Robertis",
      active: false,
      isonline: true,
      time: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Napoleone",
      active: false,
      isonline: true,
      time: true,
     
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 5,
      name: "Eldershaw",
      active: false,
      isonline: true,
      time: true,
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 6,
      name: "Fransinelli",
      active: false,
      isonline: true,
      time: true,
    },
    {
      image:
        "https://www.pngkit.com/png/detail/147-1477484_jeb-circle-man-face-circle-photos-png.png",
      id: 7,
      name: "	Zavattari",
      active: false,
      isonline: true,
      time: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnK1wW77Kv0I50PyvghdoVr7XzFf2UJb1LpojvVKsZ_acVCtB98p_wGj5wQItRqVV8XBM&usqp=CAU",
      id: 8,
      name: "	Civitillo",
      active: false,
      isonline: true,
      time: true,
    },
    {
      image:
        "https://www.pngkit.com/png/full/639-6399637_henry-circle-gentleman.png",
      id: 9,
      name: "Dane",
      active: false,
      isonline: true,
      time: true,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvHpEOo3fTsZQkp5Hfd93YrByM9P4F944GylcXSwZ7xzop2YZo6KH7lFdu1FsdBJ3E8g&usqp=CAU",
      id: 10,
      name: "Kevan",
      active: false,
      isonline: true,
      time: true,
      
      
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main_chatlist mt-2" style={{backgroundColor: '#ffffff', borderRadius: '10px'}}>
            <div className="chatList_search">
                <div className="search_wrap search1">
                  <input type="text" placeholder="Search..." required />
                  <button className="search-btn">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
            </div>
          <div className="chatlist_items scrollbar-primary">
              {this.state.allChats.map((item, index) => {
                return (
                  <ChatListItems
                    name={item.name}
                    key={item.id}
                    animationDelay={index + 1}
                    active={item.active ? "active" : "none"}
                    isonline={item.isonline ? "active" : "none"}
                    image={item.image}
                    time={item.time ? "online": "offline"} 
                  />
                );
              })}
          </div>
      </div>
    );
  }
}
