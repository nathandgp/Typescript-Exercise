"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayCityDirectory = exports.addPopulation = exports.addPopulations = exports.addCountry = exports.addCountries = exports.addCity = exports.addCities = void 0;
console.log("Item#1: Please open HTML.\n");
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

/// ITEM 2 
console.log("")
console.log("Item#2: ISBN-10 Validation");
function validateIsbn(input) {
    let n = input.length;
    if (n != 10)
        return false;
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        let digit = input[i] - 0;
        if (digit < 0 || digit > 9)
            return false;
        sum += (digit * (10 - i));
    }
    let last = input[9];
    if (last != 'X' && (last < 0 || last > 9))
        return false;
    sum += ((last == 'X') ? 10 : (last - 0));
    return (sum % 11 == 0);
}
let input = ["1112223339", "1112223X3", "1112223339X", '1234554321', "1234512345", "048665088X", "X123456788"];
for (let i = 0; i <= 6; i++) {
    if (validateIsbn(input[i]))
        console.log(input[i] + " -> True");
    else
        console.log(input[i] + " -> False");
}
/// ITEM 3
 console.log("\nItem#3: Change it up!");
var str = "Cat30"
var str2 = str.toLowerCase;
var checkList = "AabcdEefghIijklmnOopqrstUuvwxy";
var newString = str.replace(/[a-z]/gi, s => checkList[checkList.indexOf(s.toLowerCase()) + 1 ])
console.log("Original String: " + str)
console.log("Altered String: " + newString)


///ITEM 4
console.log("")
console.log("Item#4: Moving zeroes to the end")

var qArray = ["false", 1, 0, 1, 2, 0, 1, 3, "a"];
var newArray = qArray.filter(c =>  c != 0).concat(qArray.filter(k => k == 0));
console.log("Original Array: " + qArray)
console.log("Altered Array: " + newArray)

