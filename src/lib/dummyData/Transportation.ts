export class Flight {}

export class Train {}

export class Transportation {
    flights: (Flight)[];
    trains: (Train)[];

    constructor(flights: (Flight)[], trains: (Train)[],) {
        this.flights = flights;
        this.trains = trains;
    }
}