// Selectors
// get data from local storage
const getData = () => {
  const data = localStorage.getItem('toDoData');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

export default getData;