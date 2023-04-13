import headers from './headers'
const route = `http://127.0.0.1:8000`

export default () => ({
    async getUser(id){
        let data = await useFetch(`${route}/user/${id}`+ headers.buildQuery(args), headers.getHeaders(store));
        return data;
    },
    async getAllUsers(){
        let data = await useFetch(`${route}/user/`+ headers.buildQuery(args), headers.getHeaders(store));
        return data;
    },
})