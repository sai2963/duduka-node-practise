const lod=require('lodash');

const items=[1,[2,[3,[4]]]];
const newitems=lod.flattenDeep(items);
console.log(newitems);