// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    if (location > 42) {
        return location - 42;
    } else {
        return 42 - location;
    }
}


function distanceFromHqInFeet(location) {
    if (location > 42) {
        return (location - 42) * 264;
    } else {
        return (42 - location) * 264;
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    } else{
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let location = distanceTravelledInFeet(start, destination)
    
    if (location <= 400) {
        return 0; 
    } else if (location > 400 && location <= 2000) {
        return (location - 400) * 0.02
    } else if (location > 2000 && location < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}