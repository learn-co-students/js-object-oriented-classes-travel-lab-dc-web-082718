
let eastWest = ['1st Avenue',
'2nd Avenue', '3rd Avenue',
 'Lexington Avenue', 'Park',
  'Madison Avenue', '5th Avenue']

class Driver {

    constructor(name,startDate){
        // this.day = day;
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year){

        return Math.abs(this.startDate.getFullYear() - year);
    }


}


class Route {


    constructor(beginningLocation,endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }


    blocksTravelled(){
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
        let total = this.endingLocation.vertical - this.beginningLocation.vertical;
        // debugger;
        let ed = eastWest.findIndex(k => k === this.endingLocation.horizontal);

        let st = eastWest.findIndex(k => k === this.beginningLocation.horizontal);

        total += ed - st;
        return total;

    }

    estimatedTime(peak = false){
        if(peak){
            return this.blocksTravelled()/2;
        }
        else{
            return this.blocksTravelled()/3;
        }

    }


}
