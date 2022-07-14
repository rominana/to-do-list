const getData = () => {
  const data = global.localStorage.getItem('toDoData');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

export default getData;

// const getData = () => {
//   const data = [{ description: 'clean my room', completed: false, index: 1 }];
//   return data;
// };

// export default getData;
