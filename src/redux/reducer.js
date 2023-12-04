// reducers.js

// Define your initial state
const initialState = {
  data: [],
};

const rootReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        data: action.payload,
      };

    case "STATUS":
      return {
        ...state,
        data: state.data.map((ele) => {
          if (ele.id === action.proudctid) {
            return { ...ele, status: action.payload };
          }
          return ele;
        }),
      };
    case "EDITPRODUCT":
      return {
        ...state,
        data: state.data.map((ele) => {
          if (ele.id === action.proudctid) {
            return { ...ele, quantity: action.payload };
          }
          return ele;
        }),
      };
    default:
      return state;
  }
};

export default rootReducer;
