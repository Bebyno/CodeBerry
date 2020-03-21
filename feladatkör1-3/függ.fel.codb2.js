function calculateRectangleArea(width, height) {
    return width * height;
}

function printRectangleArea(widthFromUser, heightFromUser) {
    let area = calculateRectangleArea(widthFromUser, heightFromUser);

    console.log('A négyszög területe ' + area + ' négyzetméter.');
}
   printRectangleArea(2, 4);
