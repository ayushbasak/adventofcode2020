let fs = require('fs');
const { start } = require('repl');
let list = '';
// Reading Data
try{
    let data = fs.readFileSync('input', 'utf8');
    list = data.toString();
}
catch(e){
    console.log(e.stack);
}
id = 0;
list = list.split('\n').map(curr => {
    let object = new Object();
    object['instruction'] = curr.substring(0,3);
    let sign = 1;
    if(curr.charAt(4) == '-')
        sign = -1;
    object['sign'] = sign;
    object['value'] = curr.substring(5);
    object['visited'] = 0;
    object['id'] = ++id;
    return object; 
})

// console.log(list);

// Part 2
let accumulator = 0;

let traverse = (List, instruction_id, flip = true)=>{
    if(instruction_id === List.length){
        console.log('Terminated');
        return;
    }

    let instruction = List[instruction_id - 1]['instruction'];
    let sign = List[instruction_id - 1]['sign'];
    let value = List[instruction_id - 1]['value'];
    let visited  = List[instruction_id - 1]['visited'];

    if(visited){
        List[instruction_id - 1]['visited'] = 1;
        return;
    }

    // if(instruction == 'jmp'){
    //     traverse(List, instruction_id + (sign * value), true);
    //     if(flip){
    //         List[instruction_id - 1]['instruction'] = 'nop';
    //         traverse(List, instruction_id + (sign * value), false);
    //     }
    // }
    // else if(instruction == 'nop'){
    //     traverse(List, instruction_id + 1, true);
    //     if(flip){
    //         List[instruction_id - 1]['instruction'] = 'jmp';
    //         traverse(List, instruction_id + 1, false);
    //     }
    // }
    if(instruction == 'acc'){
        accumulator += (sign * value);
        traverse(List, instruction_id +1, flip);
    }
    return;
}
traverse(list, 1, true);
console.log(accumulator);