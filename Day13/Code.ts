const fs = require('fs');
let list:any;
try{
    list = fs.readFileSync('input').toString();
}catch(e){
    console.log(e);
}


let num: number = Number(list.split('\n')[0]);
let buses: number[] = list.split('\n')[1].split(',').filter(curr => curr!= 'x').map(curr => Number(curr))

/* Part 1
    Btw, you don't even need to write code to solve the first part. lolz
*/
let nextBuses: object[] = buses.map(curr => {
    return ({
        nextBus: Math.ceil(num/curr)*curr,
        busId: curr
    })
});

let ans = Math.min(...nextBuses.map(curr => curr['nextBus']))
ans = (ans-num)*nextBuses.find(curr => curr['nextBus'] == ans)['busId']
console.log(`Part 1: ${ans}`);

/* 
Part 2
Code shamelessly stolen from 
Hey Programmers => https://www.youtube.com/watch?v=4_5mluiXF5I
*/
buses = list.split('\n')[1].split(',').map(curr => curr === 'x'? 1: Number(curr));
let startTime = 0;
let stepSize = buses[0];

for(let i = 1; i < buses.length; i++){
    let bus = buses[i];

    while((startTime + i)% bus  !== 0)
        startTime += stepSize;

    stepSize *= bus;
}

console.log(`Part 2: ${startTime}`);