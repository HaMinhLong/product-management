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

export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: actions.FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
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
  console.log(sortedProducts);
  dispatch({
    type: actions.ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
