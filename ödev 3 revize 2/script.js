fetch("https://fakestoreapi.com/products")
    .then(sonuc => sonuc.json())
    .then(veri => { fonk (veri)});
    function fonk(params) {
        var x = document.getElementById("kart");
        params.forEach((item) => {
            const kart = document.createElement("div");
            kart.classList.add("kart2");
            kart.innerHTML += `
                <img class="resim" src="${item.image}" alt="${item.title}" >
                <h5>${item.title}</h5>
                <p>$${item.price}</p>
                <button>sepete ekle</button>`; 
            x.appendChild(kart);
            kart.addEventListener("click", () => {
                modalac(item);
            });
        });
    };
function modalac(item) {
    document.getElementById("h2").textContent = item.title;
    document.getElementById("p").textContent = item.description;
    document.getElementById("res").src = item.image;
    document.getElementById("mod").style.display = "flex";
    document.getElementById("kap").onclick = kapatma;
};
function kapatma() {
    document.getElementById("mod").style.display = "none";
};