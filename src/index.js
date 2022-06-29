import "./styles.css";
import products from "./products.json";

function getInventoryValue(productsList) {
  const products = productsList.reduce((acc, product) => {
    return (acc += product.price * product.stock);
  }, 0);

  return products;
}

function sortByPriceAsc(productsList) {
  const products = productsList
    .filter((product) => product.stock !== 0)
    .sort((a, b) => (a.price < b.price ? -1 : 1));

  return products;
}

function getOutOfStockProducts(productsList) {
  return productsList.filter((product) => product.stock === 0);
}

document.getElementById("app").innerHTML = `
<strong>Inventário</strong>
<div>
  ${getInventoryValue(products) || ""}
</div>
<br />
<br />
<strong>Lista de produtos</strong>
<div style="white-space: pre-line; margin-top: -16px">
  ${JSON.stringify(sortByPriceAsc(products), "\n", null) || []}
</div>
<br />
<br />
<strong>Lista de produtos sem estoque</strong>
<div style="white-space: pre-line; margin-top: -16px">
  ${JSON.stringify(getOutOfStockProducts(products), "\n", null) || []}
</div>
`;
