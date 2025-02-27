import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosClient = () => {
  const [contacts, setContacts] = useState(null)

  useEffect(()=>{
    getClick()
  },[])

  const getClick = () => {
    axios
      .get('https://sample.bmaster.kro.kr/contacts?pageno=3&pagesize=10')
      .then((response) => {
        //통신이 성공 했을때
        console.log(response)
        setContacts(response.data.contacts)
      })
      .catch(function (error) {
        //에러가 났을때 실행
        console.log(error)
      })
      .then(() => {
        // try catch finally 에서 finally 부분에 해당
        console.log('에러가 나든 안나든 무조건 실행')
      })
  }

  const removeClick = (event)=>{
    let no = event.target.name
    setContacts(contacts.filter((contact) => contact.no != no))
  }

  return (
    <div className='text-center mt-5'>
      <h2>클라이언트 테이블 받아오기 연습</h2>
      <button onClick={getClick}>클라이언트 데이타</button>
      <hr />
      <div className='d-flex justify-content-center'>
        <table>
          <tr>
            <td>번호</td>
            <td>이름</td>
            <td>전화번호</td>
            <td>주소</td>
            <td>사진</td>
            <td>삭제</td>
          </tr>
          {contacts &&contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.no}</td>
                <td>{contact.name}</td>
                <td>{contact.tel}</td>
                <td>{contact.address}</td>
                <td>
                  <img src={contact.photo} />
                </td>
                <td>
                  <input type='button' name={contact.no} onClick={removeClick} value='삭제' />
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  )
}


export default AxiosClient