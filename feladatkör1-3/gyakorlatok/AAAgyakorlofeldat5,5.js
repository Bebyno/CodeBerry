//kör kerülete: K= 2 * r* pi
// kör területe T= r2*pi
//π


const π = 3.14;

function körKerület(r) {
    let kerület=((r*π)*2);
    return kerület;
}

function körTerület(r) {
    let terület= (r*r*π)
    return terület
}

function eredmények(r) {
    let kerület = körKerület(r);
    let terület = körTerület(r);
    console.log('a kör kerülete:' + kerület + '.')
    console.log('a kör területe:' + terület + '.')
}

eredmények(10)


/*

// Feladat: Számold ki kör kerületét, területét, és írd ki a console-ra
// v1: Függvények nélkül

const π = 3.14;
let r = 10;

let kerület=((r*π)*2);
let terület= (r*r*π);
console.log('a kör kerülete:' + kerület + '.');
console.log('a kör területe:' + terület + '.');

r = 5;

let kerület=((r*π)*2);
let terület= (r*r*π);
console.log('a kör kerülete:' + kerület + '.');
console.log('a kör területe:' + terület + '.');

*/

/*

// Feladat: Számold ki kör kerületét, területét, és írd ki a console-ra
// v2: Függvény hogy ne legyen copy-paste

const π = 3.14;
let r = 10;

function neLegyenCopyPaste() {
    let kerület=((r*π)*2);
    let terület= (r*r*π);
    console.log('a kör kerülete:' + kerület + '.');
    console.log('a kör területe:' + terület + '.');
}

neLegyenCopyPaste();

r = 5;

neLegyenCopyPaste();

*/

/*

// Feladat: Számold ki kör kerületét, területét, és írd ki a console-ra
// v3: Függvény paraméterrel

const π = 3.14;

function körKerületÉsTerület(r) {
    let kerület=((r*π)*2);
    let terület= (r*r*π);
    console.log('a kör kerülete:' + kerület + '.');
    console.log('a kör területe:' + terület + '.');
}

körKerületÉsTerület(10);
körKerületÉsTerület(5);

*/

// Feladat: Számold ki kör kerületét, területét, és írd ki a console-ra
// v4: Újrafelhasználható függvények (paraméterrel)

const π = 3.14;

function körKerület(r) {
    return ((r*π)*2);
}

function körTerület(r) {
    return (r*r*π);
}

function körKerületÉsTerület(r) {
    let kerület = körKerület(r);
    let terület = körTerület(r);
    console.log('a kör kerülete:' + kerület + '.');
    console.log('a kör területe:' + terület + '.');
}

körKerületÉsTerület(10);
körKerületÉsTerület(5);

let kerület = körKerület(12);
console.log('a kör kerülete:' + kerület + '.');

/*

function calculateCircleCircumference(radius) {
    return 2 * 3.14 * radius;
}

function calculateCircleArea(radius) {
    return 3.14 * (radius * radius);
}

function printCircleData(radiusFromUser) {
    let circumference = calculateCircleCircumference(radiusFromUser);
    let area = calculateCircleArea(radiusFromUser);
    console.log('A kör kerülete ' + circumference + ' centiméter.');
    console.log('A kör területe ' + area + ' négyzetcentiméter.');
}

printCircleData(4);
*/

/*
function össszead(a, b) {
    return a + b;
}

össszead(1, 2);
*/
