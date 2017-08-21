function changeStockFlowchart(newMajor) {
    $(".block-outline").addClass("hide-block");
    localStorage.setItem("savedFlowChart", newMajor);
    loadChart(newMajor);
    closeMenu();
    popStack();
}

function openMenu() {
    closeSiteNav();
    if (menuStack.length > 0) {
        $(".back-button").show();
    };
    
    $(".welcome-container").addClass("fade-white");
    $("#edit-flowchart").addClass("unclickable");
    $(".header").addClass("shrink-header");
    $("#menu-button").addClass("open").removeClass("closed");
    $(".menu-modal").removeClass("slide-out-left");
    
    $(".popup-message").remove();
    $(".menu-modal, .disabled").show();
}

function closeMenu() {
    closeSiteNav();
    $("#menu-button").removeClass("open").addClass("closed");
    $(".checked").removeClass("checked");
    $("#edit-flowchart").removeClass("unclickable");
    $(".header").removeClass("shrink-header");
    $(".menu-modal").addClass("slide-out-left");
    $(".menu-modal, .popup-message, .disabled, .back-button, .block-menu").fadeOut("fast");
}

function changeWindow(target, title=null) {
    var element = "";
    var view;
    var currentWindow = $(".menu-modal").children();
    
    if (title != null) {
        element = `<h2 class="modal-header slide-in-right">${title}</h2>`;
    }
    switch(target) {
        case "chart-browser":
            view = newChartBrowserView();
            break;
        case "utilities-browser":
            view = newUtilitiesView();
            break;
        case "login-button":
            view = newLoginView();
            break;
        case "signup-button":
            view = newSignupView();
            break;
        case "settings-button":
            view = newSettingsView();
            break;
        case "department-selector":
            view = newDepartmentSelectorView();
            break;
        case "course-selector":
            view = newCourseSelectorView();
            break;
                 }
    $(".back-button").show();
    element = element.concat(view);
    $(".menu-modal").empty().append(element);
    menuStack.push(currentWindow.toArray());
}

function popStack() {
    var window = menuStack.pop();
    $(".menu-modal").html(window);
    if (menuStack.length == 0) {
        $(".back-button").fadeOut("fast");
    }
    setupAutocomplete();
}

function emptyStack() {
    var view;
    while (menuStack.length > 0) {
        view = menuStack.pop();
    }
    $(".menu-modal").html(view);
    $(".back-button").fadeOut("fast");
}

function fetchCharts() {
    $(".menu-modal").empty().append("<h2 class='modal-header slide-in-right'>New Flowchart</h2>");
    if (!availableCharts) {
        $(".menu-modal").append(`<h3 class="major-option slide-in-right">Couldn't Get Majors</h3>`);
    }
    $.each(availableCharts, function(index, value) {   
        var major = value;
        major = major.split('_').join(" ");
        if (major != $(".degree-name").text()) {
            $(".menu-modal").append("<h3 class='major-option slide-in-right' id='"+value+"' onclick='changeStockFlowchart(this.id)'>"+major+"</h3>");
        }
    });
}

function showCurriculumSheet() {
    var major = $(".header-title").text();
    major = major.split(' ').join("%20");
    var url = "http://flowcharts.calpoly.edu/downloads/curric/15-17."+major+".pdf";
    closeMenu();
    $(".external-site-modal").show();
    var element = 
        `<object data="${url}" type="application/pdf" width="100%" height="100%">
            <p>Hmm.. There doesn't seem to be a curriculum sheet available</p>
        </object>`
    $(".site-container").html(element);
    
}

/* Takes JSON and translates it into an HTML element */
//
//function submitLoginInfo() {
//    var usernameEntered = $("#login-username").val();
//    var password = $("#login-password").val();
//    var header = window.btoa(usernameEntered+":"+password);
//    console.log("Header: "+header);
//    var request = $.ajax({
//        type: "GET",
//        url: apiURL+"/authorize",
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader ("Authorization", "Basic " + header);
//        },
//    });
//
//    request.done(function() {
//        popStack();
//        $("#signup-button, #login-button").hide();
//        userName = usernameEntered;
//        loggedIn = true;
//        alert("Welcome, "+userName);
//        getUserCharts();
//    })
//
//    request.fail(function(jqXHR, textStatus, errorThrown) {
//        console.log(jqXHR);
//        console.log(textStatus);
//        console.log(errorThrown);
//        alert("Username or password may be incorrect :/")
//    });
//}
//
//function submitSignupInfo() {
//    var username = $("#signup-username").val();
//    var password = $("#signup-password").val();
//    var header = window.btoa(username+":"+password);
//    console.log("Header: "+header);
//    var request = $.ajax({
//        type: "POST",
//        url: apiURL+"/useradd",
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader ("Authorization", "Basic " + header);
//        },
//    });
//
//    request.done(function() {
//        popStack();
//        $("#signup-button, #login-button").hide();
//    });
//
//    request.fail(function(jqXHR, textStatus, errorThrown) {
//        console.log(jqXHR);
//        console.log(textStatus);
//        console.log(errorThrown);
//        if (errorThrown == "CONFLICT") {
//            alert("'"+username +"' is taken. Please choose a different username.");
//        }
//    });
//}
//
//function validateForm(form) {
//    var isValid = true;
//    form.each(function() {
//        if ( $(this).val() === '' )
//            isValid = false;
//    });
//    return isValid;
//}