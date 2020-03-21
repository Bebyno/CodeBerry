var someVariable = 123;
var someExpression = 2 + 2;

function someFunction2() {
    console.log('1. utasítás;');
    console.log('2. utasítás;');
    console.log('3. utasítás;');
}

function someFunction() {
    console.log('1. utasítás;');
    console.log('2. utasítás;');
    console.log('3. utasítás;');

    someFunction2();
}

someFunction();

console.log('Ez egy string.');

someFunction();
