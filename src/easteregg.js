let scroll_buttons = document.querySelectorAll(".nav-links button");
scroll_buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.dataset.lieu);
        let elem = document.getElementById(button.dataset.lieu);
        elem.scrollIntoView({ behavior: "smooth", block: 'center' });
    });
});

//easter egg
let keys = "";
let code = "abdabdabd";
document.addEventListener("keydown", (e) => {
    let key = e.key;
    keys += key;
    if (keys == code) {
        let img = document.createElement("img");
        img.src = `/img/${keys.repeat(3)}.webp`;
        document.body.appendChild(img);
        img.style = `position:fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        `;
        img.addEventListener("click", () => {
            document.body.removeChild(img);
        });
    }
    setTimeout(() => {
        keys = keys.replace(key, "");
    }, 1000);
});