/* számotasd ki a négyzet kerülteté és területét külön-külön függvényben.
Az eredményt egy külön függvényben iratasd ki.
*/

// K = 4*a
// T = a2


function négyzetkerület(a){
    let kerület = 4*a
    return kerület
}
function négyzetterület(a){
    let terület = a*a
    return terület
}
function eredmény(a){
    let kerület = négyzetkerület(a)
    let terület = négyzetterület(a)
    console.log('A négyzet kerülete: ' + kerület + '.')
    console.log('A négyzet területe: ' + terület + '.')
}
eredmény(4)
