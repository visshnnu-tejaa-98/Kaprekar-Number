let heading = document.createElement("h1")
heading.innerHTML = "Kaprekar Number"

let heading3 = document.createElement("h3")
heading3.innerHTML = "Enter four-digit number with different digits (acbd with a &lt b &lt c &lt d) "

let container1 = document.createElement("div")
container1.classList.add("container1")

let div = document.createElement("div")

let container = document.createElement("div")
container.classList.add("conatiner")

let idContainer = document.createElement("div")
idContainer.setAttribute("id","container")

let inputData = document.createElement("input")
inputData.setAttribute("type","number")
inputData.setAttribute("id","input")

let br = document.createElement("br")

let check = document.createElement("button")
check.setAttribute("type","button")
check.setAttribute("id","button")
check.innerHTML = "Check"




container.append(inputData)
container.append(br)
container.append(check)

container1.append(container)
div.append(idContainer)

document.body.append(heading)
document.body.append(heading3)
document.body.append(container1)
document.body.append(div)

//////////////////////////////////////////////////////////////////////////////////////////////////////

let container2 = document.getElementById("container")
console.log(container2)


//////////////////////////////////////////////////////////////////////////////////////////////////////
let input = document.getElementById("input")
let button = document.getElementById("button")
let resultGlobal;
button.addEventListener("click",function(){
    idContainer.innerHTML = ""
    let inputData = +input.value
    resultGlobal = calculation(inputData)  
})


function calculation(input){
    
    let h3 = document.createElement("h3")
    let data = input.toString().split("")
    if(data.length!=4 && new Set(data) != 4){
        alert("Enter four-digit number with different digits")
        return 0;
    }
    let array = []
    let arrayReverse = []
    data.forEach(i=>array.push(+i))
    data.forEach(i=>arrayReverse.push(+i))
    let sortedArray = +array.sort(function(a,b){return a-b}).join("")
    let reversedArray = +arrayReverse.sort(function(a,b){return a-b}).reverse().join("")
    let result = reversedArray - sortedArray
    
    
    
    h3.innerHTML = `${reversedArray} - ${sortedArray} = ${result}`
    h3.classList.add("list")
    container2.append(h3)


    console.log(`<h3>${reversedArray} - ${sortedArray} = ${result}</h3>\n`)
    if(result!==6174){
        calculation(result)
    }else{
        console.log("success")
    }

}
