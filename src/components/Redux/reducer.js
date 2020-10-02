import data from '../../mockdata/Sample.json';

const initialState = {
  data,
  loggedInUserInfo: {
    userName: '',
    password: ''
  }
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATEUSERINFO':
      return {
        ...state,
        loggedInUserInfo: { ...action.userInfo }
      };
    default:
      return initialState;
  }
};

export default Reducer;
