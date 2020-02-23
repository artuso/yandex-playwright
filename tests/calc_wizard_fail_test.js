Feature('Проверка web-колдунщика калькулятора (сломанный)');

require('dotenv').config();

BeforeSuite((I, startPage) => {
  startPage.logIn(process.env.LOGIN, process.env.PASSWORD);
});

Before((I, calcWizard, startPage) => {
  startPage.openBrokenCalc();
  calcWizard.isVisible();
  calcWizard.isBroken();
});

Scenario('Вычисление произведения трех чисел', (I, calcWizard) => {
  calcWizard.enterExpression("2 * 3 * 5");
  calcWizard.checkFinalExpression("2 × 3 × 5");
  calcWizard.resultIs("30");

});

Scenario('Проверка изменения режима задания углов', (I, calcWizard) => {
  calcWizard.pressButton("sin");
  calcWizard.enterExpression("3 0");
  calcWizard.pressButton("()");
  calcWizard.resultIs("0,5");
  calcWizard.setAngleMode("rad");
  calcWizard.resultIs("−0,98803162409");

});
 