import React, { useState } from 'react'

const GradeinputPage = () => {

  // 입력값 상태 관리 : useState
  const [kor, setKor] = useState(0)
  const [math, setMath] = useState(0)
  const [eng, setEng] = useState(0)
  const [name, setName] = useState('')

  // 값이 바뀔때마다 업데이트.
  const onNameChange = (event) =>{
    setName(event.target.value)
  }
  const onKorChange = (event) =>{
    setKor(event.target.value)
  }
  const onEngChange = (event) =>{
    setEng(event.target.value)
  }
  const onMathChange = (event) =>{
    setMath(event.target.value)
  }
  const total = (a,b,c) =>{
    const rt = Number(a)+Number(b)+Number(c)
    return rt
  }


  return (

    <div className='text-center mt-5'>
      이름 : <input name="name" onChange={onNameChange} value={name} /><br></br>
      국어 : <input name="kor" onChange={onKorChange} value={kor} /><br></br>
      영어 : <input name="eng" onChange={onEngChange} value={eng} /><br></br>
      수학 : <input name="math" onChange={onMathChange} value={math} /><br></br>
    <div>
      <div>총점:{total(kor,eng,math)}</div>
      <div>평균:{(Number(kor) + Number(eng) + Number(math)) / 3.0}</div>
    </div>
  </div>
  )
}

export default GradeinputPage