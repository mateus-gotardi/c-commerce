export const getUrl = (link) => {
  if (process.env.STORAGE_TYPE === "local") {
    return "/upload/products/" + link;
  } else {
    return "https://e-commerce-nextjs.s3.amazonaws.com/" + link;
  }
};
export const adjustPrice = (price) => {
  let formattedPrice;
  if (price.includes(".")) {
    formattedPrice = price.replace(".", ",");
    let key = formattedPrice.indexOf(",");

    if (formattedPrice.length !== key + 3) {
      if (formattedPrice.length < key + 3) {
        formattedPrice = formattedPrice + "0";
      }
      if (formattedPrice.length > key + 3) {
        let tmp = formattedPrice.substr(0, key + 3);
        formattedPrice = tmp;
      }
    }
  } else {
    formattedPrice = price + ",00";
  }
  return formattedPrice;
};

export const getTags = (productTags) => {
  console.log(productTags);
  let clean = productTags.replace(/ /gm, "");
  console.log(clean);
  let tagList = clean.split(",");
  console.log(tagList);
  return tagList;
};
