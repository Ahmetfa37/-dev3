fetch("https://fakestoreapi.com/products")
    .then(sonuc => sonuc.json())
    .then(veri => { fonk (veri)});
    function fonk(params) {
        var x = document.getElementById("kart");
        params.forEach((item) => {
            x.innerHTML += 
            `<div  class="kart2">
                <img class="resim" src="${item.image} alt="${item.title}" >
                <h5>${item.title}</h5>
                <p>$${item.price}</p>
                <button>sepete ekle</button>
            </div>` ; 
            x.addEventListener("click", () => {
                modalac(item);
            })
        });   
    }
function modalac(item) {
    document.getElementById("h2").textContent = item.title;
    document.getElementById("p").textContent = item.description;
    document.getElementById("resim2").src = item.image;
    document.getElementById("mod").style.display = "flex";
}