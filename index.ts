import { isTemplateExpression } from "typescript";

console.log("Item#1: Please open HTML.\n")
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
console.log("")

/// ITEM 2 
console.log("Item#2: ISBN-10 Validation")

function validateIsbn(input: string | any[])
{   
    let n = input.length;
    if (n != 10)
        return false;
    let sum = 0;
    for (let i = 0; i < 9; i++)
    {
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
 
let input = ["1112223339", "1112223X3", "1112223339X", '1234554321', "1234512345", "048665088X", "X123456788" ];
for(let i = 0; i <= 6; i++){
    if (validateIsbn(input[i]))
    console.log(input[i] + " -> True");
    else
    console.log( input[i] + " -> False");
    
}

/// ITEM 3
console.log("\nItem#3: Change it up!");
var str = "Cat30"
var checkList = "AabcdEefghIijklmnOopqrstUuvwxy";
//convert to next letter
var newString = str.replace(/[a-z]/gi, s => checkList[checkList.indexOf(str.toLowerCase()) + 1])
//convert case to lowercase or uppercase
console.log("Original String: " + str)
console.log("1st Altered String: " + newString)

///ITEM 4
console.log("")
console.log("Item#4: Moving zeroes to the end")

var qArray = ["false", 1, 0, 1, 2, 0, 1, 3, "a"];
var newArray = qArray.filter(c =>  c != 0).concat(qArray.filter(k => k == 0));
console.log("Original Array: " + qArray)
console.log("Altered Array: " + newArray)
