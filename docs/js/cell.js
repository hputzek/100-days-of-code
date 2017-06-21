theBody = {
    $cell: true,
    id: "cell",
    $init: function(){
        this._setGradient();
        this._applyGradient();
    },
    _setGradient: function() {
        var gradient = this._colorData[Math.floor((Math.random() * this._colorData.length) + 1)];
        tempColorFrom = gradient[0];
        tempColorTo = gradient[1];
        this._settings.css = this._settings.backgroundImage + this._settings.gradientType + tempColorFrom + this._settings.gradientStart + tempColorTo + this._settings.gradientEnd;
    },
    _applyGradient: function () {
        var elements = this.querySelectorAll('.gradient');

        for (var i = 0, len = elements.length; i < len; i++) {
            elements[i].setAttribute('style',this._settings.css);
        }
    },
    _settings: {
        backgroundImage: "background-image: ",
        gradientType: "linear-gradient( 135deg, ",
        gradientStart: " 0%, ",
        gradientEnd: " 100%)",
        css: "color: red"
    },
    _colorData: [
        ["#FDEB71", "#F8D800"],
        ["#ABDCFF", "#0396FF"],
        ["#FEB692", "#EA5455"],
        ["#CE9FFC", "#7367F0"],
        ["#90F7EC", "#32CCBC"],
        ["#FFF6B7", "#F6416C"],
        ["#81FBB8", "#28C76F"],
        ["#E2B0FF", "#9F44D3"],
        ["#F97794", "#623AA2"],
        ["#FCCF31", "#F55555"],
        ["#F761A1", "#8C1BAB"],
        ["#43CBFF", "#9708CC"],
        ["#5EFCE8", "#736EFE"],
        ["#FAD7A1", "#E96D71"],
        ["#FFD26F", "#3677FF"],
        ["#A0FE65", "#FA016D"],
        ["#FFDB01", "#0E197D"],
        ["#FEC163", "#DE4313"],
        ["#92FFC0", "#002661"],
        ["#EEAD92", "#6018DC"],
        ["#F6CEEC", "#D939CD"],
        ["#52E5E7", "#130CB7"],
        ["#F1CA74", "#A64DB6"],
        ["#E8D07A", "#5312D6"],
        ["#EECE13", "#B210FF"],
        ["#79F1A4", "#0E5CAD"],
        ["#FDD819", "#E80505"],
        ["#FFF3B0", "#CA26FF"],
        ["#FFF5C3", "#9452A5"],
        ["#F05F57", "#360940"]
    ]
}
