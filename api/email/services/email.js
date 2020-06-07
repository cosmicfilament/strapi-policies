'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
	sendEmail: async (to, from, subject, text, html) => {
		strapi.log.info('services.email.sendEmail is Sending an email');
		console.log('Email service - sendEmail');
		try {
			strapi.plugins['email'].services.email.send({
				to,
				from,
				subject,
				text,
				html
			});
		} catch (error) {
			console.log('error: ', error, JSON.stringify(error));
		}
		return { message: 'Email sent' };
	}
};
