const { expect } = require('@wdio/globals')
const UsersPage = require('../pages/users.page')

describe('Users page', () => {
    it('Загрузка данных', async () => {
        await UsersPage.loadData()
    })

    it('Удаление пользователя', async () => {
        await UsersPage.loadData()
        await UsersPage.deleteUser()
    })
})

