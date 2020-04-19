$(function () {
    var url = "https://pomber.github.io/covid19/timeseries.json";

    jQuery("#vmap").vectorMap({
        map: "world_en",
        backgroundColor: "#1C1C1C",
        borderColor: "#ffffff",
        borderOpacity: 2,
        borderWidth: 1,
        color: "#1C1C1C",
        enableZoom: true,
        hoverColor: "#EECFA1",
        normalizeFunction: "linear",
        selectedColor: "#FF4040",
        showTooltip: true,
        onRegionClick: function (element, code, region) {
        $.getJSON(url, function (result) {
            var selectedCountry = result[region];
            console.log(selectedCountry);
            if (selectedCountry != null) {
            var total = selectedCountry.length;
            console.log(total);
            }
        });
        },
    })    

    var chartData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [589, 445, 483, 503, 689, 692, 634],
        },
        {
            data: [639, 465, 493, 478, 589, 632, 674],
        }]
    };

    var chLine = document.getElementById("chLine");
    if (chLine) {
        new Chart(chLine, {
        type: 'line',
        data: chartData,
        options: {
            scales: {
            yAxes: [{
                ticks: {
                beginAtZero: false
                }
            }]
            },
            legend: {
            display: false
            }
        }
        });
    }
});
