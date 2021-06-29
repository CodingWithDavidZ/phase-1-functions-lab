function distanceFromHqInBlocks(blocks) {
  let distance = Math.abs(blocks - 42);
  return distance;
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  let fareDistance = distanceTravelledInFeet(start, destination);
  if (fareDistance <= 400) {
    return 0;
  } else if (fareDistance > 400 && fareDistance <= 2000) {
    return 0.02 * (fareDistance - 400);
  } else if (fareDistance > 2000 && fareDistance < 2500) {
    return 25;
  } else return "cannot travel that far";
}
