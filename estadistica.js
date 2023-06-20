function average(array) {

    let sum = array.reduce((acum, value) => acum + value )
    
    const average = sum / array.length
    
    console.log(average);
}

average([1, 2, 3, 4, 5, 6, 7, 8, 9  ])