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
})