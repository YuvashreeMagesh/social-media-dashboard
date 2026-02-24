import axios from "axios";

const API_BASE = "/api/engagements";

export const fetchEngagements = () => {
  return axios.get(API_BASE).then(res => res.data);
};
