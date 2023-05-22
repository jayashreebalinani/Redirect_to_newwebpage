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
// for(var keys of info)
// {
//     console.log(keys)
// }
//console.log(info)
//var check = info.filter(info=>info.Username)
//console.log(check)
function newpage()
   {
        //location.replace("C:/Users/Jayashree/Desktop/coding/tasks/redirected.html")
        window.open('C:/Users/Jayashree/Desktop/coding/tasks/redirected.html', '_blank');
   }
   
function display(){
var name1 = document.getElementById("user").value
var passcode = document.getElementById("code").value
for(var i = 0; i < info.length; i++){
    if(info[i].Username == name1 && info[i].Password == passcode)
    {
        //newpage()
        window.open('C:/Users/Jayashree/Desktop/coding/tasks/redirected.html', '_blank');

    }
}
}
// function display(){
// var count = 0
// var name1 = document.getElementById("user").value
// var passcode = document.getElementById("code").value
// var checkname = info.map(info=>info.Username)
// for(var n of checkname)
// {
//     if(name1 == n)
//     {
//         count += 1
//     }
    
// }
// var checkcode = info.map(info=>info.Password)
// for(var p of checkcode)
// {
//     if(passcode == p)
//     {
//         count += 1
//     }
// }
// if(checkname.indexOf(name1)==checkcode.indexOf(passcode))
// {
//     count += 1
// }

// if(count == 3)
// {
//     function newpage()
//    {
//         //location.replace("C:/Users/Jayashree/Desktop/coding/tasks/redirected.html")
//         window.open('C:/Users/Jayashree/Desktop/coding/tasks/redirected.html', '_blank');
//    }
//    newpage()
// }
// }