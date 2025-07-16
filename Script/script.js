// CREATING A CLASS FOR SMOOTHIE ORDERING SYSTEM
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

  //CALCULATING THE PRICE OF THE SMOOTHIE
  calculatePrice() {
    //INITIAL PRICE = 0
    let price = 0;

    // BASE PRICE DEPENDING ON SIZE
    if (this.size === "Small") price += 3.00;
    else if (this.size === "Medium") price += 4.50;
    else if (this.size === "Large") price += 6.00;

    // ADDING BASE LIQUID PRICE
    price += 1.00;

    // ADDING FRUITS AND ADDONS PRICE
    price += this.fruits.length * 0.75;
    price += this.addons.length * 1.25;

    // ADDING SWEETENER PRICE IF SELECTED
    if (this.sweetener !== "None") {
      price += 0.50;
    }

    // RETURNING PRICE FORMATTED TO TWO DECIMAL PLACES
    return price.toFixed(2); 
  }

    // GENERATING A DESCRIPTION OF THE SMOOTHIE ORDER
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

// EVENT LISTENER FOR FORM SUBMISSION
// WHEN THE FORM IS SUBMITTED, IT PREVENTS THE DEFAULT ACTION, COLLECTS THE FORM DATA
document.getElementById("smoothieForm").addEventListener("submit", function(event) {
  event.preventDefault();
    // COLLECTING FORM DATA
  const name = document.getElementById("name").value;
  const size = document.getElementById("size").value;
  const base = document.getElementById("base").value;
  const sweetener = document.getElementById("sweetener").value;
  const temperature = document.getElementById("temp").value;
  const notes = document.getElementById("notes").value;

    // COLLECTING CHECKED FRUITS AND ADDONS
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
  
    // CREATING A NEW SMOOTHIE INSTANCE AND DISPLAYING THE DESCRIPTION
  const smoothie = new Smoothie(name, size, base, fruits, addons, sweetener, temperature, notes);
  document.getElementById("smoothieOutput").innerHTML = smoothie.getDescription();
  
    // SHOWING THE SMOOTHIE IMAGE
  const smoothiePic = document.getElementById("smoothiePic");
  smoothiePic.classList.add("show");
});




