// Bucle mediante while
console.group('Uso de bucle while');

let x = 0; let y = 1;
while(x < 5) {
	if (y < 5) { y++; } else { x++ }
    console.log("x:", x, "y:", y);
}

console.groupEnd();