import React, { Component, createRef } from "react";
import ChatItem from "./ChatItem";


//localStorage Part

const customerEmail = localStorage.getItem("customerEmail");
const userEmail = localStorage.getItem("userEmail");


class ChatContent extends Component {

  
    
  messagesEndRef = createRef(null);
  
  chatItms = [
    
    {
      key: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNPJ7hy707-QySK5704F8MdG7l-L1HiynA_eVg6QDKNqsEf7oHcKcXwNN6KXv_TqsFso&usqp=CAU",
      type: "",
      msg: "Hi Ma'am Aziah Binti Yaacub, How are you?",
      header: userEmail,
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      type: "other",
      msg: "I am fine dear collector.",
      header: customerEmail,
    },
  
    {
      key: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNPJ7hy707-QySK5704F8MdG7l-L1HiynA_eVg6QDKNqsEf7oHcKcXwNN6KXv_TqsFso&usqp=CAU",
      type: "",
      msg: "Awesome these days.",
      header: userEmail,
      time: "",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      type: "other",
      msg: "Finally. What's the plan?",
      header: customerEmail,
      time: "",
    },
    {
      key: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNPJ7hy707-QySK5704F8MdG7l-L1HiynA_eVg6QDKNqsEf7oHcKcXwNN6KXv_TqsFso&usqp=CAU",
      type: "",
      msg: "What plan mate?",
      header: userEmail,
      time: "",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      type: "other",
      msg: "I'm talking about the loan",
      header: customerEmail,
      time: "",
    },
    {
        key: 8,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNPJ7hy707-QySK5704F8MdG7l-L1HiynA_eVg6QDKNqsEf7oHcKcXwNN6KXv_TqsFso&usqp=CAU",
        type: "",
        msg: "Oh, I see ",
        header: userEmail,
        time: "",
      },
      {
        key: 9,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
        type: "other",
        msg: "So, there is any news about my loan?",
        header: customerEmail,
        time: "",
      },
      {
        key: 10,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNPJ7hy707-QySK5704F8MdG7l-L1HiynA_eVg6QDKNqsEf7oHcKcXwNN6KXv_TqsFso&usqp=CAU",
        type: "",
        msg: "Please, let me check and I will get back to you",
        header: userEmail,
        time: "",
      },
      {
        key: 11,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
        type: "other",
        msg: "Okay, take your time time.",
        header: customerEmail,
        time: "",
      },
      {
        key: 12,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNPJ7hy707-QySK5704F8MdG7l-L1HiynA_eVg6QDKNqsEf7oHcKcXwNN6KXv_TqsFso&usqp=CAU",
        type: "",
        msg: "Sir, your loan under processing. ",
        header: userEmail,
        time: "",
      },
      {
        key: 13,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
        type: "other",
        msg: "Okay, dear.",
        header: customerEmail,
        time: "",
      },
      {
        key: 14,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNPJ7hy707-QySK5704F8MdG7l-L1HiynA_eVg6QDKNqsEf7oHcKcXwNN6KXv_TqsFso&usqp=CAU",
        type: "",
        msg: "Okay, with Thanks",
        header: userEmail,
        time: "",
      },
      {
        key: 15,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
        type: "other",
        msg: "Thank you.",
        header: customerEmail,
        time: "",
        
      },
  ];


  constructor(props) {
    super(props);
    
    

    this.state = {
      chat: this.chatItms,
      msg: "",
      header: "",
    };
  }

  
  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {

      const userEmail = localStorage.getItem("userEmail");

      if (e.keyCode === 13) {
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            header: userEmail,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNPJ7hy707-QySK5704F8MdG7l-L1HiynA_eVg6QDKNqsEf7oHcKcXwNN6KXv_TqsFso&usqp=CAU",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: ""});
          this.setState({header: ""});
          
        }
      }
    });
    this.scrollToBottom();
  }
  

  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
    
  };
  

  render() {
    
    return (
      <div className="main_chatcontent" style={{backgroundColor: '#ffffff', borderRadius: '0px 0px 15px 15px', fontFamily: 'Montserrat'}}>
            <div className="scrollbar-primary content_body">
                  <div className="chat_items">
                      {this.state.chat.map((itm, index) => {
                        return (
                          <ChatItem
                            animationDelay={index + 2}
                            key={itm.key}
                            user={itm.type ? itm.type : ""}
                            msg={itm.msg}
                            image={itm.image}
                            header={itm.header}
                            
                          />
                        );
                      })}
                    <div ref={this.messagesEndRef} />
                  </div>
            </div>
            <div className="content_footer">
                  <div className="" style={{color:'white'}}>
                      <button className="btnEsc" type="button" ><span>Escalate</span></button>
                      <button className="btnEsc" type="button" ><span>End Ticket</span></button>
                  </div>
                  <div className="sendNewMessage">
                      <button className="addFiles" id="addfiles">
                        <i className="fa fa-plus" ></i>
                      </button >
                      <input type="text" placeholder="Type a message here" onChange={this.onStateChange} value={this.state.msg}/>
                      <button className="btnSendMsg" id="sendMsgBtn" type="button"  >
                        <i className="fa fa-paper-plane" ></i>
                      </button>
                  </div>
            </div>
      </div>
    );
  }
}


export default ChatContent;