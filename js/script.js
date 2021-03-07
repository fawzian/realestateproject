const $address = $('.address');
const $beds = $('.beds');
const $bath = $('.bath');
const $sqft = $('.sqft');
const $price =$('.price');
const $realtor = $('.realtor');
const $cityInput = $('#city');
const $stateInput = $('#state');




let rentalData, userCityInput, userStateInput;



$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
   userCityInput = $cityInput.val();
   userStateInput = $stateInput.val();
    $.ajax({
        url: `https://realtor-com-real-estate.p.rapidapi.com/for-rent?city=${userCityInput}&state_code=${userStateInput}&limit=42&offset=0&rapidapi-key=94e3687fe5msh3d0f0a5d355c045p12da55jsne0d4f52c3faf`
      }).then(
        (data) => {
         rentalData = data;
         execute(rentalData.data.results);
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}



function execute(recieved) {
    for(let i = 0; i < recieved.length; i++) {
    $address.text(recieved[i].location.address.line + " " + recieved[i].location.address.city + ", " + recieved[i].location.address.postal_code);
    $beds.text(recieved[i].description.beds_max);
    $bath.text(recieved[i].description.baths_max);
    $sqft.text(recieved[i].description.sqft_max);
    $price.text(recieved[i].list_price_max);
    $realtor.attr("href", recieved[i].href);
    };
}








// function execute() {
//     $address.text(rentalData.data.results[0].location.address.line + " " + rentalData.data.results[0].location.address.city + ", " + rentalData.data.results[0].location.address.postal_code );
//     $beds.text(rentalData.data.results[0].description.beds_max);
//     $bath.text(rentalData.data.results[0].description.baths_max);
//     $sqft.text(rentalData.data.results[0].description.sqft_max);
//     $price.text(rentalData.data.results[0].list_price_max);
//     $realtor.text(rentalData.data.results[0].href);
//  }




// const promise = $.ajax({
//     url: `https://realtor-com-real-estate.p.rapidapi.com/for-rent?city=Boston&state_code=MA&limit=42&offset=0&rapidapi-key=94e3687fe5msh3d0f0a5d355c045p12da55jsne0d4f52c3faf`
// });

// promise.then(
//     (data) => {
//         console.log(data);
//         render(data.data.results);
//     },
//     (error) => {
//         console.log('bad request: ', error)
//     }
// );


// function render(response) {
//     for(let i = 0; i < response.length; i++){
//         console.log(response[i])
//     };
// }



// function execute(response) {
//     for(let i = 0; i < response.length; i++){
//         console.log(response[i].list_price_min)
//     };
// }



// when adding apikey there can only be one question mark early in the URL --- any others replace with &

// https://realtor-com-real-estate.p.rapidapi.com/for-rent?city=Boston&state_code=MA&limit=42&offset=0&rapidapi-key=94e3687fe5msh3d0f0a5d355c045p12da55jsne0d4f52c3faf



