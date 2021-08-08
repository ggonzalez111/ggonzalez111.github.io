var music = document.getElementById("audioFile");
function playAudio() {
    music.play();
}
function pauseAudio() {
    music.pause();
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
        console.log("desktop", event);

        //take ui.value 0-100 make it the opacity of the yellow element
        $("#yellow-bg").css("opacity", ui.value + '%');
    }
});

$("#uislider2").slider({
    range: "max",
    slide: function (event, ui) {
        $("#orange-bg").css("opacity", ui.value + "%");
    }
});



