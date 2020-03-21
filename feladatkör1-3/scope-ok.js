var variable = 10;

function localScope() {
    variable = 20;
    console.log('local variable: ' + variable);
}

localScope();

console.log('global variable: ' + variable);
