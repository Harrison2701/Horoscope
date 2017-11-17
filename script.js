var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];


var messages = ["widen your horizons and find the middle ground for all your needs.","don’t be egotistic and instead of feeling ashamed, try to see your true position.",
    "be as gentle as you can to those who are bruised and limited by their inner world of sorrow.","let the content of your mind reach the surface and face it head on.",
    "spend time with children, people younger than you, and free spirited individuals who make you feel alive.","this is a good time to share your feelings with the person standing in front of you.",
    "think fast but don’t act on instincts just yet.","think about ways in which you can defend your integrity and your personality that are healthy and productive.",
    "try to find balance between your profession and rest.","do something that will take the edge off, set you free, and turn your head in the right direction.",
    "let go of everything that obviously had to get lost and focus your mind on the future you are about to create."];

function adjustDays(month){
    var month = document.getElementById("Month").value;
    var validation;
    var result = " "

    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        validation = 31
    }
    if(month == 2){
        validation = 28
    }
    if(month == 4 || month == 6|| month == 9 || month == 11){
        validation = 30
    }
    for(var i = 1; i<=validation;i++){
        result = result + "<option value='"+i+"'>"+i+"</option>"
    }
    document.getElementById("days").innerHTML=result
}

function doIt(){
    var month = document.getElementById("Month").value;
    var day = document.getElementById("days").value;
    var sign = determineSign(month, day);
    determineMessage(sign);
    determineImage(sign);
}

function determineImage(sign){
    document.getElementById("picture").innerHTML = "<img src='img/" + signs[sign].toLowerCase() + ".jpg'>";
}

function determineMessage(sign) {
    if (sign == 0) {
        document.getElementById("message").innerHTML = "<p>Congratulations <b>" + document.getElementById("name").value + "</b>, your horoscope is <b>" + signs[sign] + "</b>. Your message is, <b>" + messages[sign] + "</b>  </p>"
    }else{
        document.getElementById("message").innerHTML = "<p>Congratulations <b>" + document.getElementById("name").value + "</b>, your zodiac animal is <b>" + signs[sign] + "</b>. Your horoscope is, <b>" + messages[sign - 1] + "</b>  </p>"
    }
}

function determineSign(month,day){
    var month = document.getElementById("Month").value;
    var day = document.getElementById("days").value;
    if(month == 1){
        if(day<=19){
            return 11;
            //document.getElementById("img").innerHTML="Capricorn";
        }else{
            return 0;
        }
    }

    if(month == 2){
        if(day<=18){
            return 0;
        }else{
            return 1;
        }
    }

    if(month == 3){
        if(day<=20){
            return 1;
        }else{
            return 2;
        }
    }

    if(month == 4){
        if(day<=19){
            return 2;
        }else{
            return 3;
        }
    }

    if(month == 5){
        if(day<=20){
            return 3;
        }else{
            return 4;
        }
    }

    if(month == 6){
        if(day<=20){
            return 4;
        }else{
            return 5;
        }
    }

    if(month == 7){
        if(day<=22){
            return 5;
        }else{
            return 6;
        }
    }

    if(month == 8){
        if(day<=22) {
            return 6;
        }else{
            return 7;
        }
    }

    if(month == 9){
        if(day<=22){
            return 7;
        }else{
            return 8;
        }
    }

    if(month == 10){
        if(day<=22){
            return 8;
        }else{
            return 9;
        }
    }

    if(month == 11){
        if(month<=21){
            return 9;
        }else{
            return 10;
        }
    }

    if(month == 12){
        if(day<=21){
            return 10;
        }else{
            return 11
        }
    }
}

