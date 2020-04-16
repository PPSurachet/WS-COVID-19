$(function () {   
    jQuery("#vmap").vectorMap({
        map: "world_en",
        backgroundColor: "#363636",
        borderColor: "#000000",
        borderOpacity: 0.7,
        borderWidth: 1,
        color: "#ffffff",
        enableZoom: true,
        hoverColor: "#EECFA1",
        normalizeFunction: "linear",
        selectedColor: "#FF4040",
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
