// generate.test.js
import generatePassword from './generate';

describe('generatePassword', () => {
    it('should generate a password of the specified length', () => {
        const length = 10;
        const strength = 'low';
        const password = generatePassword(length, strength);
        expect(password.length).toBe(length);
    });

    it('should generate a password with only lowercase letters for low strength', () => {
        const length = 10;
        const strength = 'low';
        const password = generatePassword(length, strength);
        expect(password).toMatch(/^[a-z]+$/);
    });

    it('should generate a password with uppercase and lowercase letters for medium strength', () => {
        const length = 10;
        const strength = 'medium';
        const password = generatePassword(length, strength);
        expect(password).toMatch(/^[a-zA-Z]+$/);
    });

    it('should generate a password with uppercase, lowercase letters, numbers, and special characters for high strength', () => {
        const length = 10;
        const strength = 'high';
        const password = generatePassword(length, strength);
        expect(password).toMatch(/^[a-zA-Z0-9!@#$%^&*()]+$/);
    });

    it('should throw an error for invalid strength level', () => {
        expect(() => generatePassword(10, 'invalid')).toThrow('Invalid strength level');
    });

    it('should thrown an error for password length less than 1', () => {
        expect(() => generatePassword(0, 'low')).toThrow('Password length must be greater than 0');
    });
});
