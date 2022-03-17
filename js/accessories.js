// CHOSEN

const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);

const FORMOUTPUT = document.getElementById("chosen");
FORMOUTPUT.innerHTML = URLDATA.get("carbrand") + "<br>" + "Pickupdate: " + URLDATA.get("pickupdate") + "<br>" + "Return Date: " + URLDATA.get("returndate") + "<br>" + "Persons: " + URLDATA.get("persons") + "<br>" + "Comfort: " + URLDATA.get("comfort") + "<br>" + "Prize: " + URLDATA.get("cost") + "dkk";

// Accessories

let total = parseFloat(URLDATA.get("cost")); // Global variable, total starts at zero
showTotal(); // Calls function showTotal to show current total

// Event handler - check if checkbox is selected or not and 
// adjust the total value accordingly
function calculateTotal(checkbox, itemprice) {
    if (checkbox.checked === true) { // If the checkbox is seleted then ...
        total = Math.abs(total + parseFloat(itemprice));
    } else { // if it is not selected then ...
        total = Math.abs(total - parseFloat(itemprice));
    }
    showTotal();
}

// Shows total value on screen
function showTotal() {
    const output = document.getElementById("totaloutput")
    console.log(total);
    output.innerText = `Total ${total.toLocaleString("da-DK", { style: "currency", currency: "DKK" })}`;
}

const form = document.getElementById("form-2");
form.reset(); // Resets form every time page loads

const checkboxes = document.getElementsByClassName("slist"); //Build an object list with checkboxes
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let shoppinglist = []; // Define shopping list
    let goodcost = 0;
    for (const checkbox of checkboxes) {
        if (checkbox.checked === true) { // If the item is selected ...
            shoppinglist.push(checkbox.dataset.item); // add it to the shopping list.
            goodcost = goodcost + parseFloat(checkbox.value);
        }
    }

    // Stores information in sessionstorage
    sessionStorage.setItem("goods", JSON.stringify(shoppinglist));

    sessionStorage.setItem("goods-price", goodcost);

    sessionStorage.setItem("total", total.toLocaleString("da-DK", { style: "currency", currency: "DKK" }));

    sessionStorage.setItem("carbrand", URLDATA.get("carbrand"));
    sessionStorage.setItem("pickupdate", URLDATA.get("pickupdate"));
    sessionStorage.setItem("returndate", URLDATA.get("returndate"));
    sessionStorage.setItem("personas", URLDATA.get("persons"));
    sessionStorage.setItem("comfort", URLDATA.get("comfort"));
    sessionStorage.setItem("cost", URLDATA.get("cost"));

    location.href = "/html/customer.html"; // Redirect user to page2.html
})