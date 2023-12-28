const url = "http://localhost:3000/navPills";

const fetchNavPills = async () => {
   const response = await fetch(url);
   const navPills = await response.json();
   return navPills;
};

export default fetchNavPills;
