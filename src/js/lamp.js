import lamps from '../catalog/lamp.json';

const lampsCatalog = document.querySelector('#Lamps-list');
const lampsList = data => {
  const list = `<ul>${data
    .map(
      item => `<li>
        <span>Название: ${item.name}</span>
        <span>Стоимость: ${item.price} </span>
        <span>Размер ширина:${item.width} высота: ${item.height} </span>
     </li>`
    )
    .join('')}</ul>`;
  return list;
};
lampsCatalog.innerHTML = lampsList(lamps);

// ._2 {
//   position: absolute;
//   left: 0px;
//   top: 0px;
//   width: 1280px;
//   height: 2980px;
//   z-index: 54;
// }
// .Mint_CBD_Oil_1000mg__150 {
//   font-size: 18px;
//   font-family: "Poppins";
//   color: rgb(64, 64, 64);
//   line-height: 1.2;
//   text-align: center;
//   position: absolute;
//   left: 344.817px;
//   top: 1568.89px;
//   width: 181px;
//   height: 43px;
//   z-index: 53;
// }
// .Rectangle_4 {
//   border-width: 1px;
//   border-color: rgb(191, 191, 191);
//   border-style: solid;
//   position: absolute;
//   left: 355px;
//   top: 1282px;
//   width: 268px;
//   height: 268px;
//   z-index: 51;
// }
