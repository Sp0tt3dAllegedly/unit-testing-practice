function fizzBuzz(){

for (let i=0; i<100; i++){

    if ( i % 3 === 0){
        return 'fizz';
    }
    else if ( i % 5 === 0){
        return 'buzz';
    }
    else if ( i % 3 === 0 && i % 5 === 0){
        return 'fizzBuzz';
    }
    else return i
    }

}

module.exports = fizzBuzz;
