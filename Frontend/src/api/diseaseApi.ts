import API_BASE_URL from "../config/api";
export const predictDisease = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE_URL}/predict-disease`, {
    method: "POST",
    body: formData,
  });

  return res.json();
};