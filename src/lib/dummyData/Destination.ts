import type { Stay } from "./Stay";

export class Destination {
    name: string;
    country: string;
    state: string;
    city: string;
    address: string;
    stays: (Stay)[];

    constructor(city: string,
        country: string,
        name: string,
        state: string,
        address: string,
        stays: (Stay)[],) {
        this.city = city;
        this.country = country;
        this.name = name;
        this.state = state;
        this.address = address;
        this.stays = stays;
    }
}

export let destinations: (Destination)[] = [];