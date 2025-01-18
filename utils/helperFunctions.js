import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;

const fetchProducts = async (stateVariable) => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    stateVariable(response.data);
  } catch (error) {
    console.log(`Error retrieving products: ${error}`);
  }
  return stateVariable;
};

const fetchProductsByConcern = async (stateVariable, productConcern) => {
  try {
    const response = await axios.get(`${baseURL}/products/${productConcern}`);
    stateVariable(response.data);
  } catch (error) {
    console.log(`Error retrieving products: ${error}`);
  }
};

const fetchFavourites = async (stateVariable) => {
  try {
    const response = await axios.get(`${baseURL}/favourite`);
    stateVariable(response.data);
  } catch (error) {
    console.log(`Error retrieving favourites: ${error}`);
  }
  return stateVariable;
};

const postFavourites = async (data) => {
  try {
    await axios.post(`${baseURL}/favourite`, data);
  } catch (error) {
    console.log(`Error favouriting product: ${error}`);
  }
};

const removeFavourites = async (id) => {
  try {
    await axios.delete(`${baseURL}/favourite/${id}`);
  } catch (error) {
    console.log(`Error removing favourite: ${error}`);
  }
};

export {
  fetchProducts,
  fetchProductsByConcern,
  fetchFavourites,
  postFavourites,
  removeFavourites,
};
