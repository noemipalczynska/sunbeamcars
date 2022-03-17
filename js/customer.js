const FORM = document.getElementById("form-customer");

FORM.addEventListener("submit", function (e) {
    e.preventDefault();
    const NAME = document.getElementById("name").value;
    const EMAIL = document.getElementById("email").value;
    const PHONE = document.getElementById("phone").value;
    const ADDRESS = document.getElementById("address").value;
    const POSTAL_CODE = document.getElementById("postal code").value;
    const CITY = document.getElementById("city").value;

    sessionStorage.setItem("name", NAME);
    sessionStorage.setItem("email", EMAIL);
    sessionStorage.setItem("phone", PHONE);
    sessionStorage.setItem("address", ADDRESS);
    sessionStorage.setItem("postal code", POSTAL_CODE);
    sessionStorage.setItem("city", CITY);
    document.location.href = "receipt.html";
})


// Grabbing information form accessories

const carbrand = sessionStorage.getItem("carbrand");
const pickupdate = sessionStorage.getItem("pickupdate");
const returndate = sessionStorage.getItem("returndate");
const personas = sessionStorage.getItem("personas");
const comfort = sessionStorage.getItem("comfort");
const cost = sessionStorage.getItem("cost");
const goodsprice = sessionStorage.getItem("goods-price");
const accessories = JSON.parse(sessionStorage.getItem("goods"));

let template = `
    <p><strong>${carbrand}</strong></p>
    <br>
    <p><strong>Pickupdate:</strong> ${pickupdate}</p>
    <p><strong>Return Date:</strong> ${returndate}</p>
   
    <p><strong>Persons: </strong>${personas}</p>
    <p><strong>Comfort: </strong>${comfort}</p>
   
    <p><strong>Rental Cost: </strong>${cost} DKK incl. VAT</p>
    
    <p><strong>Total Accessories: </strong>${goodsprice} DKK</p>
    <br>
    <p><strong>Accessories:</strong></p>
    `
for (const Item of accessories) {
    template += `<br> <span class="accessories"> ${Item} </span>`;
}
//+=  defined sth previously and want to add sth to the defined element
//span --> if I want to style stuff in js --> html tag --> is like div, but doesnt make a break 
//Item is a variable of the list itself 
const output = document.getElementById("output");
output.insertAdjacentHTML("beforeend", template);

