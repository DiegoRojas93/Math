const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function average(array) {
    
    let sum = array.reduce((acum, value) => acum + value )
    
    const average = sum / array.length
    
    // console.log(average);
}

average(list)


function median (array) {
    let isEven = !(array.length % 2),
        position,
        median;

    if (isEven) {
        position = Math.floor( array.length / 2 )
        median = (position + (position + 1)) / 2
        console.log(median);
    } else {
        position = Math.floor( array.length / 2 )
        median = array[position];
        console.log(median);
    }
}

median(list)