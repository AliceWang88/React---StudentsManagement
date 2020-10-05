import Header from '../components/header';
import {connect,history} from 'umi';

const mapPropsToState = state=>{
    return {
        loginId:state.login,
    }
}

const mapDispatchToProps = dispatch =>({
    onLogout:()=>{
        const result = dispatch({
            type:'login/asyncRemoveLogin'
        })
        if(result){
            history.push('/login');
        }
    }
})


export default connect(mapPropsToState,mapDispatchToProps)(Header);