const lista = [1, 10, 14, 3, 24, 14, 10, 35, 12, 14]

const platziMath = {}

platziMath.averiage = function average(array) {
    
    let sum = array.reduce((acum, value) => acum + value )
    
    const average = sum / array.length
    
    return average
}

// average(list)


platziMath.median = function median (array) {

    let orderedArray = array.sort((a, b) => a - b),
        isEven = !(orderedArray.length % 2),
        position,
        median;

    console.log(orderedArray);

    if (isEven) {
        position = Math.floor( orderedArray.length / 2 )
        median = (orderedArray[position] + orderedArray[(position - 1)]) / 2
        return(median);
    } else {
        position = Math.floor( orderedArray.length / 2 )
        median = orderedArray[position];
        return(median);
    }
}

// median(list)

platziMath.fashon = function fashon (array) {

    const storage = {};
    
    array.forEach( element => {
        !storage[element] ? storage[element] = 1 : storage[element]++;
    });

    let rep = Object.values(storage),
        memory = 0;

    rep.forEach( num => {
        if (num > memory) memory = num
    });

    return memory
}

// fashon(lista)