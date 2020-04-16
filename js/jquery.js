$(function () {
    jQuery("#vmap").vectorMap({
        map: "world_en",
        backgroundColor: "#1e90ff",
        borderColor: "#818181",
        borderOpacity: 0.25,
        borderWidth: 1,
        color: "#f4f3f0",
        enableZoom: true,
        hoverColor: "#EECFA1",
        hoverOpacity: null,
        normalizeFunction: "linear",
        scaleColors: ["#b6d6ff", "#005ace"],
        selectedColor: "#FA8072",
        selectedRegions: null,
        showTooltip: true,
        onRegionClick: function (element, code, region) {
        var message =
            'You clicked "' +
            region +
            '" which has the code: ' +
            code.toUpperCase();
        alert(message);
        },
    });
});
