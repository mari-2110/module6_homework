function interval (number1, number2) {
    let prog = number1;
    let intervalId = setInterval(function () {
        if (prog <= number2) {
            console.log(prog);
            prog++;
        }
        else clearInterval(intervalId);
    }, 1000);
}
interval(1, 10);