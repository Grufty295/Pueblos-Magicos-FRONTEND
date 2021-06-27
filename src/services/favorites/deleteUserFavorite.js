import { fetchWithToken } from "../../helpers/fetch";

const deleteUserFavorite = async (id) => {
  const resp = await fetchWithToken(`favorites/${id}`, {}, "DELETE");

  const body = await resp.json();

  if (body.ok) {
    return body;
  } else {
    throw Error(body.msg);
  }
};

export default deleteUserFavorite;
