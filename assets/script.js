let items = document.querySelectorAll(".bloco")
items.forEach(bloco => {
    bloco.setAttribute("id","b"+bloco.children[0].textContent)
});