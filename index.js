class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return new Date(endDate).getFullYear() +1 - this.startDate.getFullYear();
  }
}

class Route{
  constructor(startBlock, endBlock){
    this.startBlock = startBlock
    this.endBlock = endBlock
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalDistance = this.endBlock.vertical-this.startBlock.vertical
    let horizontalDistance = eastWest.indexOf(this.endBlock.horizontal) -  eastWest.indexOf(this.startBlock.horizontal)
    return verticalDistance + horizontalDistance
  }
  estimatedTime(peakHours = false){
    if (peakHours){
      return this.blocksTravelled()/2
    }
    else{
      return this.blocksTravelled()/3
    }
  }

}
