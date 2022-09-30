async function startData() {
    let response = await fetch("json/names.json")
    let names = await response.json()

    console.log(names)

    loadTableAllYears(names)

}

function loadTableAllYears(names) {
    let app = document.getElementById("app")
    let table = document.createElement("table")

    let row = document.createElement("tr")

    let col_rankingBr = document.createElement("th")
    let col_name = document.createElement("th")
    let col_freqBr = document.createElement("th")
    let col_rankingTo = document.createElement("th")
    let col_freqTo = document.createElement("th")

    row.style = "border:1px solid black;"
    col_rankingBr.innerText = "Ranking Brasil"
    col_name.innerText = "Nome"
    col_freqBr.innerText = "Frequência Brasil"
    col_rankingTo.innerText = "Ranking Tocantins"
    col_freqTo.innerText = "Frequência Tocantins"

    row.appendChild(col_rankingBr)
    row.appendChild(col_name)
    row.appendChild(col_freqBr)
    row.appendChild(col_rankingTo)
    row.appendChild(col_freqTo)

    table.appendChild(row)
    let qtMaisAlto = 0
    let nameMaisFreq = ''

    names.forEach(name => {
        if (qtMaisAlto < name.quantPeople){

            qtMaisAlto = name.quantPeople
            nameMaisFreq = name.name
            
        }
    });
    console.log(`${nameMaisFreq} - ${qtMaisAlto}`)
    app.appendChild(table)

    
}

document.addEventListener("DOMContentLoaded", startData)