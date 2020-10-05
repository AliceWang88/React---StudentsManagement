import {connect} from 'umi';
import StudentList from '../components/students/StudentsList'

const mapStateToProps = state=>{
    return {
        aStu:state.student.result.data,
    }
}

export default connect(mapStateToProps)(StudentList);