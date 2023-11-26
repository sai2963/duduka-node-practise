const { readFileSync, writeFileSync }= require('fs')
const first=readFileSync('./content/subfolder/first.txt','utf8');
const second=readFileSync('./content/subfolder/text.txt','utf8');
const third=readFileSync('./content/subfolder/third.txt','utf8');
console.log(first);
console.log(second);
console.log(third);
writeFileSync(
    './content/subfolder/third.txt',`here is the result ${first}, ${second}`,{ flag:'a' }
)