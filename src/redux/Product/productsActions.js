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
    console.log("products", products);
    dispatch({
      type: actions.DELETE_PRODUCT,
      payload: products,
    });
  } catch (error) {
    console.log("Error Delete Product: " + error.message);
  }
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  dispatch({
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
