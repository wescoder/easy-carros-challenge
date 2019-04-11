#! /usr/bin/env node
const program = require('commander')
const opn = require('opn')
const childProcess = require('child_process')

const plat = process.platform
const defaultUrl = process.env.APP_URL || 'http://localhost:8080'

program
  .version('0.1.0')
  .arguments('[url]')
  .option('-b, --browser [browser]', 'Browser command', 'google-chrome')
  .option('-d, --debug-port [port]', 'Debugger port', '9876')
  .option('-l, --local-path [folder]', 'Local profile path', '.tmp-chrome')
  .usage('[options] <url>')
  .action((url = defaultUrl, ...args) => {
    const { browser, debugPort, localPath } = program

    if (plat === 'darwin') {
      const macBrowser =
        browser === 'google-chrome' ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' : browser

      const cp = childProcess.spawn(macBrowser, [
        `--user-data-dir=${localPath}`,
        `--remote-debugging-port=${debugPort}`,
        url,
      ])

      cp.unref()

      process.exit(0)
    } else {
      const winBrowser = plat === 'win32' && browser === 'google-chrome' ? 'chrome' : 'google-chrome'

      opn(url, {
        wait: false,
        app: [winBrowser, `--user-data-dir=${localPath}`, `--remote-debugging-port=${debugPort}`],
      })
    }
  })
  .parse(process.argv)
