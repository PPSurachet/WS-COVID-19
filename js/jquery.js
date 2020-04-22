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

        var TotalDate1 = [],TotalDate2 = [],TotalDate3 = [],TotalDate4 = [],TotalDate5 = [],TotalDate6 = [],TotalDate7 = [];
        var TotalC1 = [],TotalC2 = [],TotalC3 = [],TotalC4 = [],TotalC5 = [],TotalC6 = [],TotalC7 = [];
        var TotalR1 = [],TotalR2 = [],TotalR3 = [],TotalR4 = [],TotalR5 = [],TotalR6 = [],TotalR7 = [];
        var TotalD1 = [],TotalD2 = [],TotalD3 = [],TotalD4 = [],TotalD5 = [],TotalD6 = [],TotalD7 = [];
        
        $.getJSON(url,function (result) {

            var Date1 = 0,Date2 = 0,Date3 = 0,Date4 = 0,Date5 = 0,Date6 = 0,Date7 = 0;
            var Deaths1 = 0,Deaths2 = 0,Deaths3 = 0,Deaths4 = 0,Deaths5 = 0,Deaths6 = 0,Deaths7 = 0;
            var Recovery1 = 0,Recovery2 = 0,Recovery3 = 0,Recovery4 = 0,Recovery5 = 0,Recovery6 = 0,Recovery7 = 0;
            var Confirmed1 = 0,Confirmed2 = 0,Confirmed3 = 0,Confirmed4 = 0,Confirmed5 = 0,Confirmed6 = 0,Confirmed7 = 0;

            for (var country in result) {

                var selectedCountry = result[country];
                var total = selectedCountry.length;

                Date1 = selectedCountry[total-1].date;
                Date2 = selectedCountry[total-8].date;
                Date3 = selectedCountry[total-15].date;
                Date4 = selectedCountry[total-22].date;

                Confirmed1 = Confirmed1 + selectedCountry[total-1].confirmed;
                Confirmed2 = Confirmed2 + selectedCountry[total-8].confirmed;
                Confirmed3 = Confirmed3 + selectedCountry[total-15].confirmed;
                Confirmed4 = Confirmed4 + selectedCountry[total-22].confirmed;

                Deaths1 = Deaths1 + selectedCountry[total-1].deaths;
                Deaths2 = Deaths2 + selectedCountry[total-8].deaths;
                Deaths3 = Deaths3 + selectedCountry[total-15].deaths;
                Deaths4 = Deaths4 + selectedCountry[total-22].deaths;

                Recovery1 = Recovery1 + selectedCountry[total-1].recovered;
                Recovery2 = Recovery2 + selectedCountry[total-2].recovered;
                Recovery3 = Recovery3 + selectedCountry[total-3].recovered;
                Recovery4 = Recovery4 + selectedCountry[total-4].recovered;

            }
            TotalC1.push(Confirmed1),TotalC2.push(Confirmed2),TotalC3.push(Confirmed3),
            TotalC4.push(Confirmed4)
            
            TotalDate1.push(Date1),TotalDate2.push(Date2),TotalDate3.push(Date3),
            TotalDate4.push(Date4)

            TotalD1.push(Deaths1),TotalD2.push(Deaths2),TotalD3.push(Deaths3),
            TotalD4.push(Deaths4)

            TotalR1.push(Recovery1),TotalR2.push(Recovery2),TotalR3.push(Recovery3),
            TotalR4.push(Recovery4)

            $("#TRecovery").append(Recovery1);
            $("#TConfirms").append(Confirmed1);
            $("#TDeaths").append(Deaths1);

            demo.initDashboardPageCharts(TotalC4,TotalC3,TotalC2,TotalC1,
            TotalDate4,TotalDate3,TotalDate2,TotalDate1,
            TotalD4,TotalD3,TotalD2,TotalD1,
            TotalR4,TotalR3,TotalR2,TotalR1);
        });
    
});
