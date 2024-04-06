// about.js

const abouttab = () => {
    const contentdiv = document.getElementById("content");
    contentdiv.innerHTML = "";

    const headline = document.createElement('h1');
    headline.textContent = 'About Our Restaurant';

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Our restaurant has been serving customers for over a decade.';

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'We believe in using fresh ingredients and providing top-notch service to our customers.';

    contentdiv.appendChild(headline);
    contentdiv.appendChild(paragraph1);
    contentdiv.appendChild(paragraph2);
};

export { abouttab };
