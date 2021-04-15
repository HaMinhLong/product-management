import * as actions from "./productsTypes";
import data from "../../products.json";

export const fetchProducts = () => async (dispatch) => {
  try {
    const products = await data.products;
    dispatch({
      type: actions.FETCH_PRODUCTS,
      payload: products,
    });
  } catch (error) {
    console.log("Error Fetch Products: " + error.message);
  }
};

export const fetchProduct = (id) => async (dispatch) => {
  try {
    const product = await data.products.filter((product) => product.id === id);
    dispatch({
      type: actions.FETCH_PRODUCT,
      payload: product,
    });
  } catch (error) {
    console.log("Error Fetch Product: " + error.message);
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({
      type: actions.CREATE_PRODUCT,
      payload: product,
    });
  } catch (error) {
    console.log("Error Create Product: " + error.message);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actions.DELETE_PRODUCT,
      payload: id,
    });
  } catch (error) {
    console.log("Error Delete Product: " + error.message);
  }
};
