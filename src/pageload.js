import imagesrc from './image1.png';
import './style.css';


const initialpageload = () => {

    const contentdiv = document.getElementById("content");
    contentdiv.innerHTML = "";


    const image = document.createElement('img');

    image.src = imagesrc;

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant!';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'We serve delicious food with love. Come and dine with us!';

    contentdiv.appendChild(image);
    contentdiv.appendChild(headline);
    contentdiv.appendChild(paragraph);



};

export { initialpageload };