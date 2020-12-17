let fs = require('fs');
let list = '';
// Reading Data
try{
    let data = fs.readFileSync('input', 'utf8');
    list = data.toString();
}
catch(e){
    console.log(e.stack);
}

list = list.split('\n\n'); // split each entry
let second_list = list;

// Part 1 
list = list.map(curr => curr.split('\n').join(''))
let count = 0;
list = list.map((curr) =>{
    set = new Set(curr.split(''));
    set = Array.from(set).join('').toString()
    count += set.length
    })
console.log('Part 1 : ',count);

// Part 2 
count = 0;
second_list = second_list.map(curr => (curr.split('\n').map(pos => pos.split(''))))
second_list.forEach(element => {
    buffer = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for(i =0;i<element.length;i++){
        buffer = buffer.filter(curr => (element[i].includes(curr)))
    }
    count += buffer.length
});

console.log('Part 2 : ',count);