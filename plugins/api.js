import users from '../api/users'

const apiFactory = (store) => ({
    users: users(store),
})

export default ({ store }, inject) => {
    const api = apiFactory(store)
    inject('api', api)
}
