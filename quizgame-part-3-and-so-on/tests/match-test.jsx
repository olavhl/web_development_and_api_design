const React = require('react');
const { mount } = require('enzyme');
const { Match } = require("../src/Match");

function checkQuizIsDisplayed(driver) {
    const questions = driver.find('.question');
    expect(questions.length).toEqual(1);

    const answers = driver.find('.answer');
    expect(answers.length).toEqual(4);
}

test("Test render quiz", () => {
    const driver = mount(<Match />);
    checkQuizIsDisplayed(driver);
});

// Testing that feedback is NOT the initial render when
// simulated a click
test("Test correct feedback", () => {
    const driver = mount(<Match />);
    const startUpFeedback = "Click on the right answer.";

    // Simulating a click at the first .answer-element in 
    // the code
    const first = driver.find('.answer').at(0);
    first.simulate('click');

    checkQuizIsDisplayed(driver);
    // Finding the feedback h4-tag and checking that it is NOT
    // the same as initial-render-feedback
    // (also could've found it by classname)
    expect(driver.find('h4').text()).not.toBe(startUpFeedback);
});