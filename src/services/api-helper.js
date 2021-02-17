import axios from "axios";

const baseUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}`;
const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};
export const getAllSongs = async () => {
  const response = await axios.get(baseUrl, config);
  return response.data.records;
};
export const addNewSong = async (body) => {
  const response = await axios.post(baseUrl, body, config);
  return response;
};
