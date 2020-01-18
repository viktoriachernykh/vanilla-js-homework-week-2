function groupAdultsByAgeRange(arrayOfObjects) {
const result = arrayOfObjects.reduce((categories, currentPerson) => {
  if (currentPerson.age >= 18 && currentPerson.age <= 20){
    if (categories['20 and younger'] === undefined) {
      categories['20 and younger'] = [currentPerson]
    } else {
      categories['20 and younger'].push(currentPerson)
    }
  }
  if (currentPerson.age >= 21 && currentPerson.age <= 30){
    if (categories['21-30'] === undefined) {
      categories['21-30'] = [currentPerson]
    } else {
      categories['21-30'].push(currentPerson)
    }
  }
  if (currentPerson.age >= 31 && currentPerson.age <= 40){
    if (categories['31-40'] === undefined) {
    categories['31-40'] = [currentPerson]
    } else {
    categories['31-40'].push(currentPerson)
    }
  }
  if (currentPerson.age  >= 41 && currentPerson.age <= 50){
    if (categories['41-50'] === undefined) {
      categories['41-50'] = [currentPerson]
    } else {
      categories['41-50'].push(currentPerson)
    }
  }
  if (currentPerson.age  >= 51){
    if (categories['51 and older'] === undefined) {
      categories['51 and older'] = [currentPerson]
    } else {
      categories['51 and older'].push(currentPerson)
    }
  }
  return categories
}, {})
return result
// console.log('result', result)
}

// should be active for running with node and checking with console.log
// groupAdultsByAgeRange([
//   { name: "pete", age: 10 },
//   { name: "dove", age: 17 },
//   { name: "dave", age: 18 },
//   { name: "hall", age: 19 },
//   { name: "donn", age: 20 },
//   { name: "trey", age: 21 },
//   { name: "hann", age: 29 },
//   { name: "chew", age: 30 },
//   { name: "cloe", age: 31 },
//   { name: "dart", age: 39 },
//   { name: "this", age: 40 },
//   { name: "dame", age: 41 },
//   { name: "henk", age: 49 },
//   { name: "anna", age: 50 },
//   { name: "olga", age: 51 },
//   { name: "bert", age: 52 },
//   { name: "oldd", age: 120 },
//   { name: 'd', age: 0 },
// ])

module.exports = {
  groupAdultsByAgeRange
}
