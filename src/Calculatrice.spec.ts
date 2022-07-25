import Calculatrice from './Calculatrice';

// decris ce qui est testé
describe('Calculatrice', () => {

    describe("additions", ()=> {

        test('addition deux entiers positif', () => {
            expect(Calculatrice.addition(5, 4)).toBe(9);
            expect(Calculatrice.addition(12, 28)).toBe(40);
            expect(Calculatrice.addition(1, 10000)).toBe(10001);
        })
        test('addition deux nuls doit retourner 0', () => {
            expect(Calculatrice.addition(0, 0)).toBe(0);
        })
        test('addition de deux décimaux', () => {
            expect(Calculatrice.addition(0.1, 0.2)).toBeCloseTo(0.3)
        })
        test('addition de deux entier negatif', () => {
            expect(Calculatrice.addition(-1, -4)).toBe(-5);
        })
        
    })
    
    describe('multiplication', () => {
        test('multiplication de 5 par 10 doit retourner 50', () => {
            expect(Calculatrice.multiplication(5, 10)).toBe(50);
        })
    })

    describe('division', () => {
        test('division de 10 par 2 doit retourner 5', () => {
            expect(Calculatrice.division(10, 2)).toBe(5);
        })

        test('division par zero doit retourner l\'infini', ()=> {
            expect(Calculatrice.division(15, 0)).toBe(Infinity);
        })

        test('division de zero par n\'importe quoi retourne 0', ()=> {
            expect(Calculatrice.division(0, 15)).toBe(0);
        })

        test('division de zero par zero retourne 0', ()=>{
            expect(Calculatrice.division(0, 0)).toBe(0);
        })
    }
    )
})
