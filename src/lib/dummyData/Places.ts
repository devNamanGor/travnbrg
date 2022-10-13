import type {Transportation} from "./Transportation";
import type { Stay } from "./Stay";

export class Place {
    name: string;
    country: string;
    state: string;
    city: string;
    address: string;
    transportations: (Transportation)[];
    stays: (Stay)[];

    constructor(city: string,
        country: string,
        name: string,
        state: string,
        address: string,
        transportations: (Transportation)[],
        stays: (Stay)[],) {
        this.city = city;
        this.country = country;
        this.name = name;
        this.state = state;
        this.address = address;
        this.transportations = transportations;
        this.stays = stays;
    }
}

export let highlighted: (Place)[] = [];

export let places: (Place)[] = [];