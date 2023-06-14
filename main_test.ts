import { assertEquals } from 'https://deno.land/std@0.191.0/testing/asserts.ts';
const stagingUrl = Deno.env.get('STAGING_URL') || 'http://localhost:3000';

Deno.test('GET /users', async () => {
	const res = await fetch(`${stagingUrl}/users`);
	const data = await res.json();
	console.log(data);
	assertEquals(res.status, 200);
});

Deno.test('GET /users/1', async () => {
	const res = await fetch(`${stagingUrl}/users/1`);
	const data = await res.json();
	console.log(data);
	assertEquals(res.status, 200);
	assertEquals(data.name, 'Sara');
});
