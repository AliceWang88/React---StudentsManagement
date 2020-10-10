import queryString from 'query-string';

const appkey = 'demo13_1545210570249';
// const appkey2 = 'Alice_1553846205955';
// const appkey3 = 'Alice88_1564641259747';

// 添加学生
export async function addStudent(data){
    data = {
        appkey,
        ...data,
    }
    const str = queryString.stringify(data);
    return await fetch(`/api/student/addStudent?${str}`)
        .then(resp => resp.json())
}

// 修改学生信息
export async function modifyStudentInfo(data){
    data = {
        appkey,
        ...data,
    }
    const str = queryString.stringify(data);
    return await fetch(`/api/student/updateStudent?${str}`)
        .then(resp => resp.json())
}

// 删除学生
export async function deleteStudent(sNo) {
    return await fetch(`/api/student/delBySno?appkey=${appkey}&sNo=${sNo}`)
        .then(resp=>resp.json())
}

// 根据学号，获取学生信息
export async function getInfoBySNo (sNo) {
    const data = await getStudent();
    for (const obj of data) {
        if(obj.sNo === sNo){
            return obj;
        }
    }
}

// 按页获取学生信息
export async function getStudentByPage(page, size) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}`)
        .then(resp => resp.json())
        .then(res => res.data)
}

// 获取所有学生信息
export async function getStudent() {
    return await fetch(`/api/student/findAll?appkey=${appkey}`)
        .then(resp => resp.json())
        .then(res => res.data)
}

/**
 * 有key值时，按关键字搜索学生信息，不然按页查询所有学生数据
 * @param {*} param
 */
export async function searStudent({
    key = '', sex = -1, page = 1, size = 6
} = {}) {
    let resp;
    if (key) {
        //按关键字查询学生信息 
        resp = await fetch(`/api/student/searchStudent?appkey=${appkey}&sex=${sex}&search=${key}&page=${page}&size=${size}`)
            .then(resp => resp.json())
            .then(res => res.data);
        // 统一  对象里的数据名称
        resp.data = resp.searchList;
        delete resp.searchList;

    } else {
        // 按页获取所有学生数据
        resp = await getStudentByPage(page, size);
        // 统一 对象里的数据名称
        resp.data = resp.findByPage;
        delete resp.findByPage;
    }
    return resp;
}