function getPINs(observed) {
    let observed_arr = observed.split('');
    console.log(`observed_arr - ${observed_arr}`)
    let growing_arr = key_map[observed_arr[0]];
    console.log(`growing_arr - ${growing_arr}`)
    for (let i = 1; i < observed_arr.length; i++) {
        growing_arr = plus_next_number(observed_arr[i], growing_arr, key_map);
        console.log(`growing_arr - ${growing_arr}`)
    };

    return growing_arr;




}

function plus_next_number(current_number, input_arr, key_map) {
    plused_arr = key_map[current_number];
    console.log(`plused_arr - ${plused_arr}`)
    growing_arr = [];
    console.log(`growing_arr - ${growing_arr}`);

    for (let string of input_arr) {
        if (string.length >= 2) {
            var arr = string.split('');
        } else {
            var arr = [string];
        }


        for (let plused_number of plused_arr) {
            let bufer_arr = [plused_number];

            bufer_arr = arr.concat(bufer_arr);

            growing_arr.push(bufer_arr.join(''));
            console.log(`growing_arr - ${growing_arr}`);
        }
    }



    return growing_arr
}




var key_map = [
    [8, 0],
    [1, 2, 4],
    [1, 2, 3, 5],
    [2, 3, 6],
    [1, 4, 5, 7],
    [2, 4, 5, 6, 8],
    [3, 5, 6, 9],
    [4, 7, 8],
    [5, 7, 8, 9, 0],
    [6, 8, 9]
];

//console.log(plus_next_number(3, ['34', '56'], key_map))
console.log(getPINs('11'))


// describe('example tests', function() {
//     var expectations = {
//         "8": ["5", "7", "8", "9", "0"],
//         "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
//         "369": ["339", "366", "399", "658", "636", "258", "268", "669", "668", "266", "369", "398", "256", "296", "259", "368", "638", "396", "238", "356", "659", "639", "666", "359", "336", "299", "338", "696", "269", "358", "656", "698", "699", "298", "236", "239"]
//     };

//     for (var pin in expectations) {
//         Test.assertSimilar(getPINs(pin).sort(), expectations[pin].sort(), 'PIN: ' + pin);
//     }
// });