export const getImageUrl = (path) => {
  const baseUrl = "http://192.168.0.5:5070";
  return path ? `${baseUrl}${path}` : `${baseUrl}/uploads/default.jpg`;
};