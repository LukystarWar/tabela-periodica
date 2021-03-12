let items = document.querySelectorAll(".bloco")
items.forEach(bloco => {
    bloco.setAttribute("id","b"+bloco.children[0].textContent)
});


$(".bloco").mouseover((bloco)=>{
    bloco = bloco.currentTarget
    $("#info").html($(bloco).css("background-color"))
    let cor     = $(bloco).css("background-color")
    let atomico = $(bloco)[0].children[0].textContent
    let nome    = $(bloco)[0].children[1].textContent
    console.log(nome);
})
