import React from "react";
import './Message.css';
import PropTypes from "prop-types"
import Timestamp from "./Timestamp.js"

class Message extends React.Component {
  // static propTypes = {
  //
  // };
  render(){
    console.log(this.props.sender)
    let className = "chat-entry";
    if (this.props.user === "user1"){
     className += " local" }
     else {className += " remote"}


    return(

      <section className={className}>
      <p className="entry-name" ><strong>{this.props.sender}</strong></p>
      <section className="entry-bubble">
      <p className="entry-body">{this.props.body}</p>
      <p className="entry-time"><Timestamp time={this.props.timestamp}/></p>
      </section>
      </section>

    );
  }
}

export default Message;
