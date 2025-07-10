export const fakeLogin = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@tienda.com" && password === "123456") {
        resolve({ email });
      } else {
        reject("Credenciales incorrectas");
      }
    }, 1000);
  });
};
