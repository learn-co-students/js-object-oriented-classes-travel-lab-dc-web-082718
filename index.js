
let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return(year - this.startDate.getFullYear());
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueToInt(avenue) {
    return eastWest.indexOf(avenue);
  }

  blocksTravelled() {
    let horizontalStart = this.avenueToInt(this.beginningLocation.horizontal);
    let verticalStart = (this.beginningLocation.vertical);
    let horizontalEnd = this.avenueToInt(this.endingLocation.horizontal);
    let verticalEnd = (this.endingLocation.vertical);

    let horizontalDistance = Math.abs(horizontalEnd - horizontalStart);
    let verticalDistance = Math.abs(verticalEnd - verticalStart);

    return(horizontalDistance + verticalDistance);

  }

  estimatedTime(peak = false) {
    if(peak === true) {
      return (this.blocksTravelled() / 2);
    } else {
      return (this.blocksTravelled() / 3);
    }
  }

}
