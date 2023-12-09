let inputBoxEl = document.getElementById("inputBox");
let listContainerEl = document.getElementById("listContainer");

function addTask(){
    if(inputBoxEl.value === ''){
        alert("You must write something!");
    }
    else{
        let listEl = document.createElement("li")
        listEl.innerHTML =inputBoxEl.value;
        listContainerEl.appendChild(listEl)
        let spanEl = document.createElement("span")
        spanEl.innerHTML = "\u00d7";
        listEl.append(spanEl)

    }
    inputBoxEl.value='';
    saveData()


}
listContainerEl.addEventListener("click",(event)=>{
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle("checked");
        saveData()
    }
    else if(event.target.tagName= "SPAN"){
        event.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainerEl.innerHTML);
}
function showTask(){
    listContainerEl.innerHTML=localStorage.getItem("data")
}
showTask()