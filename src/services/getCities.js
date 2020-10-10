export async function getCities(id) {
    let url = '/api/local';
    if (id) {
        url += `?parentId=${id}`
          
    }

    return fetch(url)
        .then(res => res.json())

}