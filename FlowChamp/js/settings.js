var savedSettings = localStorage.settings ? JSON.parse(localStorage.settings) : null;
var settings = savedSettings ? savedSettings : {summerQuarter: false};

function getSettings() {
    var settingsOptions = [
        'summerQuarter',
    ], 
        value;
    settingsOptions.forEach(function(setting) {
        value = JSON.parse(localStorage.getItem(setting));
        checkSetting(setting, value);
    });
}

function checkSetting(setting, value) {
    console.log("Setting: "+setting);
    toggleSummerQuarter(settings.summerQuarter)
}

function changeSetting(setting, value) {
    switch(setting) {
        case 'summerQuarter':
//            value = $(value).prop("checked");
//            alert(value);
//            settings.summerQuarter = value;
//            toggleSummerQuarter(value);
            break;
                  }
    localStorage.settings =  JSON.stringify(settings);
}

function toggleSummerQuarter(value) {
    if (value == true) {
        $(".summer-quarter").show();
    } else {
        $(".summer-quarter").hide();
        $(".summer-quarter").sortable({
            disabled: true
        });
    }
}

function changeStartYear(yearItem) {
    $(".year").each(function(key, el) {
        $(this).attr("name", parseInt($(yearItem).text())+key);
    });
    closeMenu();
    $(".back-button").trigger("click");
}
