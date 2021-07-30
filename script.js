let femaleNames = ['Ama', 'Akosua', 'Awdoa', 'Abenna', 'Akua', 'Yaa', 'Yaa', 'Afua'];function male() {
    let man = document.getElementById('male').value;
    document.getElementById('result').innerHTML = man;
}
function female() {
    let female = document.getElementById('female').value;
    document.getElementById('result').innerHTML = female;
}


function akhan() {
    let date = document.getElementById('pie').value
    let otherDate = new Date (date)
    let tarehe = otherDate.getDay()
    let any = document.getElementById('result').innerHTML;
    let maleNames = ['Kwame', 'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi'];
    let femaleNames = ['Ama', 'Akosua', 'Awdoa', 'Abenna', 'Akua', 'Yaa', 'Yaa', 'Afua'];
    
    if (tarehe == 0 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[0]));
    } else if (tarehe == 1 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[1]));
    } else if (tarehe == 2 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[2]));
    } else if (tarehe == 3 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[3]));
    } else if (tarehe == 4 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[4]));
    } else if (tarehe == 5 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[5]));
    } else if (tarehe == 6 && any == 'female') {
        document.getElementById('finalName').innerHTML = ('Your akan name is' + ' ' + (femaleNames[6]));
    };
    if (DD <= 0 || DD >= 31) {
        alert("INVALID DAY");
    } else if (MM <= 0 || MM >= 12) {
        alert("INVALID MONTH");
    }
}
