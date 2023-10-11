const wrapperEl = document.getElementById('wrapper');


for(let c = 1; c <= 100; c++){
    let bgBox;
    const boxEl = document.createElement('div');
    if(c % 3 === 0 && c % 5 === 0){
        bgBox = 'fizz-buzz';
        const fizzBuzz = ('Fizz-Buzz');
        boxEl.className = `box ${bgBox} d-flex justify-content-center align-items-center `;
        boxEl.innerHTML = fizzBuzz;
        wrapperEl.append(boxEl);
    } else if(c % 3 === 0){
        bgBox = 'fizz';
        const fizz = ('Fizz');
        boxEl.className = `box ${bgBox} d-flex justify-content-center align-items-center `;
        boxEl.innerHTML = fizz;
        wrapperEl.append(boxEl);
    } else if(c % 5 === 0){
        bgBox = 'buzz';
        const buzz = ('Buzz');
        boxEl.className = `box ${bgBox} d-flex justify-content-center align-items-center `;
        boxEl.innerHTML = buzz;
        wrapperEl.append(boxEl);
    } else{
        bgBox = 'number';
        boxEl.className = `box ${bgBox} d-flex justify-content-center align-items-center `;
        boxEl.innerHTML = c * 1;
        wrapperEl.append(boxEl);
    }
    
    
}