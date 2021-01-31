const getToken = (key)=>{
    return localStorage.getItem(key);
};

const setToken = (key,token)=>{
    return localStorage.setItem(key,token);
};

const removeToken = (key)=>{
    return localStorage.removeItem(key);
};

export {
    getToken,
    setToken,
    removeToken
}