

//callback function
function callback(countNumber, countFunction, messageFunction) {
    var count = showCount(countNumber);
    console.log('count', count)

    setTimeout(function () {

        if (count >= 1) {

            count = showCount(countNumber);
            callback(count, countFunction, messageFunction);
        } else {
            messageFunction();
        }
    }, 1000)
}


//function to show count
function showCount(count) {
    var currentHeading = document.getElementById('showCount');
    currentHeading.innerText = count;
    count--;
    return count;




}


//function to display message
function showMessage(message) {
    var img = document.createElement('img');

    img.src = 'https://static.toiimg.com/photo/70659282.cms';
    img.alt = 'Happy IndependenceDay';
    img.setAttribute('Class', 'img-fluid');

    document.getElementById('imgDiv').append(img);

    var hideDiv = document.getElementById('counterDiv');
    hideDiv.innerHTML = ''
}

//call the function to display the output
callback(10, showCount, showMessage);