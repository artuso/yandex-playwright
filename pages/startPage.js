const { I } = inject();

require('dotenv').config();

const defaultTimeout = 10;

const searchFormSelector = {css: `form.search2`};
const inputSelector = {css: `${searchFormSelector.css} input[name="text"]`};

function openPageWithWord(word, parameters = "") {
  I.amOnPage(`https://${process.env.MAIN_URL}search/?text=${word}${parameters}`);
  I.waitForVisible(searchFormSelector);
  I.waitForValue(inputSelector, word);
};

module.exports = {

  openPageWithWord(word){
    openPageWithWord(word);
  },

  openBrokenCalc(){
    openPageWithWord("калькулятор", "&promo=broken_calculator");
  },

  logIn(login, password){
    const host = `https://passport.${process.env.MAIN_URL}`;
    I.amOnPage(host);
    const loginFormSelector = {css: `[class*="passp-page"]`};
    const submitButtonSelector = {css: `[class*="passp-sign-in-button"] [type="submit"]`};
    I.waitForVisible(loginFormSelector);
    within(loginFormSelector, () =>{
      I.fillField({css: `[id="passp-field-login"]`}, login);
      I.click(submitButtonSelector);
      I.seeTextEquals(login, {css: `[class="passp-current-account__display-name"]`});
      I.fillField({css: `[id="passp-field-passwd"]`}, password);
      I.click(submitButtonSelector);
    });
    I.waitInUrl(`${host}profile`);
    let userName;
    if(login.length > 15) userName = `${login.substr(0, 15)}…`;
      else userName = login;
    I.waitForText(userName, defaultTimeout ,{css: `[class*="user-account__name"]`});
  }

  


  
};
