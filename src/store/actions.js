import {filterEmun} from "@/router/permission";

const action = {
    generateRouter({commit,state}){
        return new Promise((resolve,reject)=>{
            commit('SET_ROUTER',filterEmun(state.role));
            resolve();
        })
    }
}

export default action;