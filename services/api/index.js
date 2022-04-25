const API_URL = process.env.NEXT_PUBLIC_API_URL;

const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
  auth: {
    login: `${API_URL}/api/${VERSION}/auth/login`,
    profile: `${API_URL}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API_URL}/api/${VERSION}/products/${id}/`,
    getProducts: (limit, offset) =>
      `${API_URL}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API_URL}/api/${VERSION}/products`,
    deleteProduct: (id) => `${API_URL}/api/${VERSION}/products/${id}/`,
    updateProduct: (id) => `${API_URL}/api/${VERSION}/products/${id}/`,
  },
  categories: {
    getCategoriesList: `${API_URL}/api/${VERSION}/categories/`,
    addCategory: `${API_URL}/api/${VERSION}/categories/`,
    getCategoryItems: (id) =>
      `${API_URL}/api/${VERSION}/categories/${id}/products/`,
    updateCategory: (id) => `${API_URL}/api/${VERSION}/categories/${id}/`,
  },
  files: {
    addImage: `${API_URL}/api/${VERSION}/files/upload/`,
  },
};

export default endpoints;
