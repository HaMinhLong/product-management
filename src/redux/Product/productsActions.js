import * as actions from "./productsTypes";
import data from "../../products.json";

export const fetchProducts = () => async (dispatch) => {
  try {
    const products = data.products;
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
    const product = data.products.filter((product) => product.id === id);
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
    data.products.unshift(product);
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
    for (var i = 0; i < data.products.length; i++) {
      if (data.products[i].id === id) {
        data.products.splice(i, 1);
      }
    }
    const products = data.products;
    dispatch({
      type: actions.DELETE_PRODUCT,
      payload: products,
    });
  } catch (error) {
    console.log("Error Delete Product: " + error.message);
  }
};

export const updateProduct = (product) => (dispatch) => {
  try {
    for (var i = 0; i < data.products.length; i++) {
      if (data.products[i].id === product.id) {
        data.products[i] = product;
      }
    }
    dispatch({
      type: actions.UPDATE_PRODUCT,
      payload: product,
    });
  } catch (error) {
    console.log("Error Update Product: " + error.message);
  }
};
