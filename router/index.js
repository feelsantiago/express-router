import { Router } from 'express';

const concatRoute = (basePath, routes) => {
	const route = routes.map(({ path, method }) => {
		if (path === '') return { path: basePath, method };
		return { path: `${basePath}/${path}`, method };
	});

	return route;
};

const getRoutes = routes =>
	routes
		.map(route => {
			// No sub-routes
			if (!route.routes) {
				const { path, method } = route;
				return [{ path, method }];
			}

			return concatRoute(route.path, route.routes);
		})
		.flat();

export const initRoutes = routes => {
	const mappedRoutes = getRoutes(routes);
	console.log(mappedRoutes);
};
