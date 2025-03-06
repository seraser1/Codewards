// Agent 47, you have a new task!
// Among citizens of the city X are hidden 2 dangerous criminal twins.
// Your task is to identify them and eliminate!

// Everyone except the twins are single-born (i.e., unique individuals).

// Given an array of integers, your task is to find two same numbers and return one of them. For example, in the array ```` the answer is 2.

// If there are no twins in the city - return None or the equivalent in the language that you are using.


const elimination = (arr) => {
    const notDublicat = new Set();
    for(let i = 0; i < arr.length; i++){
        if(notDublicat.has(arr[i])) return arr[i]
        notDublicat.add(arr[i])
    }
    return null;
}


console.log(elimination([1, 31, 53, 3, 34, 5, 6]));
console.log(elimination([
    374,
    805,
    0,
    0,
    266,
    504,
    722,
    610,
    583,
    85
]));

