var myForm = document.getElementById("myForm");

var myInput = document.getElementById("myInput");

var myItem = document.getElementById("myItem")

myForm.addEventListener("submit", function(event) {
    event.preventDefault()
    createItem(myInput.value)
})


function createItem(inputItems){
    var items = '<li>${inputItems}
    <buttton onclick="deleteElement(this)">Delete</buttton></li>'

    myItem.insertAdjacentHTML("befroeend",items)

    myInput.value = ""

    myInput.focus  =()
}
function dleteElement(ElementToDelete){
    ElementToDelete.parentElement.remove()
}