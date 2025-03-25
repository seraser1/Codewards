// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'


const initializeNames = (name) => {
    const arrOfNames = name.split(' ');
    if(arrOfNames.length > 0 && arrOfNames.length < 3) return name
    else if(arrOfNames.length >= 3) {
        const resFirst = arrOfNames.shift();
        const resLast = arrOfNames.pop();
        const resCentr = arrOfNames
        return resFirst + ' ' + resCentr.map(el => el[0] + '.').join(' ') + ' ' + resLast;
    }
}


console.log(initializeNames('Jack Ryan' ));
console.log(initializeNames('Lois Mary Lane' ));
console.log(initializeNames('Alice Betty Catherine Davis'));

