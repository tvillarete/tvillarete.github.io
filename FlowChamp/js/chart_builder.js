$(document).on('click', '.add-block-button', function() {
    if (!$(this).parent().hasClass("appending") || menuStack.length == 0) {
        emptyStack();
        $(".quarter").removeClass("appending");
        $(this).parent().addClass("appending");
        showCourseSelector();
    } else {
        openMenu();
    }
});

function setupBuilder() {
    if (!$("#chart-builder").hasClass("building")) {
        $("#chart-builder").addClass("building");
        $(".header-title").text("New Flowchart");
        $(".quarter").each(function(index, element) {
            $(this).find(".quarter-unit-count").text("[0]");
            $(this).fadeOut("fast", function() {
                $(".add-block-button").show();
                $(this).fadeIn("fast");
            });
        });
        $(".block-outline").fadeOut("fast", function() {
            $(".block").remove();
        });
    }
    closeMenu();
}

function showCourseSelector() {
    changeWindow("department-selector", "Departments");
    setupAutocomplete();
    openMenu();
}

function setupAutocomplete() {
    $( "#departmentSearch" ).autocomplete({
        source: departments,
        appendTo: ".menu-modal",
        select: function(event, ui) {
            fetchDepartmentCourses(ui.item.label);
            $( "#departmentSearch" ).autocomplete( "destroy" );
            $(".department-item").fadeIn("slow");
        },
        response: function( event, ui ) {
            $(".department-item").hide();
        }
    });
}

function newDepartmentSelectorView() {
    var element = "";
    var uiWidget = `
        <div class = "ui-widget list-item slide-in-right">
            <input class="input-field" id ="departmentSearch" placeholder="Search" maxlength="4">
        </div>`
    element = element.concat(uiWidget);
    $.each(departments, function(index, value) {
        element = element.concat(`<h3 class="list-item department-item slide-in-right" name="${value}" onclick="fetchDepartmentCourses(this)">${value}</h3>`);
    });
    return element;
}

function newCourseSelectorView() {
    var element = "";
    $.each(departmentCourses, function(index, value) {
        if (index > 0) {
            element = element.concat(`<h3 class="list-item course-item slide-in-right" 
             name="${departmentCourses[0] /* Department Name */}/${value}" onclick="fetchCourse(this)">${value}</h3>`);
        }
    });
    return element;
}

function fetchDepartments() {
    var deps = [];
    var request = $.get({
        url: apiURL+"courses"
    });
        
    request.done(function(data) { 
        data.departments.forEach(function(value) {
            departments.push(value);
        });
    });
}

function fetchDepartmentCourses(departmentItem) {
    departmentCourses = [];
    var departmentName = $(departmentItem).attr("name");
    var request = $.get({
        url: `${apiURL}courses/${departmentName}`
    });
        
    request.done(function(data) { 
        departmentCourses.push(departmentName);
        data.courses.forEach(function(value) {
            departmentCourses.push(value);
        });
    });
    
    request.then(function() {
        changeWindow("course-selector", departmentName);
    })
}

function fetchCourse(courseItem) {
    var courseName = $(courseItem).attr("name");
    var request = $.get({
        url: `${apiURL}courses/${courseName}`
    });
        
    request.done(function(data) { 
        appendBlock(data, courseName);
    });
    
    closeMenu();
}

function appendBlock(data, courseName) {
    var catalogNum = courseName.split("/").join(" ");
    var prereqs = data.prereqs ? data.prereqs : "None";
    var block_type = "support-class",
        id = 0,
        ge_type = "support-class";
     var element =  `
        <div class="block-outline show-block">
            <div class="edit-block-button" onclick="select(this)">
                <i class="material-icons">check</i>
            </div>
            <div class="block ${block_type}" id="${id}-block" name="${ge_type}" value="${data.units}">
                <div class="ribbon"></div>
                <div class="block-title">
                    <h6>${data.title}</h6>
                </div>
                <div class="block-catalog">
                    <h5>${catalogNum} (${data.units})</h5>
                </div>
                <div class="course-info" onclick="popupMessage('${data.title}', '${data.description}', 'true', '${"Prereqs: "+prereqs}')">?</div>
            </div>
        </div>
    `;
    
    $(element).appendTo(".appending");
    calculateUnits();
}