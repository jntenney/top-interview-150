// There are n cars traveling to the same destination on a one-lane highway.
// You are given two arrays of integers position and speed, both of length n.
// position[i] is the position of the ith car (in miles) speed[i] is the speed of the ith car (in miles per hour)
// The destination is at position target miles.
// A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.
// A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.
// If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.
// Return the number of different car fleets that will arrive at the destination.
//
// Example 1:
// Input: target = 10, position = [1,4], speed = [3,2]
// Output: 1
// Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.
// Example 2:
// Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]
// Output: 3
// Explanation: The cars starting at 4 and 7 become a fleet at position 10. The cars starting at 1 and 0 never catch up to the car ahead of them. Thus, there are 3 car fleets that will arrive at the destination.
//
// Constraints:
// n == position.length == speed.length.
// 1 <= n <= 1000
// 0 < target <= 1000
// 0 < speed[i] <= 100
// 0 <= position[i] < target
// All the values of position are unique.
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
function carFleet(target, position, speed) {
  const stack = [];
  const positionIndex = 0;
  const speedIndex = 1;
  // create car tuples of position, speed
  const cars = position.map((pos, index) => [pos, speed[index]]);

  // sort cars in descending position order (highest to lowest) - as cars can't pass each other
  // so if a faster car catches up to a slower car it still can't pass the slower car
  // but they will become a car fleet when they meet
  cars.sort((a, b) => b[0] - a[0]);

  for (const car of cars) {
    const timeToTarget = (target - car[positionIndex]) / car[speedIndex];
    stack.push(timeToTarget);

    // if there are at least two cars on the stack, check to see if they
    // meet, if they do take off faster car
    if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
      stack.pop();
    }
  }

  // length of the stack is the number of car fleet
  // eg, # cars remaining after all cars have collided/intersected
  return stack.length;
}

// let target = 10;
// let position = [4, 1, 0, 7];
// let speed = [2, 2, 1, 1];

// let result = carFleet(target, position, speed);
// result;

// target = 10;
// position = [1, 4];
// speed = [3, 2];
// result = carFleet(target, position, speed);
// result;
