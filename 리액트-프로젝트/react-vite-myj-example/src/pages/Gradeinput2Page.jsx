import React, { useState } from 'react'

const GradeinputPage2 = () => {

  // 다중 입력 

  // 입력값 상태 관리 : useState
  // const [kor, setKor] = useState(0)
  // const [math, setMath] = useState(0)
  // const [eng, setEng] = useState(0)
  // const [name, setName] = useState('')

  const[grade,setGrade] = useState({
    name:'',
    kor:0,
    eng:0,
    math:0,
  })

  // 값이 바뀔때마다 업데이트.
  const onChange = (event) =>{
    const {name,value} = event.target

    setGrade({
      ...grade, // 복사본
      [name]:value,
    })
  }



  return (

    <div className='text-center mt-5'>
      이름 : <input name="name" onChange={onChange} value={grade.name} /><br></br>
      국어 : <input name="kor" onChange={onChange} value={grade.kor} /><br></br>
      영어 : <input name="eng" onChange={onChange} value={grade.eng} /><br></br>
      수학 : <input name="math" onChange={onChange} value={grade.math} /><br></br>
    <div>
      <div>총점:{Number(grade.kor) + Number(grade.eng) + Number(grade.math)}</div>
      <div>평균:{(Number(grade.kor) + Number(grade.eng) + Number(grade.math)) / 3.0}</div>
    </div>
  </div>
  )
}

export default GradeinputPage2