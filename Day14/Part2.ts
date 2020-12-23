const fs = require('fs');
let list:any;
try{
    list = fs.readFileSync('input').toString();
}catch(e){
    console.log(e);
}


// Compilnig Data into proper form
list = list.split('\n').map(curr => {
    if(curr.substring(0,4) === 'mask')
        return '\n\n'+curr;
    return '\n'+curr;
}).join('').split('\n\n')
list = list.map(curr =>{
    return curr.split('\n');
})
list.shift();

list = list.map(curr => {
    let obj = new Object();
    obj['mask'] = curr[0].substring(curr[0].lastIndexOf(' ')+1);
    curr.shift();
    curr = curr.map(secCurr => {
        let o = new Object();
        o['address'] = Number(secCurr.substring(secCurr.indexOf('[')+1,secCurr.indexOf(']')));
        o['value'] = Number(secCurr.substring(secCurr.lastIndexOf(' ')));

        return o;
    })
    obj['operations'] = [...curr];

    return obj;
})

/*

Code again shamelessly stolen from
Hey Programmers => https://www.youtube.com/watch?v=YJRkNHIir_I

*/
let createSet = (floatingAddress: string):string[]=>{

    if(floatingAddress.length == 0)
        return [''];
    
    let char = floatingAddress[0];
    let remainingString = floatingAddress.substring(1);

    let partialAddress = createSet(remainingString);

    if(char == 'X'){
        return [
            ...partialAddress.map(curr => '0' + curr),
            ...partialAddress.map(curr => '1' + curr)
        ]
    }
    else{
        return partialAddress.map(curr => char + curr);
    }
    
}

let addressSpace = new Map();
list.map(curr => {
    let mask = curr['mask'];
    let operations = curr['operations'];

    operations.map(secCurr => {
        let currAddress = secCurr['address'].toString(2).padStart(36, '0');
        let maskedAddress = '';
        for(let i =0;i<currAddress.length;i++){
            if(mask[i] === 'X')
                maskedAddress += mask[i];
            else if(mask[i] == '0')
                maskedAddress += currAddress[i];
            else if(mask[i] == '1')
                maskedAddress += '1';
        }

        createSet(maskedAddress).map(iter =>{
            addressSpace.set(parseInt(iter,2), secCurr['value'])
        })
    })
})
let sum:number = 0;
let log = (value):void=>{
    sum += value;
}

addressSpace.forEach(log);
console.log(sum);
export {};