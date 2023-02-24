function getNumber (number) {
    if (number > 1000) return "Данные неверны";
    if (number === 0) return  "Ноль число ненатуральное";
    if (number === 1) return "Один - не простое и не составное";

    let divisionsCount = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) divisionsCount++;
    }

    if (divisionsCount === 2)
        return "Число простое.";
    else
        return "Число составное.";
}

console.log(getNumber(1));