var x = document.getElementById("myAudio");
function playAudio() {
    x.play();
}
function pauseAudio() {
    x.pause();
}

function connect() {
    if ('geolocation' in navigator) {
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(async position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            document.getElementById('latitude').textContent = lat;
            document.getElementById('longitude').textContent = lon;

            const data = { lat, lon };
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            const response = await fetch('/', options);
            const json = await response.json();
            console.log(json);
        });
    } else {
        console.log('geolocation not available');
    }
}



$("#uislider").slider({
    range: "max",

    slide: function (event, ui) {
        $("#idnumber").val(ui.value);
        if (ui.value >= 1 && ui.value <= 5) {
            $('.color').css("background-color", 'grey');
        }
        if (ui.value >= 11 && ui.value <= 15) {
            $('.color').css("background-color", 'yellow')
        }
    }
});

$("#uislider2").slider({
    range: "max",

    slide: function (event, ui) {
        $("#idnumber2").val(ui.value);
        if (ui.value >= 1 && ui.value <= 5) {
            $('.color2').css("background-color", 'blue');
        }
        if (ui.value >= 11 && ui.value <= 15) {
            $('.color2').css("background-color", 'orange')
        }
    }
});
