const { $ } = require('@wdio/globals');
const Page = require('./page');

class UsersPage extends Page {

    get loadingTitle() {
        return $('#usersLoading');
    }

    get usersList() {
        return $('#usersList');
    }

    get usersItems() {
        return $$('#usersList')
    }

    async loadData() {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({ timeout: 5000 });
            await this.usersList.waitForDisplayed({ timeout: 5000 });
        } catch (error) {
            throw new Error('Не удалось загрузить пользователей');
        }
    }

    async deleteUser() {
        try {
            const usersCount = await this.usersItems[0].$$('div').length;

            if (!usersCount) {
                throw new Error('Пользователи не найдены');
            }

            await this.usersItems[0].$$('div')[0].$('#userDelete').click();

            const usersCountAfterDelete = await this.usersItems[0].$$('div').length;

            if (usersCount - usersCountAfterDelete !== 1) {
                throw new Error('Удаление не произошло, либо удалилось более 1 пользователя',  this.usersCount);
            }

        } catch (error) {
            throw new Error('Не удалось удалить пользователя' + error.message);
        }
    }

    open() {
        return super.open('users-test');
    }
}

module.exports = new UsersPage();
