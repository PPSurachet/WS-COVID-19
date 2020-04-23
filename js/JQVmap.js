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

            var Deaths1 = 0,Deaths2 = 0,Deaths3 = 0,Deaths4 = 0;
            var Recovery1 = 0,Recovery2 = 0,Recovery3 = 0,Recovery4 = 0;
            var Confirmed1 = 0,Confirmed2 = 0,Confirmed3 = 0,Confirmed4 = 0;

            if (selectedCountry != null) {

                var total = selectedCountry.length;

                Date1 = selectedCountry[total-1].date;
                Date2 = selectedCountry[total-2].date;
                Date3 = selectedCountry[total-3].date;
                Date4 = selectedCountry[total-4].date;

                Confirmed1 = selectedCountry[total-1].confirmed;
                Confirmed2 = selectedCountry[total-2].confirmed;
                Confirmed3 = selectedCountry[total-3].confirmed;
                Confirmed4 = selectedCountry[total-4].confirmed;

                Deaths1 = selectedCountry[total-1].deaths;
                Deaths2 = selectedCountry[total-2].deaths;
                Deaths3 = selectedCountry[total-3].deaths;
                Deaths4 = selectedCountry[total-4].deaths;
                

                Recovery1 = selectedCountry[total-1].recovered;
                Recovery2 = selectedCountry[total-2].recovered;
                Recovery3 = selectedCountry[total-3].recovered;
                Recovery4 = selectedCountry[total-4].recovered;

            }

            console.log("Deaths1 "+Deaths1);
            console.log("Deaths2 "+Deaths2);
            console.log("Deaths3 "+Deaths3);
            console.log("Deaths4 "+Deaths4);

            console.log("Confirmed1 "+Confirmed1);
            console.log("Confirmed2 "+Confirmed2);
            console.log("Confirmed3 "+Confirmed3);
            console.log("Confirmed4 "+Confirmed4);

            console.log("Recovery1 "+Recovery1);
            console.log("Recovery2 "+Recovery2);
            console.log("Recovery3 "+Recovery3);
            console.log("Recovery4 "+Recovery4);
            
            chartColor = "#FFFFFF";

            ctx = document.getElementById('lineChart').getContext("2d");

            var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, '#80b6f4');
            gradientStroke.addColorStop(1, chartColor);

            gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFill.addColorStop(1, hexToRGB('#2CA8FF', 0.6));

            gradientFillRecovery = ctx.createLinearGradient(0, 170, 0, 50);
            gradientFillRecovery.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFillRecovery.addColorStop(1, hexToRGB('#18ce0f',0.4));

            gradientFillDeaths = ctx.createLinearGradient(0, 170, 0, 50);
            gradientFillDeaths.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFillDeaths.addColorStop(1, "rgba(255,0,0,0.3)");    

            myChart = new Chart(ctx,{
                type: 'line',
                responsive: true,
                data: {
                    labels: [Date4,Date3,Date2,Date1],
                    datasets: [{
                        label: "Confirmed",
                        borderColor: "#2CA8FF",
                        pointBorderColor: "#FFF",
                        pointBackgroundColor: "#2CA8FF",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        fill: true,
                        backgroundColor: gradientFill,
                        borderWidth: 2,
                        data: [Confirmed4,Confirmed3,Confirmed2,Confirmed1]
                    },{
                        label: "Recovery",
                        borderColor: "#18ce0f",
                        pointBorderColor: "#FFF",
                        pointBackgroundColor: "#18ce0f",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        fill: true,
                        backgroundColor: gradientFillRecovery,
                        borderWidth: 2,
                        data: [Recovery4,Recovery3,Recovery2,Recovery1]
                    },{
                        label: "Deaths",
                        borderColor: "#DC143C",
                        pointBorderColor: "#FFF",
                        pointBackgroundColor: "#DC143C",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        fill: true,
                        backgroundColor: gradientFillDeaths,
                        borderWidth: 2,
                        data: [Deaths4,Deaths3,Deaths2,Deaths1]
                    }]
                },
            });
            
            $('#NameCountry').html(region);
            $('#LastUpdate').html(Date1);
            $('#TConfirmed').html(Confirmed1);
            $('#TRecovery').html(Recovery1);
            $('#TDeaths').html(Deaths1);
        });
        },
    })
})