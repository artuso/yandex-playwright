Feature('Проверка web-колдунщика калькулятора');

require('dotenv').config();

Before((I, calcWizard, startPage) => {
  startPage.openPageWithWord("калькулятор");
  calcWizard.isVisible();
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
 