import React,{useState} from 'react'
import '../App.css'

const Person = (props) => {
    const {name,height,gender,money,age,index,people,setPeople} = props
    const [likes,setLikes] = useState(0)

//Likes------------------------
    const handleLike=() =>{
        setLikes(likes + 1)
    }

    const handleDislike=() =>{
        if(likes > 0)
        setLikes(likes - 1)
    }

//Money-------------------------

const updateMoney=(index, isMore) =>{
    //here we create a new array called newPeople
    //using a copy of people via the SPREAD operator
    const newPeople = [...people]
    if(isMore){
        (newPeople[index].money++)
    }else{
        (newPeople[index].money--)
    }
    setPeople(newPeople)
}

//Delete--------------------------------------------------

const deletePerson = (personNum) =>{
    setPeople(people.filter((person,index) => personNum != index))
}

return (
    <div className='card' id="personCard">
    <h2>{name}</h2>
    <p>Gender: {gender}</p>
    <p>Age: {age}</p>
    <p>Money: {money}</p>
    <p>Height: {height}</p>
    <p>Likes: {likes}</p>
    <button className='btn btn-primary' id="like" onClick={handleLike}>Like {name}</button>
    <button className='btn btn-danger' id="dislike" onClick={handleDislike}>Dislike {name}</button>
    <button className='btn btn-success' id="give" onClick={e=>updateMoney(index,true)}>Give Money</button>
    <button className='btn btn-danger' id="take" onClick={e=>updateMoney(index,false)}>Take Money</button>
    <button className='btn btn-danger' id="delete" onClick={e=>deletePerson(index)}>Delete Profile</button>
    </div>
)
}

export default Person