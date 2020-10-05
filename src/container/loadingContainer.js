import { connect,history } from 'umi';
import Loading from '../components/Loading'

const mapStateToProps = state =>{
    return {
        show:state.loading.global
    }
}

export default connect(mapStateToProps)(Loading)