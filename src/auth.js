const fakeAuthProvider = {
    isAuthenticated: false,
    signin(){
        this.isAuthenticated = true;
    },
    signout(){
        this.isAuthenticated = false;
    }
}

export {fakeAuthProvider}