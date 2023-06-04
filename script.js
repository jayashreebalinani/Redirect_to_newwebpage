var info = [
   {
        Username:"Jayashree",
        Password:"jaya*514"
    },
    {
        Username:"Ushasree",
        Password:"usha*514"
    },
    {
        Username:"Vishnu",
        Password:"vishnu*514"
    },
    {
        Username:"Naveen",
        Password:"naveen*514"
    },
   {
        Username:"Abhi",
        Password:"abhi*514"
    },

]

function display(){
var name1 = document.getElementById("user").value
var passcode = document.getElementById("code").value
var token = "next"
sessionStorage.setItem('token',token)
var url = 'redirected.html?token=' + token
for(var i = 0; i < info.length; i++){
    if(info[i].Username == name1 && info[i].Password == passcode)
    {
        //newpage()
        //window.open('https://jayashreebalinani.github.io/Redirected_webpage/', '_blank');
 window.location.href = url
    }
}
}
