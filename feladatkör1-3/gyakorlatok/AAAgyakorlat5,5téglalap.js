//feladat: számojuk ki a kerületet, területet és külön kérjük az eredményt szövegben

// kerület = 2* (a+b)
// Terület ( (a*b)






function téglalapkerület(a,b){
    let kerület = (2*(a+b))
    return kerület
}
function téglalapterület(a,b){
    let terület = a*b
    return terület
}
function eredmény(a,b){
    let kerület = téglalapkerület(a,b)
    let terület = téglalapterület(a,b)
    console.log('a téglalap kerület: '+ kerület + '.')
    console.log('a téglalap területe: ' + terület + '.')

}
eredmény(2,6)
