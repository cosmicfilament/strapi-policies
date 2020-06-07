module.exports = async (ctx, next) => {
	console.log('LocalDemo');

	return await next();
};
