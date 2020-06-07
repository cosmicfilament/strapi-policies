module.exports = ({ env }) => ({
	email: {
		provider: 'nodemailer-v3',
		providerOptions: {},
		settings: {
			host: env('EMAIL_HOST', 'smtp.gmail.com'),
			port: env.int('EMAIL_PORT', 587),
			username: env('EMAIL_USER', 'admin@admin.com'),
			password: env('EMAIL_PASSWD', 'admin123'),
			secure: false
		}
	}
});
