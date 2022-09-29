async function startData() {
    let response = await fetch("json/names.json")
    let names = await response.json()

    console.log(names)

}

document.addEventListener("DOMContentLoaded", startData)