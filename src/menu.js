// menu.js

const menutab = () => {
    const contentdiv = document.getElementById("content");
    contentdiv.innerHTML = "";

    const headline = document.createElement('h1');
    headline.textContent = 'Menu';

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Burgers';
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Pizzas';
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Pastas';

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    contentdiv.appendChild(headline);
    contentdiv.appendChild(menuList);
};

export { menutab };
