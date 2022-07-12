var getJSON = function(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};
getJSON('https://api.vimeworld.com/online', function(err, data) {
        if (err !== null) {
            console.log("Error API: "+err)
            document.getElementsByTagName('divLol')[0].innerHTML = "API not response...";
        }
        else {
            document.getElementsByTagName('divLol')[0].innerHTML = data.total;
            setInterval(function (){
                getJSON('https://api.vimeworld.com/online',
                    function(err, data) {
                        if (err !== null) { console.log("Error API: "+err) }
                        else {
                            document.getElementsByTagName('divLol')[0].innerHTML = data.total;
                        }
                    });
            },10000)
        }
    });

$.getJSON("https://api.minetools.eu/ping/193.70.80.70", function(r) {
    online = r.players.online
    console.log("kek "+online)
    document.getElementsByTagName('divLol1')[0].innerHTML = r.players.online;
});

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}