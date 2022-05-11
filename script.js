const workHours = [9, 10, 11, 12, 1, 2, 3, 4,5];

function timeOfDay() {
    $('#currentDay').text(moment().format('dddd , MMM Do'))
}

function ap(timeArr) {
    if (timeArr > 6 && timeArr < 12) {
        return 'am'
    }else {
        return 'pm'
    }
}
function displayBlocks() {
    for (let i = 0; i < workHours.length; i++) {
        const div = $('<div>').addClass('jumbotron row')

        let timeDiv = $('<p>')
            .addClass(' hour col-1')

        let textarea = $('<textarea>').addClass('col-10')

        let saveBtn = $('<button>').addClass('saveBtn col-1')
        let timeBlock = $('.container')
        timeDiv.text(`${workHours[i]} ${ap(workHours[i])}`)
        div.append(timeDiv, textarea, saveBtn)
        timeBlock.append(div)
    }
};


displayBlocks();
timeOfDay();
