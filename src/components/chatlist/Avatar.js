import React, { Component } from "react";

class Avatar extends Component {

  render() {
    return (
      <div className="avatar">
          <div className="avatar-img">
            <img src={this.props.image} alt="#" />
          </div>
          <span className={`isonline ${this.props.isonline}`}></span>
      </div>
    );
  }
}
export default Avatar;