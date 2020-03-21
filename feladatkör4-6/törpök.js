var totalDwarves = 10;
var workingDwarves = 5;
var dwarfCounter = 1;

while (dwarfCounter <= workingDwarves) {
  console.log('A(z) ' + dwarfCounter + '. törpe a bányában.');
  dwarfCounter++;
}

for (dwarfCounter; dwarfCounter <= totalDwarves; dwarfCounter++) {
  console.log('A(z) ' + dwarfCounter + '. törpe még otthon alszik.');
}
