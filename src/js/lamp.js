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
              ? `<span class="lamp-card_pices lamp-card_description">Части: ${item.pieces}</span>`
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

// const woodList = data => {
//   const list = `<div class="wood-catalog">
//   <ul class="control" id="custom-control">
//   <li class="prev"><i class=""><</i></li>
//   <li class="next"><i class="">></i></li>

//   </ul>
//   <ul class=" my-slider">${data
//     .map(
//       item => `<li class="wood-card">
//       <div class="wood-card_content">
//       <div class="wood-card_image-box">
//     <img class="wood-card_image" src=${item.image?.trim()!==""? item.image: "https://diadoc.com/wp-content/themes/govorov.top/assets/img/no-photo.svg"} alt=${item.name} border="0" />
//         </div>
//         <div class="wood-card_thumb" >
//         <span class="wood-card_title wood-card_description">${item.name}</span>
//         <span class="wood-card_price wood-card_description">${item.price} руб</span>
//         ${item.width !== "-"|| item.height !== "-" ? `<span class="wood-card_size wood-card_description">(${item.width} х ${item.height})мм </span>`: ""}
//         ${item.pieces > 1?`<span class="wood-card_pices wood-card_description">Части: ${item.pieces}</span>` : "" }
//      </div>
//      </div>
//      </li>`
//     )
// .join('')}</ul></div>`;

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
