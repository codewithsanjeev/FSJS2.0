let dataSet = ["Edureka", "TutorialPoints", "W3Schools", "MDN", "PW Skills", "JS Info", "Geeks for Geeks", "PW Skills"];

let findOut = dataSet.lastIndexOf("PW Skills");

for (const dataInDataset of dataSet) {
    console.log(dataInDataset);
    console.log(dataInDataset.lastIndexOf("PW Skills"));
}

// console.log(findOut);