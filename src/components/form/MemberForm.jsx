import {useState} from "react";
import "./memberForm.scss";

const MemberForm = ({household, setHousehold, setShowForm}) => {
    
    const [memberInfo, setMemberInfo] = useState({
        name: '',
        description: '',
        fruit: ''
    });

    const {name, desc, fruit} = memberInfo;

    const onChange = (e)=>{
        setMemberInfo({ ...memberInfo, [e.target.name]: e.target.value });
    };

    const addMember = (e)=>{
        e.preventDefault();
        setHousehold([
            ...household, 
            {
                name: memberInfo.name,
                description: memberInfo.description,
                fruit: memberInfo.fruit
            }
        ]);
        setShowForm(false);
    }
    
    return (
        <div className="form">
            <form>
                <label htmlFor="name">Name: 
                    <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={onChange}/>
                </label>
                <label htmlFor="description">Description: 
                    <input
                    type="text" 
                    name="description" 
                    value={desc}
                    onChange={onChange} />
                </label>
                <label htmlFor="fruit">Favorite fruit: 
                    <input 
                    type="text" 
                    name="fruit" 
                    value={fruit}
                    onChange={onChange}/>
                </label>
                <div className="submit"><button onClick={addMember}>Submit</button></div>
            </form>
        </div>
    )
}

export default MemberForm
