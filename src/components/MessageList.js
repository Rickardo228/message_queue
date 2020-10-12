import React from "react";
import { useSelector } from "react-redux";

import MessageCard from "./MessageCard";

import { makeStyles } from "@material-ui/core/styles";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  messageList: {
    width: "100%",
    height: "400px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column-reverse",
    background: "#f5f5f5",
    overflowY: "auto",
  },
  noMessages: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
  },
}));

export default function MessageList() {
  const messages = useSelector((state) => state.messages);
  const classes = useStyles();
  return (
    <div className={classes.messageList}>
      {/* Display Messages */}
      {messages.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            x: -40,
            transition: {
              ease: "easeIn",
            },
          }}
          className={classes.noMessages}
        >
          {/* If 0 Messages */}
          <p>No Messages to Display</p>
        </motion.div>
      ) : (
        <AnimateSharedLayout>
          <AnimatePresence>
            {/* Map through messages */}
            {[...messages].reverse().map((m) => (
              <MessageCard key={m.id} message={m} />
            ))}
          </AnimatePresence>
        </AnimateSharedLayout>
      )}
    </div>
  );
}
