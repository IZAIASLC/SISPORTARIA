var numLoadings = 0;
var Loading = {
    
    showAll: function () {
        $('.form-loading').css('margin-left', (($('body').width() - 200) / 2) + 'px');
        numLoadings++;
        $("#loading").fadeIn(300);
    },

    hideAll: function () {
        numLoadings--;
        if (numLoadings < 0) numLoadings = 0;
        if (numLoadings == 0) $("#loading").fadeOut(500);
    }
}
