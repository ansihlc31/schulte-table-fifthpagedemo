//for timmer
var timeleft=15;
var time= setInterval(function() {
    if(timeleft>=0)
    {
        document.getElementById('fortime').innerHTML=timeleft;
    }
    timeleft-=1;
},1000);