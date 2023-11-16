export const apiRequest = async (action, options) => {
  const response = await fetch(`${action}`, options);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.response);
  }
  return data;
}