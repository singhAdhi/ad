//Create a function that finds the maximum range of a triangle's third edge,
//where the side lengths are all integers.

//all should be positive integers/number, if nagative just return -1

//(side1 + side2) - 1 = maximum range of third edge.

function nextEdge(side1, side2) {
  const max = ((side1 + side2) - 1);
  if (max < 1) {
    console.log(-1);
  } else {
    console.log(max);
  }
}

// Below are the test cases

nextEdge(8, 10);
nextEdge(-2, 4);
nextEdge(-5, -4);
nextEdge(9, 6);
