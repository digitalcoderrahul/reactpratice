import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Apiaxios = () => {
    const[apiData,setApiData] =useState([])
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[mobile,setMobile]=useState('')
    const[userID ,setUserID]=useState('')


    // Fetch & Get Api
    useEffect(()=>{
       
       callApi()
    //    console.warn(apiData)
    },[])

    async function callApi(){
        const apiResult=await axios.get('http://localhost:3000/users')
        // console.log(apiResult)
        setApiData(apiResult.data)
       } 

       const PostApi=()=>{
        let item={name:name,email:email,mobile:mobile}
        const postresult = axios.post(`http://localhost:3000/users`,item).then((result)=>{
            console.log(result.data)
            if(postresult.status == 200 ||postresult.status == 201 ||postresult.status == 204){
                callApi()
            }
        })
    }


    const PutApi=()=>{
        let item={name:name,email:email,mobile:mobile, userID:userID}

        console.log(name,userID, email ,mobile)
        const postresult = axios.put(`http://localhost:3000/users/${userID}`,item).then((result)=>{
            // console.log(result.data)
            //  apiData(response.apiData)
            if(postresult.status ==200 ){
                callApi()
            }
        })
    }

const newData =(data)=>{
    setName(data.name)
    setEmail(data.email)
    setMobile(data.mobile)
    setUserID(data.id)
}

    const deleteApi=async(id)=>{
        console.log(id)
        // let item={name:name,email:email,mobile:mobile}
        const postresult =await axios.delete(`http://localhost:3000/users/${id}`);
        console.log(postresult)
        if(postresult.status ==200 ){
            callApi()
        }
    }
    

  return (
    <div>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
        </tr>
        </thead>

        <tbody>
        {apiData&&
          (apiData).map((apiWork,index)=>{
            return(
           <tr key={index}>
            <td>{apiWork.id }</td>
            <td>{apiWork.name}</td>
            <td>{apiWork.email}</td>
            <td>{apiWork.mobile}</td>
            <td><button className='bg-black text-white py-1 px-3 m-2' onClick={()=>deleteApi(apiWork.id)}>Delete</button></td>
            <td> <button className='bg-black text-white py-1 px-3 m-1' onClick={()=>newData(apiWork)}>Upadate</button></td>
           </tr>
           )
          })  
        }  
        </tbody>
       
        <div className='text-center space-y-3'>
      
     <input type="text" className='border-2 border-black outline-none' onChange={(e)=>setName(e.target.value)} value={name} name='name'/> <br></br>
     <input type="text" className='border-2 border-black outline-none' onChange={(e)=>setEmail(e.target.value)} value={email} name='email' /> <br></br>
     <input type="text" className='border-2 border-black outline-none'  onChange={(e)=>setMobile(e.target.value)} value={mobile} name='mobile'/> <br></br>
     <button onClick={PostApi} className='bg-black text-white py-1 px-3'>Submit</button>
     <button onClick={PutApi} className='bg-black text-white py-1 px-3 m-2'>Update</button>

    </div>
    </div>
  )
}

export default Apiaxios