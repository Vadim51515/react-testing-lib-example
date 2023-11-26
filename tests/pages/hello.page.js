const { $ } = require('@wdio/globals')
const Page = require('./page');

class HelloPage extends Page {
    get toggleBtn () {
        return $('#toggleBtn')
    }
    get searchInput () {
        return $('#searchInput')
    }

    get title () {
        return $('#title')
    }


    async toogleTitleWithInput (text) {
        await this.searchInput.setValue(text);
        await this.toggleBtn.click();
    }

    open () {
        return super.open('hello');
    }
}

module.exports = new HelloPage();
