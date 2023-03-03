import woodPano from '../catalog/wood.json';

const woodCatalog = document.querySelector('#Wood-list');

const woodList = data => {
  const list = `<ul>${data
    .map(
      item => `<li>
        <span>Название: ${item.name}</span>
        <span>Стоимость: ${item.price} </span>
        <span>Размер ширина:${item.width} высота: ${item.height} </span>
        <span>колличество частей: ${item.pieces}</span> 
     </li>`
    )
    .join('')}</ul>`;
  return list;
};

woodCatalog.innerHTML = woodList(woodPano);
