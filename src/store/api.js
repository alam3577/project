import axios from "axios";

export const loadDataApi = async () =>
  await axios.get("https://project-json.herokuapp.com/data");
