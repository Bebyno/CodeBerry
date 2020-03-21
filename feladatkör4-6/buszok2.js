/*
For ciklusokat használ az üzenetek konzolba történő kiírásához.
Egy változót használ a buszok összdarabszámának tárolására.
Egy másik változót használ az üzemképes buszok darabszámának eltárolására.
Az üzemen kívüli buszok számát dinamikusan számolja ki a program.
A program előbb az üzemképes buszokra vonatkozó üzeneteket írja ki, majd az üzemen kívüli buszokra vonatkozóakat.
A buszok szériaszámát dinamikusan generálja a program.
Úgy írd meg a programot, hogy az akkor is helyesen fusson le, ha megváltozik a buszok összdarabszáma és/vagy az üzemképes buszok darabszáma.
*/

var összBusz = 10;
var működőBusz = 5;

for (let joBuszok = 1; joBuszok <= működőBusz; joBuszok++) {
  console.log("A(z) " + joBuszok + " busz üzemképes, sofőrre vár.");
}

// működőBusz = működőBusz + 1;

// for (működőBusz; működőBusz <= összBusz; működőBusz++) {
//   console.log("A(z) " + működőBusz + " busz üzemen kívül van, szervízre vár.");
// }

for (let rosszBuszok = működőBusz + 1; rosszBuszok <= összBusz; rosszBuszok++) {
  console.log("A(z) " + rosszBuszok + " busz üzemen kívül van, szervízre vár.");
}
