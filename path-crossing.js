// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
// Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.
// Example 1:
// Input: path = "NES"
// Output: false
// Explanation: Notice that the path doesn't cross any point more than once.
// Example 2:
// Input: path = "NESWW"
// Output: true
// Explanation: Notice that the path visits the origin twice.
// Constraints:
// 1 <= path.length <= 104
// path[i] is either 'N', 'S', 'E', or 'W'.
/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = function (path) {
  const directions = { N: [0, 1], S: [0, -1], E: [1, 0], W: [-1, 0] };
  const points = new Set();
  let x = 0,
    y = 0,
    dx = 0,
    dy = 0;

  // initial starting position
  points.add('0,0');

  for (const d of path) {
    if (d.toUpperCase() in directions) {
      [dx, dy] = directions[d.toUpperCase()];

      x = x + dx;
      y = y + dy;

      if (points.has(`${x},${y}`)) {
        points;
        return true;
      } else {
        points.add(`${x},${y}`);
      }
    }
  }

  return false;
};

let path, result;
path = 'NES';
result = isPathCrossing(path);
result;

path = 'NESWW';
result = isPathCrossing(path);
result;
