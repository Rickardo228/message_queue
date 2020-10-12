import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import CommentIcon from "@material-ui/icons/Comment";

import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  messageContainer: {
    display: "flex",
    margin: "0.5rem 0",
    alignItems: "flex-end",
  },
  card: {
    position: "relative",
    width: "100%",
    minHeight: "4rem",

    display: "flex",
    padding: "1rem",
    alignItems: "center",
  },
  avatar: {
    marginRight: "0.5rem",
    background: "#f9f9f9",
  },
  progress: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
  },
}));

export default function MessageCard({ message }) {
  const classes = useStyles();

  return (
    <motion.div
      key={message.id}
      layout
      className={classes.messageContainer}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        x: -40,
        transition: {
          ease: "easeIn",
        },
      }}
    >
      <CommentIcon className={classes.avatar} color="primary" />
      <Paper className={classes.card}>
        {message.text}
        <ProgressBar message={message} />
      </Paper>
    </motion.div>
  );
}

const ProgressBar = ({ message }) => {
  const [progress, setProgress] = useState(92);
  const classes = useStyles();

  useEffect(() => {
    const timer = setInterval(function () {
      setProgress((p) => {
        return p - 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <LinearProgress
      className={classes.progress}
      variant="determinate"
      value={progress}
    />
  );
};
