import axios from 'axios'
import React, { useEffect, useState } from 'react'
import userService from '../services/UserService'

//prettier-ignore
const AxiosGetPage = () => {
  const [data,setData] = useState(null)

  useEffect(()=>{
    userService.getUsers().then((data) =>{
      setData(data)
    });
  },[])

  
  
  const postClick = function(){
    axios.post('https://jsonplaceholder.typicode.com/posts',{
      userId : 12345,
      id: 101,
      body:"테스트 홍길동",
      title: "test title 홍길동"
    })
    .then((response) => {
       //통신이 성공 했을때
       console.log(response)
       setData(response.data)
    })
    .catch(function (error){
       //에러가 났을때 실행 구문
       console.log(error);
    })
    .then(()=>{
       // try catch finally 에서 finally 부분에 해당
        console.log('에러가 나든 안나든 무조건 실행');
    })

  }

  return (
    <div className='text-center mt-5'>
      <h2>Axios Get 연습</h2>
      <button onClick={postClick}>Post방식 연습</button>
      <hr />
      {
        data && data.map((post,index)=>(
          <div key={index}>
            <h3>타이틀:{post.title}</h3>
            <h3>유저아이디:{post.userId}, 아이디:{post.id}</h3>
            <h3>바디:{post.body}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default AxiosGetPage