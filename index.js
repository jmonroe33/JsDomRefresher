let listItems = document.querySelectorAll("li")
 
console.log(listItems)
listItems.forEach( li => {
    li.style.fontSize = "30px"
    // li.addEventListener('mouseover', ()=> li.style.backgroundColor = "gray")
})
    let ul = document.querySelector("ul") 
    console.log(ul)
    const newItem = document.createElement("li")
    ul.append(newItem)
    newItem.innerText = "Laughing"
    newItem.style.fontSize = "30px"

    const newBtn = document.createElement("button")
    ul.append(newBtn)
    newBtn.innerText = "Click Me";
    newBtn.style.fontSize = "15px"

    const windowAlerter = ()=> {
        window.alert("you have clicked me")
    }
    
    newBtn.addEventListener("click", windowAlerter)
    // Manipulating the DOM here
 