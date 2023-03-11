import axios from 'axios';
import Toastify from 'toastify-js';
import dotenv from "dotenv"

dotenv.config()

const {TOKEN, CHAT_ID , URI }= process.env;
console.log(TOKEN, CHAT_ID , URI)
const toggleContactModal = e => {
  document.getElementById('contact-modal').classList.toggle('visually-hidden');
  document.body.classList.toggle('modal-open');
};
 
const sendMessage = async e => {
  e.preventDefault();
  const { name, email, phone, message } = e.target;
  let htmlMessage = `<b>Заявка с сайта</b>\n
  <b>Отправитель: </b>${name.value}\n
  <b>Почта: </b> ${email.value}\n
  <b>Телефон: </b>${phone.value}\n
  ${message.value.trim() !== '' ? `<b>Сообщение: </b>${message.value}\n` : ''}`;
  console.log(message);
  const button = document.getElementById('contact-form-submit');
  try {
    button.disabled = true;
    await axios.post(URI, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: htmlMessage,
    });
    button.disabled = false;
    e.target.reset();
    toggleContactModal();

    Toastify({
      text: 'Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время',
    }).showToast();
  } catch (e) {
    button.disabled = false;
    console.log(e.message);
  }
};
document
  .getElementById('contact-form-close')
  .addEventListener('click', toggleContactModal);
document
  .getElementById('contact-form-open')
  .addEventListener('click', toggleContactModal);
document
  .getElementById('contact-form')
  .addEventListener('submit', e => sendMessage(e));
