import UserSession from "./User.js";

class UserState {
  constructor() {
    this.currentUser = null;
  }

  initUser(token, userId) {
    this.currentUser = new UserSession(token, userId);
  }

  getCurrentUser() {
    return this.currentUser;
  }
}

const userState = new UserState();
export default userState;
