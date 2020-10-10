export default {
    state:null,
    reducers:{
        setLogin(state,action){
            return action.payload;
        },
        removeLogin(state,action){
            return null;
        }
    },
    effects:{
        *asyncSetLogin(action,{put}){
            // 判断账号密码是否正确
            if(action.payload.loginId === 'admin' && action.payload.loginPwd === '123123'){
                // 正确，则登录成功
                // 把账号存储到本地
                localStorage.setItem('loginId',action.payload.loginId);
                // 把账号保存到仓库
                yield put({
                    type:'setLogin',
                    payload:action.payload.loginId,
                })

                return true;
            } 
            return false;
        },
        *asyncRemoveLogin(action,{put}){
            // 清楚本地存储的账号
            localStorage.removeItem('loginId');
            // 修改仓库登录数据
            yield put({
                type:'removeLogin',
            })
            // 学生搜索条件重置
            yield put({
                type:'student/changeCondition',
                payload:{
                    key:'',
                    page:1,
                    sex:-1,
                    size:6,
                }
            })
            return true;
        }
    },
    subscriptions:{
        getLoginInfo({dispatch,history}){
            const loginId = localStorage.getItem('loginId');
            dispatch({
                type:'setLogin',
                payload:loginId,
            })
        }
    }
}