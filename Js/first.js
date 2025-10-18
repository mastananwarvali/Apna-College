const btn = document.querySelector("button");

btn.addEventListener('click', () => {
   let proto = Object.getPrototypeOf(btn);

    while (proto) {
        console.log(proto);
        proto = Object.getPrototypeOf(proto);
    }

});
