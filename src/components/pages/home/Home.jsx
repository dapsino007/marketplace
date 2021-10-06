import {useState} from "react";
import MemberForm from "../../form/MemberForm";
import "./home.scss";

const Home = () => {
    //array temporarily used to store data for members. This will ideally be stored and pulled from a database
    const [household, setHousehold] = useState([
        {
            name: "Bud Baxter",
            description: "Household contact",
            fruit: "Apple"
        },
        {
            name: "Andy Baxter",
            description: "Household contact",
            fruit: "Apple"
        }
    ]);
    
    const [showForm, setShowForm] = useState(false);
    const handleForm = ()=>{
        setShowForm(true);
    };

    return (
        <div className="home">
            <div className="welcome">
                <h2>Your household</h2>
                <p>Welcome to The Marketplace! Review your household below:</p>
            </div>
            <div className="list">
                {household.map((member, index)=>
                    <div key={index} className="card">
                        <h3>{member.name}</h3>
                        <span><b>Description:</b> {member.description}</span>
                        <span><b>Favorite fruit:</b> {member.fruit}</span>
                    </div>     
                )}
            </div>
            <div className="addMember">
                {!showForm? 
                    <button className="button" onClick={handleForm}> Add new member</button>
                    :
                    <MemberForm 
                        household={household} 
                        setHousehold = {setHousehold} 
                        setShowForm = {setShowForm}
                    />
                }
            </div>       
        </div>
    )
}

export default Home
