import {
  TMDB_BASE,
  TMDB_KEY,
} from "./constants";

export const api = async (
  path,
  params = {}
) => {
  const url = new URL(
    `${TMDB_BASE}${path}`
  );

  url.searchParams.set(
    "api_key",
    TMDB_KEY
  );

  Object.entries(params).forEach(
    ([key, value]) => {
      url.searchParams.set(key, value);
    }
  );

  const response = await fetch(url);

  const data = await response.json();

  return data;
};
