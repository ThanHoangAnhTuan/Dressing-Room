const renderData = (data) => {
   const tabContent = document.querySelector(".tab-content");
   const htmls = data.map(
      (product) => `
      <div class="col-xl-3 mb-5">
         <img
            src="${product.imgSrc_jpg}"
            width="100%" />
         <h3 class="text-center">${product.name}</h3>
         <button
            id="${product.id}"
            class="btn btn-outline-secondary w-100">
            Thử đồ
         </button>
      </div>`
   );
   tabContent.innerHTML = htmls.join("");
};

export default renderData;
