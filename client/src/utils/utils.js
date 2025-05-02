export function pathToImage(image) {
  const baseURL = "http://localhost:8000"; 
  const imagePath = `app${image}`;
  return `${baseURL}/${imagePath}`;
}