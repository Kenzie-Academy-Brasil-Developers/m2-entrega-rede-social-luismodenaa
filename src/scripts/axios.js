const token = localStorage.getItem("@redeKenzie:token");

export const instance = axios.create({
  baseURL: "https://m2-rede-social.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  },
});

export const instanceRegister = axios.create({
  baseURL: "https://m2-rede-social.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const instanceLogin = axios.create({
  baseURL: "https://m2-rede-social.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
