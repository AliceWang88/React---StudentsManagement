import { connect,history} from 'umi';


function loginWrapper(props) {
    if (props.isLogin) {
        return props.children
    }
    props.onNotLogin &&  props.onNotLogin ();
    return null;
}

const mapStateToProp = state => {
    return {
        isLogin: state.login,
    }
}

const mapDispatchToProp = dispatch =>({
    onNotLogin(){
        history.push('/login')
    }
})


export default connect(mapStateToProp,mapDispatchToProp)(loginWrapper);


