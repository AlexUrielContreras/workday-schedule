const workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// displays the current date
$('#currentDay').text(moment().format('dddd , MMM Do'))

function timeOfDay(timeArr) {
    if (timeArr > 6 && timeArr < 12) {
        return 'am'
    }
    return 'pm'
}
function displayBlocks() {
    for (let i = 0; i < workHours.length; i++) {
        const div = $('<div>').addClass('row')

        let timeP = $('<p>')
            .addClass(`hour col-1`)

        let textarea = $('<textarea>')
            .addClass(`col-10 tasks ${blockColor(i+9)}`)
            .attr('id', i + 9)

        let saveBtn = $('<button>').addClass('saveBtn col-1')
        let timeBlock = $('.container')
        timeP.text(`${workHours[i]} ${timeOfDay(workHours[i])}`)
        div.append(timeP, textarea, saveBtn)
        timeBlock.append(div)
    }
};



function blockColor(data){
    let time = moment().format('H').split(':')[0]
    console.log(time)
    console.log(data)
    if (time < data){
        return 'future'
    }else if (time == data){
        return 'present'
    }else {
        return 'past'
    }
}


displayBlocks();


