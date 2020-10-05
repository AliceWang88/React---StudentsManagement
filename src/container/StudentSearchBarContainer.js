import {connect} from 'umi';
import SearchBar from '../components/students/StudentSearchBar'

const mapStateToProps = state=>{
    return {
        search:state.student.condition.key,
        sex:state.student.condition.sex,
    }
}

const mapDispatchToProps = dispatch=>({
    onSearch(obj){
        dispatch({  // 更改搜索条件 数据
            type:'student/setCondition',
            payload:{
                ...obj,
                page:1,
            }
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);