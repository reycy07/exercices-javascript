function fizzBuzz() {
    let number = '';
    for (let i = 1;  i <= 100 ; i++) {
        number =`${i} `; 
        if ((i % 3 === 0) && (i % 5 === 0) ) {
            number = number + "fizzbuzz";
        }else if ((i % 3 === 0)) {
            number = number + "fizz";
        }else if ((i % 5 === 0)) {
            number = number + "buzz";
        }
        console.log(number);
    };

}

fizzBuzz();