
export const getToken = () => localStorage.getItem("token");

export const isAuthenticated = () => !!getToken();

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
