const API_URL = process.env.NEXT_PUBLIC_API_URL;

const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
  auth: {
    login: `${API_URL}/api/${VERSION}/auth/login`,
    profile: `${API_URL}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API_URL}/api/${VERSION}/products/${id}`,
    getProducts: `${API_URL}/api/${VERSION}/products`,
  },
};

export default endpoints;
