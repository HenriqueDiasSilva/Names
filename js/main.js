async function startData() {
    let response = await fetch("json/names.json")
    let names = await response.json()

    console.log(names)

    loadTableAllYears(names)
    loadTableYear2000(names)
    

}

function loadTableAllYears(names) {
    let app = document.getElementById("app")
    const h3 = document.createElement("h3")
    h3.innerText = 'Alunos: Augusto Cavalcanti, Henrique Dias, Stéfano de Sá'
    h3.className = 'm-5'
    app.appendChild(h3)
    let table = document.createElement("table")

    let row_col = document.createElement("tr")

    let col_rankingBr = document.createElement("th")
    let col_name = document.createElement("th")
    let col_freqBr = document.createElement("th")
    let col_rankingTo = document.createElement("th")
    let col_freqTo = document.createElement("th")

    
    col_rankingBr.innerText = "Ranking Brasil"
    col_name.innerText = "Nome"
    col_freqBr.innerText = "Frequência Brasil"
    col_rankingTo.innerText = "Ranking Tocantins"
    col_freqTo.innerText = "Frequência Tocantins"

    row_col.appendChild(col_rankingBr)
    row_col.appendChild(col_name)
    row_col.appendChild(col_freqBr)
    row_col.appendChild(col_rankingTo)
    row_col.appendChild(col_freqTo)



    table.appendChild(row_col)

    nomesBr = loadFivePersonAllYearsBrazil(names)
    nomesTo = loadFivePersonAllYearsTocantins(names)
    
    for (let i = 0; i < 5; i++){
        let row = document.createElement("tr")
        let td_rankingBr =  document.createElement("td")
        let td_name =  document.createElement("td")
        let td_freqBr =  document.createElement("td")
        let td_rankingTo =  document.createElement("td")
        let td_freqTo =  document.createElement("td")

        td_rankingBr.innerText = i+1
        td_name.innerText = nomesBr[0][i]
        td_freqBr.innerText = nomesBr[1][i]
        td_rankingTo.innerText = i+1
        td_freqTo.innerText = nomesTo[1][i]

        row.appendChild(td_rankingBr)
        row.appendChild(td_name)
        row.appendChild(td_freqBr)
        row.appendChild(td_rankingTo)
        row.appendChild(td_freqTo)

        table.className = 'm-5'
    

        table.appendChild(row)
    } 
    

    app.appendChild(table)

    
}

function loadTableYear2000(names){
    let app = document.getElementById("app")
    let table = document.createElement("table")

    let row_col = document.createElement("tr")

    let col_rankingBr = document.createElement("th")
    let col_name = document.createElement("th")
    let col_freqBr = document.createElement("th")
    let col_rankingTo = document.createElement("th")
    let col_freqTo = document.createElement("th")

    
    col_rankingBr.innerText = "Ranking Brasil"
    col_name.innerText = "Nome"
    col_freqBr.innerText = "Frequência Brasil"
    col_rankingTo.innerText = "Ranking Tocantins"
    col_freqTo.innerText = "Frequência Tocantins"

    row_col.appendChild(col_rankingBr)
    row_col.appendChild(col_name)
    row_col.appendChild(col_freqBr)
    row_col.appendChild(col_rankingTo)
    row_col.appendChild(col_freqTo)

    table.className = 'm-5'

    table.appendChild(row_col)

    nomesBr = loadFivePersonYear2000Brazil(names)
    nomesTo = loadFivePersonYear2000Tocantins(names)
    
    for (let i = 0; i < 5; i++){
        let row = document.createElement("tr")
        let td_rankingBr =  document.createElement("td")
        let td_name =  document.createElement("td")
        let td_freqBr =  document.createElement("td")
        let td_rankingTo =  document.createElement("td")
        let td_freqTo =  document.createElement("td")

        td_rankingBr.innerText = i+1
        td_name.innerText = nomesBr[0][i]
        td_freqBr.innerText = nomesBr[1][i]
        td_rankingTo.innerText = i+1
        td_freqTo.innerText = nomesTo[1][i]

        row.appendChild(td_rankingBr)
        row.appendChild(td_name)
        row.appendChild(td_freqBr)
        row.appendChild(td_rankingTo)
        row.appendChild(td_freqTo)
    

        table.appendChild(row)
    } 
    

    app.appendChild(table)
}

