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


let addressSpace = new Map();
let curr = list.map(curr => {
    let mask = curr['mask'];
    let operations = curr['operations'];

    operations.map(secCurr =>{

        let currValue = secCurr['value'].toString(2).padStart(36, '0');
        let savedValue = '';
        for(let i = 0;i<currValue.length;i++){
            if(mask[i] == 'X')
                savedValue += currValue[i];
            else
                savedValue += mask[i];
        }
        addressSpace.set(secCurr['address'],parseInt(savedValue,2));
    })

})

let sum = 0;
let log = (value)=>{
    sum += value;
}

addressSpace.forEach(log);
console.log(sum);

export {};