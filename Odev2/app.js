let input = document.querySelector('#input')
let addBtn = document.querySelector('#addBtn')
let list = document.querySelector('#list')
let checked = false;

addBtn.addEventListener('click', Add)
list.addEventListener('click', Control)

function Add(event) {
    event.preventDefault()

    if (input.value != "") {
        let tododiv = document.createElement('div')
        tododiv.classList.add('todo')
        let newTodo = document.createElement('li')
        newTodo.classList.add('text')
        newTodo.innerHTML = input.value
        tododiv.appendChild(newTodo)
        let deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = 'delete'
        deleteBtn.classList.add('deleteBtn')
        deleteBtn.setAttribute('id', 'deleteBtn')
        newTodo.appendChild(deleteBtn)
        list.appendChild(tododiv)
        input.value = ""
    }
    else { alert("Hiç bir şey yapmayacaksın öyle mi ? Kabul edemiyoruz malesef bir görev gir :)") }

}

function Control(e) {
    const focusItem = e.target
    if (focusItem.classList[0] === "deleteBtn") {
        const item = focusItem.parentElement;
        item.remove()
    }
    else if (focusItem.classList[0] === 'text') {
        const myLi = focusItem
        myLi.classList.toggle('checked')
    }
}

