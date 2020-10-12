import React, { useState } from "react";

import { v4 as uuid } from "uuid";

import { useDispatch } from "react-redux";
import { addMessageAction, deleteMessageAction } from "../redux";

import { TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inputForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem",
    background: "white",
  },
}));

export default function MessageInput() {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const addMessage = (message) => dispatch(addMessageAction(message));
  const deleteMessage = (messageId) => dispatch(deleteMessageAction(messageId));

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    let messageId = uuid();

    addMessage({
      id: messageId,
      text: message,
    });

    setMessage("");

    setTimeout(() => {
      deleteMessage(messageId);
    }, 5000);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.inputForm}>
        <TextField
          name="Message"
          placeholder="Add a message"
          value={message}
          onChange={onChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </form>
  );
}
