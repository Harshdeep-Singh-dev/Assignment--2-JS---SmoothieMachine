class Smoothie {
  constructor(name, size, base, fruits, addons, sweetener, temperature, notes) {
    this.name = name;
    this.size = size;
    this.base = base;
    this.fruits = fruits;
    this.addons = addons;
    this.sweetener = sweetener;
    this.temperature = temperature;
    this.notes = notes;
  }

  
  calculatePrice() {
    let price = 0;

    if (this.size === "Small") price += 3.00;
    else if (this.size === "Medium") price += 4.50;
    else if (this.size === "Large") price += 6.00;

    price += 1.00;

    price += this.fruits.length * 0.75;

    price += this.addons.length * 1.25;

    if (this.sweetener !== "None") {
      price += 0.50;
    }

    return price.toFixed(2); 
  }

    getDescription() {
    return `
      <h2>Hi ${this.name}, here's your smoothie!</h2>
      <p><strong>Size:</strong> ${this.size}</p>
      <p><strong>Base Liquid:</strong> ${this.base}</p>
      <p><strong>Fruits:</strong> ${this.fruits.length ? this.fruits.join(", ") : "None"}</p>
      <p><strong>Add-ons:</strong> ${this.addons.length ? this.addons.join(", ") : "None"}</p>
      <p><strong>Sweetener:</strong> ${this.sweetener}</p>
      <p><strong>Temperature:</strong> ${this.temperature}</p>
      <p><strong>Special Instructions:</strong> ${this.notes || "None"}</p>
      <hr>
      <p><strong>Total Price:</strong> $${this.calculatePrice()} CAD</p>
    `;
  }

}

document.getElementById("smoothieForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const size = document.getElementById("size").value;
  const base = document.getElementById("base").value;
  const sweetener = document.getElementById("sweetener").value;
  const temperature = document.getElementById("temp").value;
  const notes = document.getElementById("notes").value;

  let fruits = [];
  let fruitElems = document.getElementsByName("ingredients");
  for (let i = 0; i < fruitElems.length; i++) {
    if (fruitElems[i].checked) {
      fruits.push(fruitElems[i].value);
    }
  }

  let addons = [];
  let addonElems = document.getElementsByName("addons");
  for (let i = 0; i < addonElems.length; i++) {
    if (addonElems[i].checked) {
      addons.push(addonElems[i].value);
    }
  }

  const smoothie = new Smoothie(name, size, base, fruits, addons, sweetener, temperature, notes);
  document.getElementById("smoothieOutput").innerHTML = smoothie.getDescription();
  
  const smoothiePic = document.getElementById("smoothiePic");
  smoothiePic.classList.add("show");
});




