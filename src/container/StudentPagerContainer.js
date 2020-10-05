import {connect} from 'umi';
import Pager from '../components/students/Pager'

const mapStateToProps = state=>{
    return {
        current:state.student.condition.page,
        total:state.student.result.total,
        limit:state.student.condition.size,
        panelNumber:5,
    }
}

const mapDispatchToProps = dispatch=>({
    onPageChange(newPage){
        dispatch({   // 更改仓库里的page
            type:'student/setCondition',
            payload:{
                page:newPage
            }
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Pager);