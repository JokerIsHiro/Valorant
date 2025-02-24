const mapsAPI = "https://valorant-api.com/v1/maps";

const divMaps = document.querySelector("#maps");

async function getMaps() {
    const response = await fetch(mapsAPI);
    const maps = await response.json();

    maps.data.forEach(map => addImage(map.splash));
}

getMaps();

const addImage = (src, click) => {
    const itemImg = document.createElement("img");
    itemImg.src = src;
    itemImg.width = 150;
    itemImg.classList = 'transition duration-300 ease-in-out hover:scale-110';
    itemImg.onclick = click;
    divMaps.appendChild(itemImg);
}