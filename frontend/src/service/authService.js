class AuthService{
    constructor(httpClient){
        this.httpClient = httpClient;
    }
    async logIn(payload){
        // try{
        //     const response = await this.httpClient.post('http://localhost:7777/login',payload);
        //     return response.json();
        // } catch(error){
        //     console.error(error);
        //     throw error;
        // }
        const response = await fetch('http://localhost:7777/login',{
            method: "POST",
            body: JSON.stringify({
                username: payload.username,
                password: payload.password
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        return response.json();
    }
    async signIn(payload){
        try {
            const response = await this.httpClient.post('http://localhost:7777/register',payload);
            return response.json();
        } catch (error) {
            console.error(error);   
            throw error;
        }
    }
}
export default AuthService;