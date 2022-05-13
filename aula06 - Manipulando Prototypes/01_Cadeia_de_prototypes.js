// Todo construtor tem um prototype:
// new Object -> Object.prototype 

const objA = {
    chaveA: 'valorA',
};
console.dir(objA);

const objB = {
    chaveB: 'valorB',
};
console.dir(objB);

const objC = new Object();
objC.chaveC = 'valorC';

console.dir(objC);

Object.setPrototypeOf(  objB, objA );
Object.setPrototypeOf(  objC, objA );
console.log(objB.chaveA);
console.log(objC.chaveA);