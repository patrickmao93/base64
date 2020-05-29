import { combineReducers } from "@reduxjs/toolkit";
import notificationsReducer from "../features/notifications/notificationsSlice";
import onlineReducer from "../features/onlineStatus/onlineSlice";
import themeReducer from "../features/theme/themeSlice";
import updateReducer from "../features/update/updateSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  notifications: notificationsReducer,
  update: updateReducer,
  online: onlineReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
