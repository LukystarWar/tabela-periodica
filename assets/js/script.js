const items = document.querySelectorAll(".bloco")

setId()



function setId(){
    items.forEach(bloco => {
        bloco.setAttribute("id","b"+bloco.children[0].textContent)
    });
}


$(".bloco").mouseover((bloco)=>{
    bloco = bloco.currentTarget
    $("#info").html($(bloco).css("background-color"))
    let cor     = $(bloco).css("background-color")
    let atomico = $(bloco)[0].children[0].textContent
    let nome    = $(bloco)[0].children[1].textContent
})
const colors = $(".bloco").css("background")
$("#cores").click(()=>{
    console.log($(".bloco").css("background"))
    if ($(".bloco").css("background") != "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"){
        $(".bloco").attr("id", "")
    }else{
        setId()
    }
})
