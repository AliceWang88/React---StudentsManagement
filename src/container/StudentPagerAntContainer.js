import {connect} from 'umi';
import PagerAnt from '../components/students/PagerAnt'

const mapStateToProps = state=>{
    return {
        current:state.student.condition.page,
        total:state.student.result.total,
        size:state.student.condition.size,
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
    },
    onSizeChange(current,size){
        dispatch({
            type:'student/setCondition',
            payload:{
                size
            }
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(PagerAnt);