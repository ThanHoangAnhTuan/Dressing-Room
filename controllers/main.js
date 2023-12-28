import renderData from "../views/renderData.js";
import renderNavPill from "../views/renderNavPills.js";
import classifyData from "./classifyData.js";
import fetchData from "./fetchData.js";
import fetchNavPills from "./fetchNavPills.js";

let type = "topclothes";
let arrayProduct = [];
let navPills;

const start = async () => {
   navPills = await fetchNavPills();
   const data = await fetchData();
   arrayProduct = classifyData(data);
   renderNavPill(navPills, type);
   renderData(
      arrayProduct.find((element) => element[0].type === type)
   );
};

await start();

const navElement = document.querySelector(".nav");
navElement.addEventListener("click", (event) => {
   if (event.target.tagName === "BUTTON") {
      renderNavPill(navPills, event.target.dataset.type);
      renderData(
         arrayProduct.find(
            (element) => element[0].type === event.target.dataset.type
         )
      );
   }
});

const tabContent = document.querySelector(".tab-content");
tabContent.addEventListener("click", (event) => {
   const type = event.target.id.split("_");
   const bikinitop = document.querySelector(".contain .bikinitop");
   const bikinibottom = document.querySelector(
      ".contain .bikinibottom"
   );
   const handbag = document.querySelector(".contain .handbag");
   const necklace = document.querySelector(".contain .necklace");
   const hairstyle = document.querySelector(".contain .hairstyle");
   const feetElement = document.querySelector(".contain .feet");
   const background = document.querySelector(".contain .background");
   switch (type[0]) {
      case "shoes":
         feetElement.style.background = `url("/assets/images/shoes/shoes${type[1]}.png")`;
         feetElement.style.zIndex = "1";
         break;
      case "topcloth":
         bikinitop.style.background = `url("/assets/images/clothes/${type[0]}${type[1]}.png")`;
         bikinitop.style.backgroundSize = "cover";
         bikinitop.style.zIndex = "3";
         break;
      case "botcloth":
         bikinibottom.style.background = `url("/assets/images/clothes/${type[0]}${type[1]}.png")`;
         bikinibottom.style.backgroundSize = "cover";
         bikinibottom.style.zIndex = "2";
         break;
      case "handbag":
         handbag.style.background = `url("/assets/images/handbags/${type[0]}${type[1]}.png")`;
         break;
      case "necklace":
         necklace.style.background = `url("/assets/images/necklaces/${type[0]}${type[1]}.png")`;
         break;
      case "hairstyle":
         hairstyle.style.background = `url("/assets/images/hairstyle/${type[0]}${type[1]}.png")`;
         break;
      case "background":
         background.style.background = `url("/assets/images/background/${type[0]}${type[1]}.jpg")`;
         break;
      default:
         break;
   }
});
