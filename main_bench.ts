const stagingUrl = Deno.env.get('STAGING_URL') || 'http://localhost:3000';

Deno.bench('All Users', async () => {
	await fetch(`${stagingUrl}/users`);
});

Deno.bench('Single User', async () => {
	await fetch(`${stagingUrl}/users/1`);
});
