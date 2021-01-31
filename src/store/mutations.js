
const mutations = {
    SET_ROUTER(state,router){
        state.routers = router;
    },
    REMOVE_ROUTER(state){
        state.routers = [];
    },
    SET_ADDROUTER(state,router){
        state.addRouter = router;
    },
    GET_USERROLE(state,role){
        state.role = role;
    }
}

export default mutations;
