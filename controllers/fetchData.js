const url = "http://localhost:3000/tabPanes";

const fetchData = async () => {
   const response = await fetch(url);
   const data = await response.json();
   return data;
};

export default fetchData;
