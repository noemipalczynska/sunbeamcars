const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);

const FORMOUTPUT = document.getElementById("chosen");
FORMOUTPUT.innerHTML = URLDATA.get("carbrand") + "<br>" + "Pickupdate: " + URLDATA.get("pickupdate") + "<br>" + "Return Date: " + URLDATA.get("returndate") + "<br>" + "Persons: " + URLDATA.get("persons") + "<br>" + "Comfort: " + URLDATA.get("comfort") + "<br>" + "Prize: " + URLDATA.get("cost") + "dkk";
