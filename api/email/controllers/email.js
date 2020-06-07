'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	send: async ctx => {
		console.log('Email controller send: ', ctx);

		const { to, from, subject, text, html } = ctx.request.body;

		return await strapi.services.email.sendEmail(to, from, subject, text, html);
	}
};
