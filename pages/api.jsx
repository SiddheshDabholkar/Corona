import axios from "axios";

const urlIN = "https://covid19.mathdro.id/api/countries/IN";

export const fetchIn = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(urlIN);
    console.log(data);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};
