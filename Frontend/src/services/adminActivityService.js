import { API_BASE_URL } from "../constants";

export const getRecentActivities = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE_URL}/admin/activities`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
