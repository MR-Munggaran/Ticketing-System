export const getImageUrl = (path) => {
  const baseUrl = "http://localhost:5000";
  return path ? `${baseUrl}${path}` : `${baseUrl}/uploads/default.jpg`;
};