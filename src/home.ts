import { addListeners, addMessagesArray } from "./elements/all-messages-array";
import { addHeader } from "./elements/header";
import { addMsgCounter } from "./elements/message-counter";
import { addNavBar } from "./elements/navigation-bar";
import "./style.css";

addHeader();
addNavBar();
addMsgCounter();
addMessagesArray();
addListeners();

