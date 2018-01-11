class Driver {
  constructor(name, startDate) {
      this.name = name
      this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
      let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
      let horizontalBlocks = eastWest.indexOf(this.beginningLocation['horizontal']) - eastWest.indexOf(this.endingLocation['horizontal'])
      let verticalBlocks = this.beginningLocation['vertical'] - this.endingLocation['vertical']
      if (Math.sign(horizontalBlocks + verticalBlocks) === -1)
        return (horizontalBlocks * -1) + (verticalBlocks * -1)
      else
        return horizontalBlocks + verticalBlocks
  }

  estimatedTime(peak) {
    if (peak === true)
      return this.blocksTravelled() / 2
    else
      return this.blocksTravelled() / 3
  }
}
