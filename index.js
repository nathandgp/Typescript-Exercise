"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayCityDirectory = exports.addPopulation = exports.addPopulations = exports.addCountry = exports.addCountries = exports.addCity = exports.addCities = void 0;
// ITEM 1: CITY DIRECTORY
var cityName = [];
const addCities = (...citiesArray) => {
    citiesArray.forEach((item) => {
        console.log(item);
    });
};
exports.addCities = addCities;
const addCity = (city) => {
    cityName.push(city);
    (0, exports.displayCityDirectory)();
};
exports.addCity = addCity;
var countryName = [];
const addCountries = (...countriesArray) => {
    countriesArray.forEach((item) => {
        console.log(item);
    });
};
exports.addCountries = addCountries;
const addCountry = (country) => {
    countryName.push(country);
    (0, exports.displayCityDirectory)();
};
exports.addCountry = addCountry;
var populationCount = [];
const addPopulations = (...populationsArray) => {
    populationsArray.forEach((item) => {
        console.log(item);
    });
};
exports.addPopulations = addPopulations;
const addPopulation = (population) => {
    populationCount.push(population);
    (0, exports.displayCityDirectory)();
};
exports.addPopulation = addPopulation;
//export const addDirectory = ()
const displayCityDirectory = () => {
    let list = document.getElementById("cityList");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    cityName.forEach((item) => {
        if (list) {
            let cit = document.createElement("cit");
            cit.innerText = item;
            list.append(cit);
        }
    });
};
exports.displayCityDirectory = displayCityDirectory;
//// ITEM 1 - endScript
/// ITEM 2
var IsbnValidator = function (input) {
    input = input.replace(/[^0-9X]/gi, '');
};
