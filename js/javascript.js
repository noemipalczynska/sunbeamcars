// grabbing the data from html
// document.getElementById("date-start").valueAsDate = new Date(); // today's date
const numPersons = document.getElementById("num-persons");
const numSuitcases = document.getElementById("num-suitcases");
const carsContainer = document.getElementById("cars");
const form = document.getElementById("form");
const dateStart = document.getElementById("date-start");
const dateHandIn = document.getElementById("date-end");
let carBox = "";
const error = document.getElementById("error");



// everything before the function just collects data 

// Check if Dates are valid, Date 
function validDates(dateStart, dateHandIn) {
    const arrival = new Date(dateStart);
    const departure = new Date(dateHandIn);
    if (arrival > departure) {
        return false;
    } else {
        return true;
    }
}

// price, just define it here and later needs to be called in the function 
function calcRentalDays(dateStart, dateHandIn) {
    const arrival = new Date(dateStart);
    const departure = new Date(dateHandIn);
    const timediff = departure.getTime() - arrival.getTime();
    const diffindays = timediff / (1000 * 3600 * 24) + 1;
    return diffindays;
}

function calcRentalCost(days, priceperday) {
    const totalprice = priceperday * days;
    return totalprice;
}


// Event handler that is triggered when user clicks on submit button
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Do not reload after submit button is pressed

    carsContainer.innerHTML = ""; // Setting output to nothing "" Removing old search results
    error.innerHTML = ""; // if there is an error, show it to the user

    // could be in the if, const is the condition for data validation, it causes the function, it has to be in the function 
    const datesValid = validDates(dateStart.value, dateHandIn.value);

    if (datesValid) {


        //Filtering cars
        // Iterate through memberlist(objects) and show information
        for (const each of cars) {

            // result of this calculation will be in days
            const days = calcRentalDays(dateStart.value, dateHandIn.value);
            const cost = calcRentalCost(days, each.priceperday);

            // = gives the value a constant; === checks the actual value and equal type
            // Show template content in output div

            // }

            if (each.persons >= numPersons.value && each.suitcases >= numSuitcases.value) {
                carBox = `
                     <section class="container-car" id="container-car-id">
                       <div class="cars">
                         <img src="${each.image}" alt="Car" class="image">
                       </div>

                       <div class="names" id="names">
                         <h2>${each.name} </h2>
                       </div>

                        <div class="content">
                          <p>Comfort: ${each.comfort}</p>
                          <p>Persons: ${each.persons}</p>
                          <p>Suitcases: ${each.suitcases}</p>
                          <p>Comfort: ${each.comfort}</p>
                        </div>

                        <div class="content">
                          <p id="car-price">${cost}kr</p>
                          <br>
                          <a href="accessories.html?carbrand=${each.name} &pickupdate=${dateStart.value}&returndate=${dateHandIn.value}&persons=${each.persons}&comfort=${each.comfort}&cost=${cost}" class="button-car button"> BOOK NOW</a>
                        </div>
                     </section>
                    `;

                // Show template content in output div
                carsContainer.insertAdjacentHTML("beforeend", carBox)
            }
        } // end of iteration
        x
    } else {
        carsContainer.insertAdjacentHTML(
            "beforeend",
            "Start date cannot be later then the hand in date"
        )
    };
}); // end of event handler