function loadFivePersonAllYearsTocantins(names){
    nomesTo = [null,null,null,null,null]
    qtPeopleTo = [null,null,null,null,null]

    names.forEach(name => {

        if(name.place == 'Tocantins'){

            if(name.quantPeople > qtPeopleTo[0] | qtPeopleTo[0] == null){
                qtPeopleTo[0] = name.quantPeople
                nomesTo[0] = name.name
            }
            else if(name.quantPeople > qtPeopleTo[1] | qtPeopleTo[1] == null){
                qtPeopleTo[1] = name.quantPeople
                nomesTo[1] = name.name
            }
            else if(name.quantPeople > qtPeopleTo[2] | qtPeopleTo[2] == null){
                qtPeopleTo[2] = name.quantPeople
                nomesTo[2] = name.name
            }
            else if(name.quantPeople > qtPeopleTo[3] | qtPeopleTo[3] == null){
                qtPeopleTo[3] = name.quantPeople
                nomesTo[3] = name.name
            }
            else if(name.quantPeople > qtPeopleTo[4] | qtPeopleTo[4] == null){
                qtPeopleTo[4] = name.quantPeople
                nomesTo[4] = name.name
            }
        }
        
    });

    return [nomesTo, qtPeopleTo]
}

function loadFivePersonAllYearsBrazil(names){
    nomesBr = [null,null,null,null,null]
    qtPeopleBr = [null,null,null,null,null]

    names.forEach(name => {
        if(name.place == 'Brasil'){

            if(name.quantPeople > qtPeopleBr[0] | qtPeopleBr[0] == null){
                qtPeopleBr[0] = name.quantPeople
                nomesBr[0] = name.name
            }
            else if(name.quantPeople > qtPeopleBr[1] | qtPeopleBr[1] == null){
                qtPeopleBr[1] = name.quantPeople
                nomesBr[1] = name.name
            }
            else if(name.quantPeople > qtPeopleBr[2] | qtPeopleBr[2] == null){
                qtPeopleBr[2] = name.quantPeople
                nomesBr[2] = name.name
            }
            else if(name.quantPeople > qtPeopleBr[3] | qtPeopleBr[3] == null){
                qtPeopleBr[3] = name.quantPeople
                nomesBr[3] = name.name
            }
            else if(name.quantPeople > qtPeopleBr[4] | qtPeopleBr[4] == null){
                qtPeopleBr[4] = name.quantPeople
                nomesBr[4] = name.name
            }

        }
        
    });

    return [nomesBr, qtPeopleBr]
}

function loadFivePersonYear2000Tocantins(names){
    nomesTo = [null,null,null,null,null]
    qtPeopleTo = [null,null,null,null,null]

    names.forEach(name => {

        if(name.place == 'Tocantins' & name.referencPeriod == 2000){

            if(name.quantPeople > qtPeopleTo[0] | qtPeopleTo[0] == null){
                qtPeopleTo[0] = name.quantPeople
                nomesTo[0] = name.name
            }
            else if(name.quantPeople > qtPeopleTo[1] | qtPeopleTo[1] == null){
                qtPeopleTo[1] = name.quantPeople
                nomesTo[1] = name.name
            }
            else if(name.quantPeople > qtPeopleTo[2] | qtPeopleTo[2] == null){
                qtPeopleTo[2] = name.quantPeople
                nomesTo[2] = name.name
            }
            else if(name.quantPeople > qtPeopleTo[3] | qtPeopleTo[3] == null){
                qtPeopleTo[3] = name.quantPeople
                nomesTo[3] = name.name
            }
            else if(name.quantPeople > qtPeopleTo[4] | qtPeopleTo[4] == null){
                qtPeopleTo[4] = name.quantPeople
                nomesTo[4] = name.name
            }
        }
        
    });

    return [nomesTo, qtPeopleTo]
}

function loadFivePersonYear2000Brazil(names){
    nomesBr = [null,null,null,null,null]
    qtPeopleBr = [null,null,null,null,null]

    names.forEach(name => {
        if(name.place == 'Brasil' & name.referencPeriod == 2000){

            if(name.quantPeople > qtPeopleBr[0] | qtPeopleBr[0] == null){
                qtPeopleBr[0] = name.quantPeople
                nomesBr[0] = name.name
            }
            else if(name.quantPeople > qtPeopleBr[1] | qtPeopleBr[1] == null){
                qtPeopleBr[1] = name.quantPeople
                nomesBr[1] = name.name
            }
            else if(name.quantPeople > qtPeopleBr[2] | qtPeopleBr[2] == null){
                qtPeopleBr[2] = name.quantPeople
                nomesBr[2] = name.name
            }
            else if(name.quantPeople > qtPeopleBr[3] | qtPeopleBr[3] == null){
                qtPeopleBr[3] = name.quantPeople
                nomesBr[3] = name.name
            }
            else if(name.quantPeople > qtPeopleBr[4] | qtPeopleBr[4] == null){
                qtPeopleBr[4] = name.quantPeople
                nomesBr[4] = name.name
            }

        }
        
    });

    return [nomesBr, qtPeopleBr]
}

document.addEventListener("DOMContentLoaded", startData)