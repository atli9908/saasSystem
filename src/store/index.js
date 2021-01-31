import vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from "./actions";
import createPersistedState from "vuex-persistedstate";

vue.use(Vuex);

export default new Vuex.Store({
    state:{
        role:'',
        routers:[],
        groupList:[
            {
                label:'洗家电器',
                value:'xjdq',
                status:true,
                showTbody:true,
                sicon:'el-icon-caret-bottom',
                children:[
                    {imgsrc:'/img/1.png',label:'擦地机',value:'cdj',status:true},
                    {imgsrc:'/img/1.png',label:'吸尘器',value:'xcq',status:true},
                    {imgsrc:'/img/1.png',label:'蒸汽清洗机',value:'zqqxj',status:false},
                    {imgsrc:'/img/1.png',label:'配件',value:'xjpj',status:false},
                ]
            },
            {
                label:'美容清洗',
                value:'mrqx',
                status:true,
                showTbody:true,
                sicon:'el-icon-caret-bottom',
                children:[
                    {imgsrc:'/img/1.png',label:'高压清洗机',value:'gyqxj',status:false},
                    {imgsrc:'/img/1.png',label:'清洁剂',value:'xcq',status:false},
                    {imgsrc:'/img/1.png',label:'配件',value:'mrpj',status:false}
                ]
            },
        ]
    },
    mutations,
    actions,
    getters,
    plugins:[createPersistedState()]
})