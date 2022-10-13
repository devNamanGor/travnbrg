export class Stay {
    /**
     * Name of this place
     */
    name: string;

    /**
     * Address of this place
     */
    address: string;

    /**
     * In the format of latitude, longitude
     * Indexes:             0         1
     */
    location: (number)[];

    /**
     * Url of the image of the place
     */
    img: string;

    /**
     * List of url of images of this stay.
     */
    photos: (string)[];

    constructor(name: string,
        address: string,
        location: Array<number>,
        img: string,
        photos: Array<string>,) {
        this.address = address;
        this.img = img;
        this.location = location;
        this.name = name;
        this.photos = photos;
    }
}