const renderNavPill = (data, type) => {
   const navPillsElement = document.querySelector(".nav-pills");
   const htmls = data.map((button) => {
      if (type === button.type) {
         return `<li class="flex-grow-1">
                     <button
                        class="btn btn-outline-primary w-100 btn-primary text-white" data-type=${button.type}>
                        ${button.showName}
                     </button>
                  </li>`;
      } else {
         return `<li class="flex-grow-1">
                     <button
                        class="btn btn-outline-primary w-100" data-type=${button.type}>
                        ${button.showName}
                     </button>
                  </li>`;
      }
   });
   navPillsElement.innerHTML = htmls.join("");
};

export default renderNavPill;
