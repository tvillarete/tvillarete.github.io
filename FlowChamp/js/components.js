/* Table of contents
 *  - Flowchart Components
 *  - Menu View Components
 */

/* Flowchart Components */
var startYear = 2015;
function newYearComponent(id, yearTitle, year = startYear) {
    return `
        <div class="year" id="${id}" name="${year}">
            <div class="head">
                <h3>${yearTitle}</h3>
            </div>
            <div class="quarter-holder">
                ${newQuarterComponent("Fall", year)}
                ${newQuarterComponent("Winter", year+1)}
                ${newQuarterComponent("Spring", year+1, /* lastQuarter */ true)}
            </div>
        </div>
    `;
}

function newQuarterComponent(season, year, lastQuarter = false) {
    var quarter =  `
        <div class="quarter" name="${season} ${year}">
            <div class="add-block-button">
                <p>&plus; Add</p>
            </div>
            <div class='quarter-head'>
                <h4 class="season">${season}</h4>
                <h4 class="quarter-unit-count"></h4>
            </div>
        </div>
    `;
    if (!lastQuarter) {
        quarter = quarter.concat(`<div class="quarter-divider"></div>`);
    }
    return quarter;
}


function newBlockComponent(block_metadata, course_data) {
    var course_type = block_metadata.course_type.toLowerCase().split(' ').join("-");
    return `
        <div class="block-outline show-block">
            <div class="edit-block-button" onclick="select(this)">
                <i class="material-icons">check</i>
            </div>
            <div class="block ${course_type}" id="${course_data._id}" value="${course_data.units}">
                <div class="ribbon"></div>
                <div class="block-title">
                    <h6>${course_data.title}</h6>
                </div>
                <div class="block-catalog">
                    <h5 class="block-catalog-info">${course_data.department} ${course_data.course_number} (${course_data.units})</h5>
                </div>
                <div class="course-info" onclick="popupMessage('${course_data.title}', '${course_data.description}', 'true', '${"Prereqs: "+course_data.prereqs}')">?</div>
            </div>
        </div>
    `;
}

function newElectiveBlockComponent(block_metadata) {
    var course_type = block_metadata.course_type.toLowerCase().split(' ').join("-");
    return `
        <div class="block-outline show-block">
            <div class="edit-block-button" onclick="select(this)">
                <i class="material-icons">check</i>
            </div>
            <div class="block ${course_type}" value=0>
                <div class="ribbon"></div>
                <div class="block-title">
                    <h6>${block_metadata.elective_title}</h6>
                </div>
                <div class="block-catalog">
                    <h5>(4)</h5>
                </div>
            </div>
        </div>
    `;
}

/* Menu Views */ 
function newChartBrowserView() {
    var element = "<h2 class='modal-header slide-in-right'>New Flowchart</h2>";
    if (!availableCharts) {
        element = element.concat("<h3 class='major-option slide-in-right'>Couldn't Get Majors</h3>");
    }
    $.each(availableCharts, function(index, value) {
        var major = value;
        major = major.split('_').join(" ");
        if (major != $(".degree-name").text()) {
            element = element.concat("<h3 class='major-option slide-in-right' id='"+value+"' onclick='changeStockFlowchart(this.id)'>"+major+"</h3>");
        }
    });
    element = element.concat("<h3 class='list-item slide-in-right'>Don't see yours?</h3>");
    return element;
}

function newUtilitiesView() {
    var element = `
        <h2 class="modal-header slide-in-right">Degree Information</h2>
        <h3 class="list-item slide-in-right" onclick="showCurriculumSheet()">Get Curriculum Sheet</h3>
        <h4 class="modal-sub-header">Completed Units</h4>
        <h4 class="modal-statistic" id="ge-count">GE's: ${completedGECount}</h4>
        <h4 class="modal-statistic" id="support-count">Support: ${completedSupportCount}</h4>
        <h4 class="modal-statistic" id="major-count">Major: ${completedMajorCount}</h4>
    `;
    return element;
}

function newLoginView() {
    var element = `
        <h2 class="modal-header slide-in-right">Log In</h2>
        <form name="signup" class="slide-in-right" method="POST" action="">
            <input id="login-username" type="text" placeholder="Username" required">
            <input id="login-password" type="password" placeholder="Password" required">
        </form>
        <button type="button" class="slide-in-right">Submit</button>
    `;
    return element;
}

function newSignupView() {
    return `
        <h2 class="modal-header slide-in-right">Sign up</h2>
        <form name="signup" class="slide-in-right" method="POST" action="">
            <input id="signup-username" type="text" placeholder="Username" required">
            <input id="signup-password" type="password" placeholder="Password" required">
        </form>
        <button type="button" class="slide-in-right">Submit</button>
    `;
}

function newSettingsView(val) {
    return `
        <h2 class="modal-header slide-in-right">Settings</h2>
        <h3 class="toggle-button slide-in-right" id="toggle-summerQuarter">Show Summer Quarter
            <label class="switch">
                <input type="checkbox" ${val}>
                <div class="toggle round" onclick="changeSetting('summerQuarter', this)"></div>
            </label>
        </h3>
        <h3 class="list-item slide-in-right" id="year-selector" onclick="changeWindow(this.id);">Choose Start Year</h3>
    `;
}

function newYearSelectorView() {
    var element =  `
        <h2 class="modal-header slide-in-right">Choose Start Year</h2>
    `;
    var date = new Date();
    var year = date.getFullYear();
    console.log(year);
    for(i = 2020; i >= year-4; i--){
        element = element.concat(`<h3 class="list-item slide-in-right" value="${i}" onclick="changeStartYear(this)">${i}</h3>`);
    }
    return element;
}







