import woodPano from '../catalog/wood.json';
import { tns } from 'tiny-slider';
import symbols from '../images/symbol-defs.svg';

import simpleLightbox from 'simplelightbox';

const woodCatalog = document.querySelector('#Wood-list');

const woodList = data => {
  const list = `<div class="wood-catalog">

  <ul class="control" id="custom-control">
  <li class="prev" > <svg width="30px" height="30px">
  <use href="${symbols}#icon-arrow-left" /></svg> </li>
  <li class="next" id="next"><svg width="30px" height="30px">
  <use href="${symbols}#icon-arrow-right" /></svg></li>
        
  </ul>  




  <ul class=" my-slider galleryPano">${data
    .map(
      item => `<li class="wood-card">
      <div  href=${
        item.image?.trim() !== ''
          ? item.image
          : 'https://i.ibb.co/hXCwYmK/4054617.png'
      } class="wood-card_content" >  
      <div class="wood-card_image-box">
    <img class="wood-card_image" src=${
      item.image?.trim() !== ''
        ? item.image
        : 'https://i.ibb.co/hXCwYmK/4054617.png'
    } alt="${item.name}" data-description="${item.name}<br> ${
        item.price
      } грн <br> (${item.width} х ${item.height}) мм" border="0" />
        </div>    
        <div class="wood-card_thumb" >
        <span class="wood-card_title wood-card_description">${item.name}</span>
        <span class="wood-card_price wood-card_description">${
          item.price
        } грн</span>
        ${
          item.width !== '-' || item.height !== '-'
            ? `<span class="wood-card_size wood-card_description">(${item.width} х ${item.height})мм </span>`
            : ''
        }
        ${
          item.pieces > 1
            ? `<span class="wood-card_pices wood-card_description">Части: ${item.pieces}</span>`
            : ''
        }
     </div>
     </div>
     </li>`
    )
    .join('')}</ul>
    </div>`;
  return list;
};

woodCatalog.innerHTML = woodList(woodPano);

let woodLightbox = new simpleLightbox('.wood-card_content', {
  captionsData: 'data-description',
  captionDelay: 250,
});

var slider = tns({
  container: '.my-slider',
  items: 3,
  slideBy: 1,
  // autoplay: true
  gutter: 20,
  // edgePadding: 20,
  nav: false,
  // navPosition: "bottom",
  controlsPosition: 'bottom',
  mouseDrag: true,
  controlsContainer: '#custom-control',
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});
