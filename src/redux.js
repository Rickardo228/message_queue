import { createStore } from "redux";

const initialState = {
  messages: [],
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, payload],
      };
    case "DELETE_MESSAGE":
      return {
        ...state,
        messages: state.messages.filter((m) => m.id !== payload),
      };
    default:
      return state;
  }
}

export const addMessageAction = (message) => ({
  type: "ADD_MESSAGE",
  payload: message,
});

export const deleteMessageAction = (messageId) => ({
  type: "DELETE_MESSAGE",
  payload: messageId,
});
