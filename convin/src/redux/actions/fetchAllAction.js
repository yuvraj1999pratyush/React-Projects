import axios from "axios";

const fetchAll = (posts, n) =>({
    type:'FETCH_ALL',
    payload: posts,
    len: n
});

const fetchAllAction = () => {
    return function (dispatch){
        axios.get('https://reqres.in/api/users?page=2')
        .then((response) => {
            const posts = response.data.data;
            console.log(response.data.data);
            dispatch(fetchAll(posts, posts.length));
        })
    }
}

export default fetchAllAction;