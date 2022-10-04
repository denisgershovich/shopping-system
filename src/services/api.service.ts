import Axios from "axios";

const BASE_URL = "http://localhost:3030";

export function post(
  endpoint: string,
  data: {
    email: FormDataEntryValue;
    password: FormDataEntryValue;
    password2: FormDataEntryValue;
  }
) {
  return ajax(endpoint, "POST", data);
}

export function get(endpoint: string, data = null) {
  return ajax(endpoint, "GET", data);
}

async function ajax(endpoint: string, method: string, data: any) {
  try {
    const res = await Axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      // params: (method === 'GET') ? data : null
    });
    return res.status;
  } catch (err) {
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `,
      data
    );
    console.dir(err);
    throw err;
  }
}
