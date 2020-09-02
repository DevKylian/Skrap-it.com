export function authHeader() {
    // return authorization header with jwt token
    let user = localStorage.getItem('token');

    if (user && user.token) {
        return {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + user.token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        };
    } else {
        return {};
    }
}
