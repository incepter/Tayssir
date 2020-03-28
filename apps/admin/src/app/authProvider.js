const authProvider = {
  // todo: implement concrete login
  // now; allow any credentials
  login: () => {
    return new Promise(resolve => {
      localStorage.setItem('token', 'dummy_token');
      resolve();
    });
  },
  // todo: this is a naive way to check authentication;
  // the best way is to use an sso provider
  checkAuth: () => !!localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
  getPermissions: () => Promise.reject([]),
  logout: () => {
    return new Promise(resolve => {
      // just remove from local storage
      localStorage.removeItem('token');
      resolve();
    });
  },
};

export default authProvider;
