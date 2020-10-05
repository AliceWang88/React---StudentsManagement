import { connect,history } from 'umi';
import LoginForm from '../components/loginForm'


const mapDispatchToState = dispatch => ({
    onLogin:(obj)=>{
       const result = dispatch({
            type:'login/asyncSetLogin',
            payload:obj
        })
        result.then(res=>{
            if(res){
                // 登录成功跳转页面
                history.push('/')
            } else {
                alert('账号或者密码错误')
            }
        })
    }
})


export default connect(null,mapDispatchToState)(LoginForm);