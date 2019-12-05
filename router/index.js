import { Router } from 'express';

const concatRoute = (basePath, routes, baseGuards) => {
	baseGuards = baseGuards ? baseGuards : [];

	const route = routes.map(({ path, method, guards }) => {
		if (path === '') return { path: basePath, method, guards: baseGuards };
		return { path: `${basePath}/${path}`, method, guards: guards ? baseGuards.concat(guards) : baseGuards };
	});

	return route;
};

const getRoutes = routes =>
	routes
		.map(route => {
			// No sub-routes
			if (!route.routes) {
				const { path, method, guards } = route;
				return [ { path, method, guards: guards ? guards : [] } ];
			}

			return concatRoute(route.path, route.routes, route.guards);
		})
		.flat();

const handleGuards = async (guards, req, res) => {
	if (guards.length === 0) return true;

	const promises = guards.map(guard => guard(req, res));
	const results = await Promise.all(promises);

	return results.reduce((acc, next) => acc && next);
};

export const initRoutes = routes => {
	const mappedRoutes = getRoutes(routes);
	const router = Router();

	mappedRoutes.forEach(route => {
		router[route.method.toLowerCase()](route.path, async (req, res, next) => {
			const guardResult = await handleGuards(route.guards, req, res);
			if (!guardResult) return res;

			await next();
		});
	});

	console.log(mappedRoutes);
};
