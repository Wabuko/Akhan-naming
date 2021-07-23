
function male() {
    let man = document.getElementById('male').value;
    document.getElementById('result').innerHTML = man;
}

function female() {
    let female = document.getElementById('female').value;
    document.getElementById('result').innerHTML = female;
}
function akhan() {
    let date = document.getElementById('pie').value
    let CC = parseInt(date.substr(0, 2));
    let YY = parseInt(date.substr(2, 2));
    let MM = parseInt(date.substr(5, 2));
    let DD = parseInt(date.substr(8, 2));
    let birthday = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    let awe = Math.floor(birthday);
    let any = document.getElementById('result').innerHTML;
    let maleNames = ['Kwame', 'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi'];
    let femaleNames = ['Ama', 'Akosua', 'Awdoa', 'Abenna', 'Akua', 'Yaa', 'Yaa', 'Afua'];
    if (awe == 0 && any == 'male') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (maleNames[0]));
    } else if (awe == 1 && any == 'male') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (maleNames[1]));
    } else if (awe == 2 && any == 'male') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (maleNames[2]));
    } else if (awe == 3 && any == 'male') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (maleNames[3]));
    } else if (awe == 4 && any == 'male') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (maleNames[4]));
    } else if (awe == 5 && any == 'male') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (maleNames[5]));
    } else if (awe == 6 && any == 'male') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (maleNames[6]));
    };
    if (awe == 0 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[0]));
    } else if (awe == 1 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[1]));
    } else if (awe == 2 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[2]));
    } else if (awe == 3 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[3]));
    } else if (awe == 4 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[4]));
    } else if (awe == 5 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[5]));
    } else if (awe == 6 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[6]));
    };
    if (DD <= 0 || DD >= 31) {
        alert("INVALID DAY");
    } else if (MM <= 0 || MM >= 12) {
        alert("INVALID MONTH");
    }
}
