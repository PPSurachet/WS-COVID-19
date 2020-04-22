$(function() {
    var url = "https://pomber.github.io/covid19/timeseries.json";
    jQuery("#vmap").vectorMap({
        map: "world_en",
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
        borderOpacity: 2,
        borderWidth: 1,
        color: "#154A7D",
        enableZoom: true,
        hoverColor: "#EECFA1",
        normalizeFunction: "linear",
        selectedColor: "#FF4040",
        showTooltip: true,
        onRegionClick: function (element, code, region) {
        $.getJSON(url, function (result) {
            var selectedCountry = result[region];
            console.log(selectedCountry);
            console.log(region);
            if (selectedCountry != null) {
            var total = selectedCountry.length;
            console.log(total);
            }
        });
        },
    })
})