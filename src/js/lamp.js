import lamps from '../catalog/lamp.json';
import simpleLightbox from 'simplelightbox';

const lampsCatalog = document.querySelector('#Lamps-list');

const lampsList = data => {
  const list = `<div class="lamp-catalog">
    <ul class=" lamp-catalog_list galleryLamp">${data
      .map(
        item => `<li class="lamp-card">
        <div href=${
          item.image?.trim() !== ''
            ? item.image
            : 'https://i.ibb.co/hXCwYmK/4054617.png'
        } class="lamp-card_content" >   
        <div class="lamp-card_image-box">
      <img class="lamp-card_image" src=${
        item.image?.trim() !== ''
          ? item.image
          : 'https://i.ibb.co/hXCwYmK/4054617.png'
      } alt=${item.name} border="0"  data-description="${item.name}<br> ${
          item.price
        } грн <br> (${item.width} х ${item.height}) мм"/>
          </div>    
          <div class="lamp-card_thumb" >
          <span class="lamp-card_title lamp-card_description">${
            item.name
          }</span>
          <span class="lamp-card_price lamp-card_description">${
            item.price
          } грн</span>
          ${
            item.width !== '-' || item.height !== '-'
              ? `<span class="lamp-card_size lamp-card_description">(${item.width} х ${item.height})мм </span>`
              : ''
          }
          ${
            item.pieces > 1
              ? `<span class="lamp-card_pices lamp-card_description">Частини: ${item.pieces}</span>`
              : ''
          }
       </div>
       </div>
       </li>`
      )
      .join('')}</ul></div>`;
  return list;
};

lampsCatalog.innerHTML = lampsList(lamps);

let lampLightbox = new simpleLightbox('.lamp-card_content', {
  captionsData: 'data-description',
  captionDelay: 250,
});
