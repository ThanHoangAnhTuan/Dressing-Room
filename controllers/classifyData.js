const classifyData = (data) => {
   let productArray = [];
   for (let i = 0; i < data.length; i++) {
      const type = data[i].type;
      const lastIndex = data.findLastIndex(
         (element) => element.type === type
      );
      productArray.push(data.slice(i, lastIndex + 1));
      i = lastIndex;
   }
   return productArray;
};

export default classifyData;
