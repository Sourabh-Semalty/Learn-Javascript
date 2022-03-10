'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, mode) => {
  const html = `
      <article class="country ${mode}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(',')}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
          </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
}


const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
}

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


const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok)
      throw new Error(`errorMsg (${res.status})`);
    return res.json();
  });
}

const getCountryData = function (country) {

  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Something went wrong! Country not found... ')
    .then(data => {
      renderCountry(data[0])
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No new neighbour');
      return getJSON("https://restcountries.com/v3.1/alpha/" + neighbour, 'Neighbour Country not exists')
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => renderError(`Something went wrong ${err.message}. Try again`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })
}

getCountryData('india', 'neighbour')

// getCountryData('india')
// getCountryData('russia')
