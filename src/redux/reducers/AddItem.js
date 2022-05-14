const addItem = [];

const AddItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      console.log(state);
      // debugger;
      return [...state, action.payload];
      break;
    case "DELITEM":
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));
      break;
    default:
      return state;
      break;
  }
};
export default AddItems;
