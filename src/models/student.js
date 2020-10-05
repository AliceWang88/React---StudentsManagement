import { searStudent } from '../services/getStudends'
import queryString from 'query-string'
import { history } from 'umi'

export default {
    state: {
        condition: {
            key: '',
            page: 1,
            sex: -1,
            size: 6,
        },
        result: {
            total: 0,
            data: [],
        }
    },

    reducers: {
        changeCondition(state, action) {
            return {
                ...state,
                condition: {
                    ...state.condition,
                    ...action.payload,
                }

            }
        },
        setResult(state, action) {
            return {
                ...state,
                result: {
                    ...state.result,
                    ...action.payload,
                }
            }
        }
    },

    effects: {
        *setCondition(action, { put, select }) {
            yield put({   // 改变仓库数据：搜索条件
                type: 'changeCondition',
                payload: action.payload,
            })
            // 从仓库拿数据：搜索条件
            const condition = yield select(state => state.student.condition);
            const query = queryString.stringify(condition)
            // 把搜索条件数据，加到url地址上
            history.push('?' + query);
        },

        *fetchStudents(action, { put, call, select }) {
            const condition = yield select(state => (state.student.condition));  // 从仓库获取 学生查询条件数据
            const result = yield call(searStudent, condition);  // 网络请求数据
            yield put({                                        // 触发改变仓库数据
                type: 'setResult',
                payload: {
                    data: result.data,
                    total: result.cont,
                }
            })
        }
    },

    subscriptions: {
        onListen({ dispatch, history }) {
            history.listen((location) => {
                    if (location.pathname === '/students') {
                    // 拿到地址栏参数，申请更改数据
                    const queryObj = location.query;
                    queryObj.page && (queryObj.page = +queryObj.page);
                    queryObj.sex && (queryObj.sex = +queryObj.sex);
                    queryObj.size && (queryObj.size = +queryObj.size);
                    dispatch({
                        type: 'changeCondition',
                        payload: queryObj,
                    });

                    // 重新请求数据，设置数据
                    dispatch({
                        type: 'fetchStudents',
                    })
                }
            })
        },

        // initGetStudents({ dispatch, history }) {
        //     dispatch({
        //         type: 'fetchStudents',
        //     })
        // }
    }
}