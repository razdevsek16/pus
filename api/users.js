import headers from './headers'
const route = `http://127.0.0.1:8020`

export default (store) => ({
    async getUser(id) {
        console.log("test")
        const { data } = useFetch(`${route}/user/${id}`, headers.getHeaders(store));
        return data;
    },
    async getAllUsers() {
        let data = await useFetch(`${route}/user/`, headers.getHeaders(store));
        return data;
    },
    async registerUser(user) {
        let data = await $fetch(`${route}/user/`, {
            method: 'POST',
            body: user
        });
        return data;
    },
    async loginUser(data) {
        let login = await $fetch(`${route}/login`, {
            method: 'POST',
            body: data
        });
        return login;
    }
})