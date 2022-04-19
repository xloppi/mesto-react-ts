export const BASE_URL = 'https://mesto-express.herokuapp.com/';

export const register = async (email: string, password: string) => {

  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        "email": email,
        "password": password,
      })
    })

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    let actualData = await response.json();
    return actualData;

  } catch (e) {
    return Promise.reject(`Ошибка: ${e}`);
  }

}
