/*In this exercise, we will write an algorithm to help taxicabs determine how far away a destination is based on the directions given.

Taxicab Geometry
The following grid represents the streets of a city and the blue dot represents a taxi cab before it leaves for its destination.

city grid

The taxi driver is given a list of directions that tell her whether to turn left or right, and how many blocks to drive for. Every time the taxi driver has to turn left, she will make a 90° turn anticlockwise, and every time the taxi driver has to turn right, she will make a 90° turn clockwise.

Let's take a look at some example directions: ["right", 2, "left", 3, "left", 1].

First the taxi driver must turn "right", then drive for 2 blocks.

turn `"right"`, then drive for `2` blocks

Then the taxi driver must turn "left", and drive for 3 blocks.

turn `"left"`, then drive for `3` blocks

Finally, the taxi driver must turn "left" again, and drive for 1 block.

turn `"left"`, then drive for `1` block

Now that the taxi driver is at her final destination, we can determine that she is 1 block east and 3 blocks north of where she started.

Input
const blocksAway = function(directions) {
  // Put your solution here
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

Expected Output
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}

Instruction
Create a function named blocksAway that will receive an array of directions, and return an object that calculates how far north and east those directions will take someone.

The taxi driver will always start at the same position, in the most south west position on the grid. This means that the output will only need to specify an east and north position, since the taxi driver can only end up in these East and North of the starting point.*/