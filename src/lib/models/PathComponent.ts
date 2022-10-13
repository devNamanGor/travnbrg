import type { Nullable, Undefinable } from './CustomTypes';

export class PathComponent {
	title: string;
	route: string;

	static error: PathComponent = new PathComponent('Page Not Found', '/notfound');

	constructor(title: string, route: string) {
		this.title = title;
		this.route = route;
	}

	static fromRoute(route: string): PathComponent {
		let component = routeMaps.get(route);
		if (component == undefined) return PathComponent.error;
		return component;
	}
}

export let routeMaps = new Map<string, PathComponent>([
	['', new PathComponent('Home', '/')],
	['login', new PathComponent('Login', '/login')],
	['settings', new PathComponent('Settings', '/settings')],
	['discover', new PathComponent('Discover', '/discover')],
	['flights', new PathComponent('Flights', '/flights')],
	['hotels', new PathComponent('Hotels', '/hotels')],
	['trains', new PathComponent('Trains', '/trains')],
	['about', new PathComponent('About Us', '/about')]
]);
