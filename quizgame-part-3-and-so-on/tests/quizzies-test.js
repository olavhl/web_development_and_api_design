const {getRandomQuizzies} = require('../src/quizzies');

test("Test invalid n", () => {
    expect(() => getRandomQuizzies(-1).toThrow());
    expect(() => getRandomQuizzies(0).toThrow());
    expect(() => getRandomQuizzies(10).toThrow());
});

test('Test get 1', () => {
    const quizzies = getRandomQuizzies(1);

    expect(quizzies.length).toBe(1);
    expect(quizzies[0].question).toBeDefined();
    expect(quizzies[0].answers).toBeDefined();
    expect(quizzies[0].answers.length).toBe(4);
});

test('Test get 2', () => {
    for(let i = 0; i < 100; i++) {
        const quizzies = getRandomQuizzies(2);

        expect(quizzies.length).toBe(2);
        expect(quizzies[0].question).not.toBe(quizzies[1].question)
    }
});