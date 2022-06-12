import axios from 'axios';

const fetchOne = (post) => ({
        type:'FETCH_ONE',
        payload: post
    });

function fetchOneAction(id) {
    return function(dispatch) {
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(response => {
        const post = response.data;
        // console.log("-----in reducer------", post);
        dispatch(fetchOne(post));
    })
    }
}

export default fetchOneAction;