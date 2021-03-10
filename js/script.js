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
        console.log(data.data);
        rentalData = data.data.results;
        execute();
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}




function execute() {
    console.log("running execute")
    for(let i = 0; i < rentalData.length; i++) {  
        console.log(rentalData[i]) 
        $address.eq(i).text(rentalData[i].location.address.line + " " + rentalData[i].location.address.city + ", " + rentalData[i].location.address.postal_code);
        $beds.eq(i).text(rentalData[i].description.beds_max);
        $bath.eq(i).text(rentalData[i].description.baths_max);
        $sqft.eq(i).text(rentalData[i].description.sqft_max);
        $price.eq(i).text(rentalData[i].list_price_max);
        $realtor.eq(i).attr("href", rentalData[i].href);
        console.log(rentalData);
    };
}


// $('.address').html(response[i].location.address.line);









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


// function render1(response) {
//     for(let i = 0; i < response.length; i++){
//         console.log(response[i])
//     };
// }



// function executetest(response) {
//     for(let i = 0; i < response.length; i++){
//         console.log(response[i].list_price_min)
//     };
// }



// when adding apikey there can only be one question mark early in the URL --- any others replace with &

// https://realtor-com-real-estate.p.rapidapi.com/for-rent?city=Boston&state_code=MA&limit=42&offset=0&rapidapi-key=94e3687fe5msh3d0f0a5d355c045p12da55jsne0d4f52c3faf



