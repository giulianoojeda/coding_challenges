export const initialState = null;

export const userReducer = (state = {}, action) => {
  if (action.type === "USER") {
    return action.payload;
  }
  if (action.type === "LOGOUT") {
    return null;
  }
  if (action.type === "UPDATE") {
    return {
      ...state,
      following: action.payload.following,
      followers: action.payload.followers,
    };
  }
  if ( action.type === "UPDATE_PROFILE_PICTURE") {
    return {
      ...state,
      profilePicture: action.payload.profilePicture,
    };
  }

  return state;
};
