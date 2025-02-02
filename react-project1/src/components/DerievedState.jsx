import {useState} from 'react';

export const DerievedState = () =>{
    const[students , setStudents] = useState([
        {id:1 , name:"hp" , marks:87},
        {id:2 , name:"sss" , marks:86},
        {id:3 , name:"ms" , marks:68},
        {id:4 , name:"sp" , marks:57}
    ])
    const len = students.length;

    const Average = students.reduce((accumulator , currElement) => accumulator + currElement.marks , 0)/len;
    const id = 1;
    const marks = 100;
    const handleChange = (id , newmarks) =>{
        const updateStudents = students.map((student)=>{
            if(student.id === id)
            {
                const updatedStudent = {...student , marks :newmarks};
                return updatedStudent;
            }
            else
            {
                return student;
            }
        })

        setStudents(updateStudents);
    }
    // here average is normal variable still it gets updated as it is derieved form state varialbe
    return(<>
        <ul className='ui raised segment'>
            {
                students.map((student)=>{
                    return(<li key={student.id}>
                        {student.id} - {student.name} - {student.marks}
                    </li>)
                })
            }
        </ul>
        <h3 className='ui green segment'>Average : {Average}</h3>
        <button onClick={()=>handleChange(id , marks)} className='ui button'>Click to change</button>
    </>)
}