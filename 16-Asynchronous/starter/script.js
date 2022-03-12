'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = (data, mode) => {
//   const html = `
//       <article class="country ${mode}">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(',')}</p>
//             <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//           </div>
//         </article>
//         `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// }


// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// }



///////////////////////////////////////
// const getCountryData = function (country) {

//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://restcountries.com/v3.1/name/' + country);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText)
//         console.log(Object.values(data.currencies))
//         const html = `
//       <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(',')}</p>
//             <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//           </div>
//         </article>
//         `;

//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     })
// }

// getCountryData('india')
// getCountryData('russia')


// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(res => {
//     if (!res.ok)
//       throw new Error(`errorMsg (${res.status})`);
//     return res.json();
//   });
// }

// const getCountryData = function (country) {

//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Something went wrong! Country not found... ')
//     .then(data => {
//       renderCountry(data[0])
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No new neighbour');
//       return getJSON("https://restcountries.com/v3.1/alpha/" + neighbour, 'Neighbour Country not exists')
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => renderError(`Something went wrong ${err.message}. Try again`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
// }

// getCountryData('india', 'neighbour')

// getCountryData('india')
// getCountryData('russia')

// Coding Challenge #1

/*
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
*/
// const getPosition = () => {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   })
// }
// const whereAmI = (lat, lng) => {
//   getPosition().then(pos => {
//     const { latitude: lat, longitude: lng } = pos.coords
//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   })
//     .then(res => {
//       if (!res.ok) throw new Error(`Something Went Wrong (${res.status})`)
//       return res.json();
//     }).then(data => {
//       if (!data.country) throw new Error("Country not found");

//       console.log(`You are in ${data.state}, $
//     {data.country}`)

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//     }).then(res => {
//       if (!res.ok) throw new Error(`Something Went Wrong (${res.status})`)
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.log(err))
// }
// document.querySelector('.btn-country').addEventListener('click', function () {
//   whereAmI(52.508, 13.381)
// })


// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // promisifying
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  })
}

// wait(1).then(() => {
//   console.log('I have waited for 1 second');
//   return wait(2);
// }).then(() => {
//   console.log('I have waited for 2 second');
//   return wait(3);
// }).then(() => {
//   console.log('I have waited for 3 second');
//   return wait(4);
// }).then(() => {
//   console.log('I have waited for 4 second');
// })


///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
const images = document.querySelector('.images');
const createImage = imgPath => {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.setAttribute('src', imgPath);

    img.addEventListener('load', function () {
      images.appendChild(img);
      resolve(img)
    })

    img.addEventListener('error', function () {
      reject(new Error('Image not found'))
    })
  })
}
let currentImg;

createImage("https://images.pexels.com/photos/11319741/pexels-photo-11319741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
  .then(img => {
    currentImg = img;
    console.log('image 1 has loaded')
    return wait(1);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage("./img/img-2.jpg");
  })
  .then(img => {
    currentImg = img;
    console.log('image 2 has loaded')
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err))