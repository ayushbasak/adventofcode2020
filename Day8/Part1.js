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

// Part 1
let accumulator = 0;

let traverse = (List, instruction_id)=>{
    let visited = List[instruction_id - 1]['visited']; 
    let instruction = List[instruction_id - 1]['instruction'] 
    let sign = List[instruction_id - 1]['sign']
    let value = List[instruction_id - 1]['value']
    if(visited)
        return;
    List[instruction_id -1]['visited'] = 1;
    if(instruction == 'acc'){
        accumulator += (sign * value);
        traverse(List, instruction_id + 1);
    }
    if(instruction == 'nop'){
        traverse(List, instruction_id + 1);
    }

    if(instruction == 'jmp'){
        traverse(List, instruction_id + (sign * value))
    }

    return;
}
traverse(list, 1);
console.log(accumulator);