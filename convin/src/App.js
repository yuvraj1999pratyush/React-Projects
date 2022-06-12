import './Style.css';
import Card from './Components/Card';
import Button from './Components/Button';
import { useSelector,useDispatch, connect } from 'react-redux';
import fetchAllAction from './redux/actions/fetchAllAction.js';
import store from './redux/store.js';
import { useEffect } from 'react';


function App() {
  const {posts, len, post} = useSelector((state) => ({...state.data}));
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllAction());
  },[])
  
  const showButton = posts.map((post) => {
            
    if(post.id%len!=0){
      return (
        <Button key={post.id} num={post.id%len} id={post.id}/>
      )
    }else{
      return(
        <Button key={post.id} num={len} id={post.id} />
      )
    }
  })
  // console.log(len);
  console.log("---in app-----",post);

  
  return (

   
    <div className="App">
    
      {post.length===0 ? 
      <h1 className='start'>Click  Any Button to See User Details</h1> : <Card data={post.data} />}
      <div className='button-handler'>
      {showButton} 
      </div>
        
         
    </div>
  );
}

export default App;
