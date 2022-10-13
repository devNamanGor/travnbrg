import type { Nullable } from './CustomTypes';

export class DrawerItem {
	id: number;
	title: string;
	route: string;
	subItems: Nullable<Array<DrawerItem>>;

	constructor(id: number, title: string, route: string, subItems: Nullable<Array<DrawerItem>>) {
		this.id = id;
		this.title = title;
		this.route = route;
		this.subItems = subItems;
	}
}

export let drawerItems: Array<DrawerItem> = [
	new DrawerItem(1, 'Home', '/', null),
	new DrawerItem(2, 'Discover', '/discover', null),
	new DrawerItem(3, 'Flights', '/flights', null),
	new DrawerItem(4, 'Hotels', '/hotels', null),
	new DrawerItem(5, 'Trains', '/trains', null),
	new DrawerItem(6, 'About Us', 'DropDown', [
		new DrawerItem(9, 'Instagram', 'https://instagram.com/nbrgdevelopers.pvt.ltd', null),
		new DrawerItem(10, 'About NBRG Developers', 'https://nbrg-developers.web.app', null),
		new DrawerItem(11, 'Location', 'https://g.page/nbrg-developers?share', null),
		new DrawerItem(12, 'Who we are', '/about', null)
	])
];
