import API_BASE_URL from "../config/api";
export const predictYield = async (data: any) => {
  const response = await fetch(`${API_BASE_URL}/predict-yield`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(err);
    throw new Error('Yield prediction failed');
  }

  return response.json();
};