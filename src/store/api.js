import axios from "axios";

export const loadDataApi = async () =>
  await axios.get("http://localhost:8000/data");
