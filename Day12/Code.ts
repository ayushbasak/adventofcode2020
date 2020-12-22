declare var require: any;
const fs = require('fs');
let data: string;
try{
    data = fs.readFileSync('input').toString(); 
}
catch(e){
    console.log(e);
}
let list:string[] = data.split('\n');
let motion = list.map(curr => {
    let obj = new Object();
    obj['direction'] = curr.charAt(0);
    obj['value'] = Number(curr.substring(1));

    return obj;
})
let directions:string[] = ['N', 'E', 'S', 'W'];

let curr_direction = 1;

interface position{
    x: number,
    y: number
}

let curr_position:position = {x: 0, y:0};

let calculate = (motion:object[], curr_position:position):number=>{
    for(let i = 0;i<motion.length;i++){
        let value:number = motion[i]['value'];
        let direction:string = motion[i]['direction'];
        if(direction == 'F'){
            if(curr_direction == 0){
                curr_position.x -= value;
            }
            else if(curr_direction == 1){
                curr_position.y += value;
            }
            else if(curr_direction == 2){
                curr_position.x += value;
            }
            else if(curr_direction == 3){
                curr_position.y -= value;
            }
        }
        else if(direction == 'R'){
            curr_direction = (((value/90)%4  + 4)%4 + curr_direction)%4;
        }
        else if(direction == 'L'){
            curr_direction = (((-1*value/90)%4  + 4)%4 + curr_direction)%4;
        }
        else if(direction == 'N')
            curr_position.x -= value;
        else if(direction == 'E')
            curr_position.y += value;
        else if(direction == 'S')
            curr_position.x += value;
        else if(direction == 'W')
            curr_position.y -= value;
    }

    let manhattan_distance = Math.abs(curr_position.x - 0) + Math.abs(curr_position.y - 0);
    return manhattan_distance;
}

console.log(calculate(motion, curr_position));