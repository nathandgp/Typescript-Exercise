export const testFunction = () => {
    console.log("Hello to Typescript")
}

var parent:any;
parent = "myString"
parent = 500;

var nameArray:string[]=[];
var otherArray = new Array(10);

nameArray.push("myName");
otherArray.push("newName")

export enum Days{
    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
}

interface Plane{
    name:string
    model:string
    fly?:(destination:string)=> string
}

function addPlane2(data:Plane){
}

var planeList: Plane[] = [];
export const addPlane = (data:Plane)=>{
    planeList.push(data)
}

var myWheels:string[]=[]; 
export const addWheels = (...wheelsArray:string[]) => {
    wheelsArray.forEach((item) => {
        console.log(item)
    })
}

export const addWheel = (wheel:string) => {
   myWheels.push(wheel);
   displayWheels();
}

export const displayWheels = () => {
    let list = document.getElementById("wheelList");
    if(list){
        while(list.hasChildNodes() && list.firstChild){
            list.removeChild(list.firstChild)
        }
    }
    myWheels.forEach((item) => {    
        if(list){
            let li = document.createElement("li");
            li.innerText = item
            list.appendChild(li);
        }

    })
}
//addWheels("small wheel", "medium wheel", "large wheel");

export const loopPlane = () => {
    //forEach
    planeList.forEach((item) => {
        console.log("forEach")
        console.log(item)
    })

    //map
    planeList.map((item) => {
    console.log("map")
    console.log(item)
    })


    //for loop
    for(let i=0; i< planeList.length; i++) {
        console.log("forLoop")
        console.log(planeList[i])
    }

    //while loop
    // let i =0;
    // while(i<planeList.length){
    //     console.log("whileLoop")
    //     console.log(planeList[i])
    //     i++
    // }

    //enhanced for loop
    for(let plane of planeList){
        console.log("enhanced for loop")
        console.log(plane)
    }    

    //with index enhanced
    for(let ind in planeList){
        console.log("enhancedWithIndex")
        console.log(planeList[ind])
    }
}

export const checkCondition = () => {
    var condition:boolean = true;
    var s:string = "first"
    if(condition) {

    } else if(!condition) {

    } else {

    }

    switch(s) {
        case "first": 
        break;
        case "second":
            break;
        default: 
    }
}


var tuple = ["myName", 1];
var tuple2:(string | number) []= ["first", 1, 2];

var plane1: Plane={
    name:"JetLee",
    model: "Fighterjet"
}

var plane2: Plane={
    name:"JetLee",
    model: "Fighterjet"
}

addPlane(plane1);
addPlane(plane2);

loopPlane();

testFunction();