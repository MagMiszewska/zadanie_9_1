function getTriangleArea(a, h) {
	return (a <= 0 || h <= 0) ?  'Nieprawidłowe dane' : 'Pole trójkąta wynosi: ' + (a * h / 2);
};
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(2, 8);
console.log(triangle1Area);

var triangle2Area = getTriangleArea(5, -15);
console.log(triangle2Area);

var triangle3Area = getTriangleArea(25, 33);
console.log(triangle3Area);