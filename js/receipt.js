const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);

const FORMOUTPUT = document.getElementById("formoutput");

if (sessionStorage.getItem("name") === null) {
    FORMOUTPUT.innerHTML = "<p>Form was not used.</p>"
} else {
    FORMOUTPUT.innerHTML = "<p>Name: " + sessionStorage.getItem('name') + " <br>Email: " + sessionStorage.getItem('email') + " <br>Phone: " + sessionStorage.getItem('phone') + " <br>Address: " + sessionStorage.getItem('address') + " <br>Postal Code: " + sessionStorage.getItem('postal code') + " <br>City: " + sessionStorage.getItem('city') + "</p>";
}

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


