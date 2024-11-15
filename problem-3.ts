const countWordOccurrences=(sentence:string,word:string):number =>
{
    const words = sentence.split(" ");
    return words.filter(w => w.toLowerCase() === word.toLowerCase()).length;
}

console.log(countWordOccurrences("Typescript is great. I love typescript", "typescript"));//output:2