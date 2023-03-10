import woodPano from '../catalog/wood.json';
import { tns } from 'tiny-slider';



const woodCatalog = document.querySelector('#Wood-list');


const woodList = data => {
  const list = `<div class="wood-catalog">
  <ul class="control" id="custom-control">
  <li class="prev"><i class=""><</i></li>
  <li class="next"><i class="">></i></li>
        
  </ul>  
  <ul class=" my-slider">${data
    .map(
      item => `<li class="wood-card">
      <div class="wood-card_content">  
      <div class="wood-card_image-box">
    <img class="wood-card_image" src=${item.image?.trim()!==""? item.image: "https://i.ibb.co/hXCwYmK/4054617.png"} alt=${item.name} border="0" />
        </div>    
        <div class="wood-card_thumb" >
        <span class="wood-card_title wood-card_description">${item.name}</span>
        <span class="wood-card_price wood-card_description">${item.price} руб</span>
        ${item.width !== "-"|| item.height !== "-" ? `<span class="wood-card_size wood-card_description">(${item.width} х ${item.height})мм </span>`: ""}
        ${item.pieces > 1?`<span class="wood-card_pices wood-card_description">Части: ${item.pieces}</span>` : "" }
     </div>
     </div>
     </li>`
    )
    .join('')}</ul></div>`;
  return list;
};



woodCatalog.innerHTML = woodList(woodPano);
  
var slider = tns({
  container: '.my-slider',
  items: 3,
  slideBy: 1,
  // autoplay: true
  gutter: 20,
  // edgePadding: 20,
controlsPosition: "bottom",
navPosition: "bottom",
mouseDrag: true,
controlsContainer: "#custom-control",
responsive:{
  0:{
    items: 2
  },  
  768:{
    items: 3
  },
  // 1024:{
  //   items: 4
  // }
}
});
