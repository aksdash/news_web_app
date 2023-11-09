class UserSession{
    constructor(token, userId){
        this.token = token
        this.userId = userId
    }

    getToken(){
        return this.token
    }

    getUserId(){
        return this.token
    }

    setToken(token){
        this.token = token
    }

    setUserId(userId){
        this.userId = userId
    }
}

export default UserSession