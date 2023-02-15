console.log("Hey there!");

let terrainSelection = document.getElementById("terrain-type");
console.log(terrainSelection);
let button = document.getElementById("generate")
let result = document.getElementById("result")

button.addEventListener("click", () => {
    result.innerText = Math.random()
})