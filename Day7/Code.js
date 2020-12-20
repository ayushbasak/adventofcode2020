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

let clean = (list)=>{
    let count = 0;
    list = list.split('\n').map(curr => {
        curr = curr.split(',').join('').split('.').join().split('bags').join('bag');
        outer_bag = curr.substring(0,curr.indexOf('contain')-5);
        remaining_string = curr.substring(curr.indexOf('contain')+8).replace(/[0-9]/g, '');
        remaining_string =  remaining_string.split('bag').map(curr => curr.trim())
        remaining_string.pop();

        let obj = new Object();
        obj['outer bag'] = outer_bag;
        obj['contents'] = remaining_string;
        obj['id'] = ++count;
        return obj;
    });
    return list;
}

list = clean(list);
// bags_to_ignore = ['striped gold', 'faded violet' , 'shiny tan', 'dark turquoise']

condition = false;
let traverse = (graph, starting_point)=>{
    if(starting_point == 'shiny gold'){
        condition = true;
        return;
    }
    if(starting_point == 'no other'){
        condition = false;
        return;
    }
    let node = graph.find(curr => curr['outer bag'] == starting_point)
    console.log(node['outer bag']);
    if(node['contents'].includes['shiny gold']){
        condition = true;
        return;
    }
    node['contents'].map(curr => traverse(graph, curr));

    return condition;
}

traverse(list, 'pale yellow');


// traverse(list, 'dull yellow')

// let count = 0;
// t0 = new Date().getTime();
// list.map(curr => {
//     // console.log(curr);
//     condition = false;
//     if(traverse(list, curr['outer bag']))
//         ++count;
// })
// t1 = new Date().getTime();
// console.log(count);
// console.log("Completed in " , (t1-t0), " ms");