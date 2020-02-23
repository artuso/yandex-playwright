const { I } = inject();

const defaultTimeout = 10;
const wizardSelector = {css: `div.calculator__wrapper`};
function getButtonSelector(buttonText){
  return {css: `[data-bem*='"arg":"${buttonText}"']`};
};

module.exports = {

  isVisible(){
    I.waitForVisible(wizardSelector);
  },

  isBroken(){
    I.seeElement({css: `.calculator_broken_yes ${wizardSelector.css}`});
  },
  
  enterExpression(expression){
    for(let item of expression.split(" ")){
      within(wizardSelector, () =>{
        I.click(getButtonSelector(item));
      });
    }
  },

  checkFinalExpression(expression){
    within(wizardSelector, () =>{
      I.waitForText(expression, defaultTimeout,{css: `span[class*="input-string"]`});
    });
  },

  resultIs(result){
    within(wizardSelector, () =>{
      I.waitForText(result, defaultTimeout,{css: `span[class*="result"]`});
    });
  },

  pressButton(buttonText){
    within(wizardSelector, () =>{
      I.click(getButtonSelector(buttonText));
    });
  },

  setAngleMode(angleMode){
    const switcherSelector = {css:`input[value="${angleMode}"]`};
    within(wizardSelector, () =>{
      I.click(switcherSelector);
      I.waitForVisible({css: `label[class*="checked_yes"] ${switcherSelector.css}`});
    });
  }


};
