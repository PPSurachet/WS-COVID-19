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
                if(selectedCountry != null){
                    var total = selectedCountry.length;
                    console.log(total);
                }
            });
        },
    });

    jQuery("#vvmap").vectorMap({
        map: "world_en",
        backgroundColor: "#3333FF",
        borderColor: "#ffffff",
        borderOpacity: 2,
        borderWidth: 1,
        color: "#3333FF",
        enableZoom: true,
        hoverColor: "#EECFA1",
        normalizeFunction: "linear",
        selectedColor: "#FF4040",
        showTooltip: true,
        onRegionClick: function (element, code, region) {
            $.getJSON(url, function (result) {
                var selectedCountry = result[region];
                console.log(selectedCountry);
                if(selectedCountry != null){
                    var total = selectedCountry.length;
                    console.log(total);
                }
            });
        },
    });
});
