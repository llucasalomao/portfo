var conta_no = 0

function desaparece() {
    document.getElementById('no').style.visibility="hidden"
}
function aparece () {
    setTimeout(function (){
        document.getElementById('no').style.visibility="visible"
    },1000)

}

document.getElementById('no').onmouseover=function () {
    desaparece()
    conta_no=conta_no+1
    desaparece()
    aparece()
    if (conta_no==3) {
        document.getElementById('linha1').style.display="none"
        document.getElementById('linha3').style.display="flex"
    }
}
document.getElementById('no').onmouseout=function () {
    aparece()
}
document.getElementById('no').onclick=function () {
    conta_no=conta_no+1
    desaparece()
    aparece()
    if (conta_no==3) {
        document.getElementById('linha1').style.display="none"
        document.getElementById('linha3').style.display="flex"
    }
}
document.getElementById('yes').onclick=function () {
    document.getElementById('linha1').style.display="none"
    document.getElementById('linha2').style.display="flex"
}
document.getElementById('retry').onclick=function () {
    document.getElementById('linha3').style.display="none"
    document.getElementById('linha1').style.display="flex"
}