// declare var require: any;
// const fs = require('fs');
// let data: string;
// try{
//     data = fs.readFileSync('input').toString(); 
// }
// catch(e){
//     console.log(e);
// }

// // Add padding to Input for eaiser calculation
// let list: string[] = data.split('\n');
// list = list.map(curr => '.' + curr + '.')
// let padding: string = '';
// for(let iter = 0;iter<list[0].length;iter++){
//     padding += '.';
// }
// list.unshift(padding);
// list.push(padding);

// interface index{
//     row: number,
//     col: number
// }

// let check = (list:string[], pos: index):boolean=>{
//     let count: number = 0;
//     if(list[pos.row - 1][pos.col - 1] == '.' || list[pos.row - 1][pos.col - 1] == 'L')
//         count +=1;
//     if(list[pos.row - 1][pos.col] == '.' || list[pos.row - 1][pos.col] == 'L')
//         count +=1;
//     if(list[pos.row - 1][pos.col + 1] == '.' || list[pos.row - 1][pos.col + 1] == 'L')
//         count +=1;
//     if(list[pos.row][pos.col - 1] == '.' || list[pos.row][pos.col - 1] == 'L')
//         count +=1;
//     if(list[pos.row][pos.col + 1] == '.' || list[pos.row][pos.col + 1] == 'L')
//         count +=1;
//     if(list[pos.row + 1][pos.col - 1] == '.' || list[pos.row + 1][pos.col - 1] == 'L')
//         count +=1;
//     if(list[pos.row + 1][pos.col] == '.' || list[pos.row + 1][pos.col] == 'L')
//         count +=1;
//     if(list[pos.row + 1][pos.col + 1] == '.' || list[pos.row + 1][pos.col + 1] == 'L')
//         count +=1;

//     if(list[pos.row][pos.col] == '#'){
//         if(count  <= 4)
//             return true;
//         return false;
//     }
//     else if(list[pos.row][pos.col] == 'L'){
//         if(count == 8)
//             return true;
//         return false;
//     }
//     return false;
// }

// console.log(check(list, {row: 2, col :5}));

// let countSeats = (list: string[]):number=>{
//     let count = 0;
//     for(let i = 1;i<=list.length - 2;i++){
//         for(let j = 1;j<=list[0].length-2;j++){
//             if(list[i][j] == '#')
//                 ++count;
//         }
//     }
//     return count;
// }

// let convert = (list: string[]):object =>{
//     let row: number = list.length - 2;
//     let col: number = list[0].length -2;
//     let copy:string[] = list.slice();

//     let delta = false;
//     for (let i=1;i<=row;i++){
//         for(let j =1;j<=col;j++){
//             if(check(copy, {row: i, col: j}))
//                 if(copy[i][j] == 'L'){
//                     delta = true;
//                     let temp = list[i].split('');
//                     temp[j] = '#';
//                     let tmp = temp.join('')
//                     list[i] = tmp;
//                 }
//                 else if(copy[i][j] == '#'){
//                     delta = true;
//                     let temp = list[i].split('');
//                     temp[j] = 'L';
//                     let tmp = temp.join('')
//                     list[i] = tmp;
//                 }

//         }
//     }


//     return {content: list, delta : delta};
// }

// while(true){
//     let obj:object = convert(list);
//     let doNext:boolean = obj['delta'];
//     list = convert(list)['content'];

//     if(!doNext)
//         break;
// }

// console.log(countSeats(list));
// // console.log(check(list, {row: 1, col:1}));