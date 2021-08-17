import axios from 'axios';

const getHeader = () => {
  // const token1 = getCookies(TOKENS);
  // const auth = token1 ? `Bearer ${JSON.parse(token1).accessToken}` : '';

  const headers = {
    'Content-Type': 'application/json',
    // Authorization: auth
  };
  return headers;
};

export const doPost = async (endPoint, body) => {
  try {
    const result = await axios.post(endPoint, body, {
      headers: getHeader(),
    });

    return result;
  } catch (e) {
    return e.response;
  }
};

export const doGet = async endPoint => {
  try {
    const result = await axios.get(endPoint, {
      headers: getHeader(),
    });

    return result;
  } catch (e) {
    return e.response;
  }
};

export const doPut = async (endPoint, body, token) => {
  try {
    const result = await axios.put(endPoint, body, {
      headers: getHeader(),
    });

    return result;
  } catch (e) {
    return e.response;
  }
};

export const doDelete = async (endPoint, body, token) => {
  try {
    const result = await axios.delete(endPoint, {
      headers: getHeader(),
      data: body,
    });

    return result;
  } catch (e) {
    return e.response;
  }
};
