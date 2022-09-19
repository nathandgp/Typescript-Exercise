import { isTemplateExpression } from "typescript";

// ITEM 1: CITY DIRECTORY

var cityName: string[]=[];
export const addCities = (...citiesArray:string[]) => {
    citiesArray.forEach((item) => {
        console.log(item)
    })
}

export const addCity = (city:string) => {
    cityName.push(city);
    displayCityDirectory();
}

var countryName: string[]=[];
export const addCountries = (...countriesArray:string[]) => {
    countriesArray.forEach((item) => {
        console.log(item)
    })
}

export const addCountry = (country:string) => {
    countryName.push(country);
    displayCityDirectory();
}

var populationCount: number[]=[];
export const addPopulations = (...populationsArray:number[]) => {
    populationsArray.forEach((item) => {
        console.log(item)
    })
}

export const addPopulation = (population:number) => {
    populationCount.push(population);
    displayCityDirectory();
}

//export const addDirectory = ()

export const displayCityDirectory = () => {
    let list = document.getElementById("cityList");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    cityName.forEach((item) => {
        if(list){
            let cit = document.createElement("cit");
            cit.innerText = item
            list.append(cit);
        }
    })
}

//// ITEM 1 - endScript


/// ITEM 2

  
var IsbnValidator = function(input) {
    input = input.replace(/[^0-9X]/gi, '');
}