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
        var TotalDate1 = [],TotalDate2 = [],TotalDate3 = [],TotalDate4 = [];
        var TotalC1 = [],TotalC2 = [],TotalC3 = [],TotalC4 = [];
        var TotalR1 = [],TotalR2 = [],TotalR3 = [],TotalR4 = [];
        var TotalD1 = [],TotalD2 = [],TotalD3 = [],TotalD4 = [];
        
        $.getJSON(url,function (result) {

            var Deaths1 = 0,Deaths2 = 0,Deaths3 = 0,Deaths4 = 0;
            var Recovery1 = 0,Recovery2 = 0,Recovery3 = 0,Recovery4 = 0;
            var Confirmed1 = 0,Confirmed2 = 0,Confirmed3 = 0,Confirmed4 = 0;

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
            $("#LastDate").append(Date1);
            $("#LastDate1").append(Date1);
            $("#LastDate2").append(Date1);

            demo.initDashboardPageCharts(TotalC4,TotalC3,TotalC2,TotalC1,
            TotalDate4,TotalDate3,TotalDate2,TotalDate1,
            TotalD4,TotalD3,TotalD2,TotalD1,
            TotalR4,TotalR3,TotalR2,TotalR1);
            
        });
    
});
