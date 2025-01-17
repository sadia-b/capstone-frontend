import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;

const fetchProducts = async (stateVariable) => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    console.log(response.data);
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
export { fetchProducts, fetchProductsByConcern };
