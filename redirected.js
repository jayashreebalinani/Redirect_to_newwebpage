const urlParams = new URLSearchParams(window.location.search)
const token = urlParams.get('token')
var newweb = window.location.href.split("token=")[1]
console.log(newweb)
if(sessionStorage.getItem("token") != token){
    window.location.href = "redirect.html"
}

function getback()
{
    window.location.href="redirect.html"
}