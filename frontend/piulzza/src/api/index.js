import getHostUrl from "./HostUrl";

async function getApi(apiNome = ""){
    try {
        const host = getHostUrl()
        const apiResponse = await fetch(`${host}/api/${apiNome}/`);
        const api = await apiResponse.json();
        return api;
      } catch (error) {
        console.error(`Error getting API ${apiNome}: ${error}`);
        return error;
      }
  }

export default getApi;

