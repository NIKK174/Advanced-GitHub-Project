import { greeting } from './external/helper-functions/greeting.js';

test('greets a user', () => {
	expect(greeting('GitHub User')).toBe('Hello, GitHub User!');
});
