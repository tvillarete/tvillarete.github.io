const apiURL = "https://ssh.marshhouse.tech:5500/";
var menuStack = [];
var availableCharts = [];
var departments = [];
var departmentCourses = [];
var completedGECount = 0;
var completedSupportCount = 0;
var completedMajorCount = 0;
var savedChartBuilder;
//var userName;
//var loggedIn = false;
//var signupURL = "";
//var userCharts = [];
    
$(document).ready(function() {
    checkWindowSize();
    $(".option-modal, .disabled, .edit-container").hide();
    $('#menu-button').click(function(){
        if (!$(this).hasClass("open")) {
            $(this).addClass('open');
            openMenu();
        } else {
            $(this).removeClass('open');
            closeMenu();
        }
    });
});

$.ajaxSetup({
    beforeSend:function() {
        $(".loading").addClass("progress-bar");
    },
    complete:function() {
        $(".progress-bar").removeClass("progress-bar");
    }
});

$(window).resize(function() {
    checkWindowSize();
});

function loadTasks() {
    checkWindowSize();
    setupChartComponents();
    getLastChart();
    getSettings();
    getAvailableCharts();
    fetchDepartments();
}

function getAvailableCharts() {
    var request = $.get({
        url: apiURL+"stock_charts/15-17"
    });
        
    request.done(function(data) {  
        availableCharts = [];
        $.each(data.charts, function(index, value) {   
            availableCharts.push(value);
        });
    });
}

function checkWindowSize() {
    if ($(window).width() <= 650){	
		$('ul.tabs').tabs();
        $("body").removeClass("desktop");
	} else {
        $("body").addClass("desktop");
        $(".year").show();
    }
}

function closeSiteNav() {
    $(".external-site-modal").fadeOut("fast");
}

function closePopupMessage() {
    $(".popup-message").remove();
    closeMenu();
}

function popupMessage(title, message, dismiss=false, postNote=false) {
    var element = 
        `<div class="popup-message z-depth-5">
            <h2 class="popup-title">${title}</h2>
            <h3 class="popup-body">`+message+`</h3>
            <h4 class="popup-ps">${postNote ? postNote : ""}</h4>
            <h4 class="close-popup-message ${dismiss ? "" : "hidden"}" onclick="closePopupMessage()">Okay</h4>
         </div>`;
    $(".disabled").show();
    $("body").append(element);
}