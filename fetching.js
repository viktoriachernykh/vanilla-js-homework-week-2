const dataLukeSkywalker = document.getElementById('dataLukeSkywalker')
const darthVaderButton = document.getElementById('darthVaderButton')
darthVaderButton.onclick = getDarth

function getLuke() {
fetch("https://swapi.co/api/people/1")
  .then(response => response.json())
  .then(parsedResponse => {
    dataLukeSkywalker.innerHTML +=
      "<pre>" + JSON.stringify(parsedResponse, null, " ") + "</pre>"
  })
}

getLuke()

function getDarth() {
  fetch("https://swapi.co/api/people/4/")
    .then(response => response.json())
    .then(parsedResponse => {
      dataLukeSkywalker.innerHTML =
        "<pre>" + JSON.stringify(parsedResponse, null, " ") + "</pre>"
    })}
  

