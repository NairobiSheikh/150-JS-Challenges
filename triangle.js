// // 4JavaScript program to find the area of a triangle
// // Determine the sides of the triangle
// const side1 = 5;
// const side2 = 6;
// const side3 = 7;

// ////lets calculate the area by setting the perimter and the area
// const  perimeter = (side1 + side2 + side3)/2;
// //set the square root
// const areaValue = Math.floor(Math.sqrt(
//   perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
// ));
// //get the dom var
// document.querySelector('#tria').innerHTML = 'The area of the triangle is: ' + areaValue;

//triangle area function
function areaValue(side1,side2,side3) {
  //lets calculate the area by setting the perimter and the area
  let perimeter = (side1 + side2 + side3)/2;
  let area = Math.floor(Math.sqrt(
    perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3))
  );
  return area;
}
document.querySelector('#tria').innerHTML = 'The area of the triangle is: ' + areaValue(5,6,7);