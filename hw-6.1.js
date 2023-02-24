let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'm'];

function countEvenOdd(){
    let countEven = 0;
    let countOdd = 0;
    let countOther = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }
    return [countEven, countOdd, countOther];
}

let rez = countEvenOdd(arr);

console.log("Четные " + rez[0]);
console.log("Нечетные " + rez[1]);
console.log("Другие " + rez[2]);


