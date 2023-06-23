const lista = [1, 10, 14, 3, 24, 14, 10, 35, 12, 14]

function average(array) {
    
    let sum = array.reduce((acum, value) => acum + value )
    
    const average = sum / array.length
    
    console.log(average);
}

// average(list)


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

// median(list)


function fashon (array) {

    const storage = {};
    
    array.forEach( element => {
        !storage[element] ? storage[element] = 1 : storage[element]++;
    });
    
    const newArray = Object.entries(storage)

    const list = newArray.sort(( a, b ) => a[1] - b[1])

    const data = list[ list.length - 1 ];

    console.log(`La moda del array es el numero ${data[0]} debido a que repite ${data[1]} veces`);
}

fashon(lista)