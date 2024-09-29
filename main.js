console.log("script loaded")
//student grades analysis
//1
const grades = [70,76,85,64,90,75,98,96]
//2
console.log(`there are ${grades.length} grades in the class`)
//3
function gradeCategory (grade) {
    if (grade >= 90) {
        return "A"
    }
    else if (grade >= 80) {
        return "B"
    }
    else if (grade >= 70) {
        return "C"
    }
    else if (grade >= 60) {
        return "D"
    }
    else {
        return "F"
    }
}

console.log("Grades:")

for (let grade of grades) {
    console.log(grade, gradeCategory(grade))
}
//4

let avgGrade = 0
for (let grade of grades) {
    avgGrade = avgGrade + grade
}
avgGrade = avgGrade / grades.length

if (avgGrade >= 90) {
    console.log("overall class performance was excellent")
}
else if (avgGrade >= 80) {
    console.log("overall class performance was good")
}
else if (avgGrade >= 70) {
    console.log("overall class performance was satisfactory")
}
else {
    console.log("overall class performance needs improvement")
}

//5
//highest grade

let highestGrade = 0
for (let grade of grades) {
    if (grade > highestGrade) {
        highestGrade = grade
    }
}

console.log(`highest grade: ${highestGrade} ${gradeCategory(highestGrade)}`)

//lowest grade

let lowestGrade = 100
for (let grade of grades) {
    if (grade < lowestGrade) {
        lowestGrade = grade
    }
}

console.log(`lowest grade: ${lowestGrade} ${gradeCategory(lowestGrade)}`)

//average grade

console.log(`average grade: ${avgGrade}`)


//Treasure Hunter

let island = ['-','-','T','-','-']
let treasureCount = 0
let treasureSlot = 0
for (let moves in island) {
    if (island[moves] === "T") {
        treasureSlot = (Number(moves) + 1)
        console.log(`Treasure found at move ${treasureSlot} :)`)
        treasureCount++
    }
    else {
        console.log("No treasure found :(")
    }
}

console.log(`There were ${treasureCount} treasures on the island`)


//Startup name generator
//metode virker kun med max 10 navne i hvert array.

const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

const getRandomNumber = () => Math.trunc(10 * Math.random())
let randomNumber = getRandomNumber()

const getStartupName = () => console.log(`Your startup name could be: ${firstWords[getRandomNumber()]} ${secondWords[getRandomNumber()]}`)

getStartupName()
