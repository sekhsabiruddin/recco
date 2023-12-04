export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const statusChnage = (id, item) => {
  return {
    type: "STATUS",
    proudctid: id,
    payload: item,
  };
};

export const editProduct = (id, quantity) => {
  return {
    type: "EDITPRODUCT",
    proudctid: id,
    payload: quantity,
  };
};
