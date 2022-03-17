// const cars = [
//     {
//         name: "Suzuki Swift",
//         category: "off-road",
//         persons: 7,
//         suitcases: 3,
//         comfort: "medium",
//         image: "/img/car_list_02.png",
//         priceperday: 300
//     },
//     {
//         name: "Mazda 3",
//         category: "family car",
//         persons: 3,
//         suitcases: 4,
//         comfort: "low",
//         image: "/img/car_list_02.png",
//         priceperday: 350
//     },
//     {
//         name: "Citroen",
//         category: "single car",
//         persons: 1,
//         suitcases: 4,
//         comfort: "high",
//         image: "/img/car_list_02.png",
//         priceperday: 350
//     },
// ]

let cars = []; // Global variabel, kendt af alle
fetch("https://noemipalczynska.github.io/jsonapi/api.json")
    .then(function (data) { //wait for the server to respond (promise)
        return data.json();
    })
    .then(function (post) { //If the server responds in a positive way...
        //"Post" is all JSON data
        //If true, price calculation must take place here
        cars = post.billlist; // Global variable sat til JSON indhold
    })

