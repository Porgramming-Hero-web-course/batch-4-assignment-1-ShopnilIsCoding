const removeDuplicates=(arr:number[]):number[] =>
{
    return arr.filter((value:number,index:number) =>{
        return arr.indexOf(value)===index;
    });
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));// Output: [1, 2, 3, 4, 5]