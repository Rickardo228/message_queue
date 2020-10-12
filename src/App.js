import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "./redux";

import MessageInput from "./components/MessageInput";
import MessageList from "./components/MessageList";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Message Queue System</h1>
        <h3>by Richard Barnes</h3>
        <div className="main">
          <MessageList />
          <MessageInput />
        </div>
      </div>
    </Provider>
  );
}

export default App;
