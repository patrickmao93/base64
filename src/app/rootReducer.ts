import { combineReducers } from "@reduxjs/toolkit";
import notificationsReducer from "../features/notifications/notificationsSlice";
import onlineReducer from "../features/onlineStatus/onlineSlice";
import themeReducer from "../features/theme/themeSlice";
import updateReducer from "../features/update/updateSlice";
import transcoderReducer from "../features/transcoder/transcoderSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  notifications: notificationsReducer,
  update: updateReducer,
  online: onlineReducer,
  transcoder: transcoderReducer,
});

export type RootReducer = typeof rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
