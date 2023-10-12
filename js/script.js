const wrapperEl = document.getElementById('wrapper');
for(let c = 1; c <= 100; c++){
    let bgBox;
    const boxEl = document.createElement('div');
    if(c % 3 === 0 && c % 5 === 0){
        bgBox = 'fizz-buzz';
        const fizzBuzz = ('Fizz-Buzz');
        boxEl.innerHTML = fizzBuzz;
        console.log(fizzBuzz);
    } else if(c % 3 === 0){
        bgBox = 'fizz';
        const fizz = ('Fizz');
        boxEl.innerHTML = fizz;
        console.log(fizz);
    } else if(c % 5 === 0){
        bgBox = 'buzz';
        const buzz = ('Buzz');
        boxEl.innerHTML = buzz;
        console.log(buzz);
    } else{
        bgBox = 'number';
        boxEl.innerHTML = c;
        console.log(c);
    }
    wrapperEl.append(boxEl);
    boxEl.className = `box ${bgBox} d-flex justify-content-center align-items-center `;
}