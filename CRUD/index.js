
function save(name, value) {

    localStorage.setItem(name, value)
}


function load(name) {
    var item = localStorage.getItem(name) || ""
    return item
}


function message(value) {

    document.getElementById("message").innerHTML = value
}


function create() {
    var item = load(document.getElementById("name").value)
    if (item) {
        message("item with that name already exists")
    } else { }
    save(document.getElementById("name").value, document.getElementById("color").value)
}

function update() {
    var item = load(document.getElementById("name").value)
    if (!item) {
        message("item not available")
    } else {
        create()
    }
}


function read() {

    message(load(document.getElementById("name").value) || "not found")
}

function erase() {

    localStorage.removeItem(document.getElementById("name").value)
}

function eraseall() {

    localStorage.clear()
}


