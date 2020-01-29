const enterButton = document.getElementById("enter")
const input = document.getElementById("userinput")
const ul = document.querySelector("ul")
const item = document.getElementsByTagName("li")


function inputLenght(){
    return input.value.length
}

function listItem(){
    return item.length
}

function createListItem(){
    var li = document.createElement("li") //create an element li
    li.appendChild(document.createTextNode(input.value)) //make text form input field the li text
    ul.appendChild(li) //add li to ul
    input.value = "" //reset text input field

    //start striketgrough
    //beacause it's in the function, it only adds it for new items

    function crossOut(){
        li.classList.toggle("done")
    }

    li.addEventListener("click", crossOut)

    //end strikethrough


    // add delete button

    var delBtn = document.createElement("button")
    delBtn.appendChild(document.createTextNode("X"))
    li.appendChild(delBtn)
    delBtn.addEventListener("click", delListItem)
    // ent delete button

    //add class delete on li

    function delListItem(){
        li.classList.add("delete")
    }
    //end add class delete


}


function addListAfterClick(){
    if(inputLenght() > 0){
        createListItem()
    }
}

function addListAfterKeyPress(event){
    if(inputLenght() > 0 && event.which === 13){
        createListItem()
    }
}

enterButton.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeyPress)

//Create Search bar filter function 

//     const searchBarFilter = document.getElementById("searchBar").value.toUpperCase()   
//     const userData = document.getElementById("uList")
//     const showSerData = userData.getElementsByTagName("li")//[0].innerText
//     const textValue = userData.getElementsByTagName("li")[0]//.innerText
    

// function searchFilter(){
//    for(var i = 0; i<showSerData.length;i++){
//        if(showSerData[i].innerText.toUpperCase().indexOf(searchBarFilter) > -1){
//             showSerData[i].style.display="Block"
//        }else{
//            showSerData[i].style.display = "none"
//        }
//    }
// }

function filter(){
    var filterValue, input, ul,li,i
    input = document.getElementById("searchBar") 
    filterValue = input.value.toUpperCase()
    ul = document.getElementById("uList")
    li = ul.getElementsByTagName("li")

    for(i = 0; i<li.length;i++ ){
        var a = li[i].innerText
        if(a.toUpperCase().indexOf(filterValue)>-1){
            li[i].style.display=""
        }else{
            li[i].style.display="none"
        }
    }
}


