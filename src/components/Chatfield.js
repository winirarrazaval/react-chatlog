import React from "react";
import './Chatfield.css';
import PropTypes from "prop-types";

import Message from './Message.js'

class Chatfield extends React.Component {

  render(){
    let user1= this.props.info[0].sender;
    let messages = this.props.info.map((message)=>{
      if (message.sender === user1){
        return(
          <Message user="user1" sender={message.sender} body={message.body} timestamp={message.timeStamp}/>
        )}
        else {return(
          <Message user="user2" sender={message.sender} body={message.body} timestamp={message.timestamp}/>
          )}
        });

        return(
          <section>
          {messages}
          </section>
        );
      }
    }

    export default Chatfield;
