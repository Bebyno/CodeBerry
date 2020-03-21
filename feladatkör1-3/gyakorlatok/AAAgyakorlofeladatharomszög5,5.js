/* Feladat: Háromszög kerülete és területe külön-külön függvényben.
Az eredmény külön föggvényben és írja ki az eredményt mondatban.
*/

// K = a+b+c
// T=  (a*Ma)/2 v. (b*Mb)/2 v. (c*Mc/2)
// Magasság számításhoz használd a linket: "https://www.calculat.org/hu/terulet-kerulet/haromszog.html"

function Háromszögkerülete(a,b,c){
    let kerület = a+b+c
    return kerület
}
function Háromszögterülete(a,Ma){
    let terület = (a*Ma)/2
    return terület
}

function eredmény(a, b, c, Ma){
    let kerület = Háromszögkerülete(a,b,c)
    let terület = Háromszögterülete(a,Ma)
    console.log('A háromszög kerülete: ' + kerület + '.')
    console.log('A a háromszög területe: ' + terület + '.')
}

const a = 3
const b = 4
const c = 5
const Ma = 36.8699
eredmény(a, b, c, Ma);



/*
eredmény(3, 4, 5, 36.8699);
    Háromszögkerülete(3, 4, 5);
    Háromszögterülete(3, 36.8699);
*/

/*
const a = 3
const b = 4
const c = 5
const Ma = 36.8699
function Háromszögkerülete(a,b,c){
    let kerület = a+b+c
    return kerület
}
function Háromszögterülete(a,Ma){
    let terület = (a*Ma)/2
    return terület
}

function eredmény(){
    let kerület = Háromszögkerülete(a,b,c)
    let terület = Háromszögterülete(a,Ma)
    console.log('A háromszög kerülete: ' + kerület + '.')
    console.log('A a háromszög területe: ' + terület + '.')
}
eredmémy()
*/
