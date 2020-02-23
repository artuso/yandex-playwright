function getBrowser() {
  if (process.env.BROWSER != undefined) return (process.env.BROWSER).trim();
  else return "chromium"
};

exports.config = {
  output: './output/allure-results',
  helpers: {
    Playwright: {
      url: '',
      show: true,
      restart: false,
      windowSize: "1200x880",
      browser: getBrowser()
    }
  },
  include: {
    I: './steps_file.js',
    calcWizard: './pages/calcWizard.js',
    startPage: './pages/startPage.js',
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {},
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    }
  },
  tests: './tests/*_test.js',
  name: 'yandex-playwright'
};