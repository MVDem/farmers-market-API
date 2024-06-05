import { Test, TestingModule } from '@nestjs/testing';
import { validateValue } from './validate.value';

test('FIRST TEST', () => {
    expect(validateValue(50)).toBe(true);

})
/*
describe('MyTestJS', () => {
    expect(ValidateValue(50)).toBe(true);

    test('FIRST TEST', () => {
        expect(validateValue(50)).toBe(true);

     test('FIRST TEST', () => {
        expect(validateValue(50)).toBe(true);

})*/
  

