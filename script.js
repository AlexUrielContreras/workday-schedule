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
            .addClass(`col-10 tasks ${blockColor(i+9)} hour${i}`)

        let saveBtn = $(`<button type="submit" id="${i}">`).addClass('saveBtn col-1')
        let timeBlock = $('.container')
        timeP.text(`${workHours[i]} ${timeOfDay(workHours[i])}`)
        div.append(timeP, textarea, saveBtn)
        timeBlock.append(div)
    }
    saveTask()
};



function blockColor(data){
    let time = moment().format('H').split(':')[0]
    if (time < data){
        return 'future'
    }else if (time == data){
        return 'present'
    }else {
        return 'past'
    }
}

function saveTask() {
    $('button').on('click', function(){
        const id = $(this).attr('id')
        const lol = `hour${id}`
        const text = $(`.hour${id}`).val()
        localStorage.setItem(lol, text)
    })
    $('.hour0').text(localStorage.getItem('hour0'));
    $('.hour1').text(localStorage.getItem('hour1'));
    $('.hour2').text(localStorage.getItem('hour2'));
    $('.hour3').text(localStorage.getItem('hour3'));
    $('.hour4').text(localStorage.getItem('hour4'));
    $('.hour5').text(localStorage.getItem('hour5'));
    $('.hour6').text(localStorage.getItem('hour6'));
    $('.hour7').text(localStorage.getItem('hour7'));
    $('.hour8').text(localStorage.getItem('hour8'));
    
}



displayBlocks();
