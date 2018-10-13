
class Driver {
  constructor(name, startDate) {
      this.name = name
      this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    return Math.abs(this.startDate.getFullYear() - year)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    this.eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

  }
  blocksTravelled() {
    this.verticalTravel =  Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    this.horizontalTravel = Math.abs(this.eastWest.indexOf(this.beginningLocation.horizontal) - this.eastWest.indexOf(this.endingLocation.horizontal))
    return this.horizontalTravel + this.verticalTravel
  }

  estimatedTime(peakHours) {
    if (peakHours === true) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
