// You are given two vectors starting from the origin (x=0, y=0) with coordinates (x1,y1) and (x2,y2). Your task is to find out if these vectors are collinear. Collinear vectors are vectors that lie on the same straight line. They can be directed in the same or opposite directions. One vector can be obtained from another by multiplying it by a certain number. In terms of coordinates, vectors (x1, y1) and (x2, y2) are collinear if (x1, y1) = (k*x2, k*y2) , where k is any number acting as a coefficient.

//Problem Description
//Write the function collinearity(x1, y1, x2, y2), which returns a Boolean type depending on whether the vectors are collinear or not.

// all coordinates are integers
// -1000 <= any coordinate <= 1000
// Notes
// All vectors start from the origin (x=0, y=0).
// Be careful when handling cases where x1, x2, y1, or y2 are zero to avoid division by zero errors.
// A vector with coordinates (0, 0) is collinear to all vectors.
// Examples
// (1,1,1,1) ➞ true
// (1,2,2,4) ➞ true
// (1,1,6,1) ➞ false
// (1,2,-1,-2) ➞ true
// (1,2,1,-2) ➞ false
// (4,0,11,0) ➞ true
// (0,1,6,0) ➞ false
// (4,4,0,4) ➞ false
// (0,0,0,0) ➞ true
// (0,0,1,0) ➞ true
// (5,7,0,0) ➞ true



function collinearity(x1, y1, x2, y2) {
    //define the variables x and y with values of zero
    // let x
    // let y
    //use if else statement to return boolean values

    // return false
    const isPoint1at00 = x1 === 0 && y1 === 0;
    const isPoint2at00 = x2 === 0 && y2 === 0;
    if (isPoint1at00 || isPoint2at00) {
        return true
    }
    if (x1 === 0 && x2 === 0 || y1 === 0 && y2 === 0) {
        return true
    }
    if (x1 === 0 || x2 === 0 || y1 === 0 || y2 === 0) {
        return false
    }
    const slope1 = x1 / y1;
    const slope2 = x2 / y2;
    return slope1 === slope2
}
console.log(collinearity(1, 2, 3, 4));
console.log(collinearity(0, 1, 3, 4));
console.log(collinearity(1, 0, 3, 4));
console.log(collinearity(0, 0, 3, 4));
console.log(collinearity(1, 2, 0, 0));
console.log(collinearity(1, 10, 2, 20));
console.log(collinearity(1, 10, -2, -20));