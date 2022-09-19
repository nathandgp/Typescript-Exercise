"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCondition = exports.loopPlane = exports.addWheels2 = exports.addWheels = exports.addPlane = exports.Days = exports.testFunction = void 0;
const testFunction = () => {
    console.log("Hello to Typescript");
};
exports.testFunction = testFunction;
var parent;
parent = "myString";
parent = 500;
var nameArray = [];
var otherArray = new Array(10);
nameArray.push("myName");
otherArray.push("newName");
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days = exports.Days || (exports.Days = {}));
function addPlane2(data) {
}
var planeList = [];
const addPlane = (data) => {
    planeList.push(data);
};
exports.addPlane = addPlane;
const addWheels = (...wheelsArray) => {
    wheelsArray.forEach((item) => {
        console.log(item);
    });
};
exports.addWheels = addWheels;
const addWheels2 = (...wheelsArray) => {
    wheelsArray.forEach((item) => {
        console.log(item);
    });
};
exports.addWheels2 = addWheels2;
(0, exports.addWheels)("small wheel", "medium wheel", "large wheel");
const loopPlane = () => {
    //forEach
    planeList.forEach((item) => {
        console.log("forEach");
        console.log(item);
    });
    //map
    planeList.map((item) => {
        console.log("map");
        console.log(item);
    });
    //for loop
    for (let i = 0; i < planeList.length; i++) {
        console.log("forLoop");
        console.log(planeList[i]);
    }
    //while loop
    // let i =0;
    // while(i<planeList.length){
    //     console.log("whileLoop")
    //     console.log(planeList[i])
    //     i++
    // }
    //enhanced for loop
    for (let plane of planeList) {
        console.log("enhanced for loop");
        console.log(plane);
    }
    //with index enhanced
    for (let ind in planeList) {
        console.log("enhancedWithIndex");
        console.log(planeList[ind]);
    }
};
exports.loopPlane = loopPlane;
const checkCondition = () => {
    var condition = true;
    var s = "first";
    if (condition) {
    }
    else if (!condition) {
    }
    else {
    }
    switch (s) {
        case "first":
            break;
        case "second":
            break;
        default:
    }
};
exports.checkCondition = checkCondition;
var tuple = ["myName", 1];
var tuple2 = ["first", 1, 2];
var plane1 = {
    name: "JetLee",
    model: "Fighterjet"
};
var plane2 = {
    name: "JetLee",
    model: "Fighterjet"
};
(0, exports.addPlane)(plane1);
(0, exports.addPlane)(plane2);
(0, exports.loopPlane)();
(0, exports.testFunction)();
