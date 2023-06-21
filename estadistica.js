const list = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9]

function average(array) {
    
    let sum = array.reduce((acum, value) => acum + value )
    
    const average = sum / array.length
    
    // console.log(average);
}

average(list)


function median (array) {

    let orderedArray = array.sort((a ,b) => a - b),
        isEven = !(orderedArray.length % 2),
        position,
        median;

    console.log(orderedArray);

    if (isEven) {
        position = Math.floor( orderedArray.length / 2 )
        median = (position + (position + 1)) / 2
        console.log(median);
    } else {
        position = Math.floor( orderedArray.length / 2 )
        median = orderedArray[position];
        console.log(median);
    }
}

median(list)