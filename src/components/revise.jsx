import { use, useState } from "react";

function Input() {

    // State to store form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setphoneNumber] = useState(0);
    const [course, setCourse] = useState([]);

    // State to store list of submitted users
    const [userList, setuserList] = useState([]);

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const newUser = { name, email, phonenumber, course };
        setuserList([...userList, newUser]);
    }
    return (
        <div>
            {/* Form for adding users */}
            <h3>Add User</h3>
            <form>
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter name..." 
                 value={name}
                 onChange={(e) => setName(e.target.value)}/>

                <label>Email</label>
                <input type="email" name="email" placeholder="Enter email..." 
                 value={email}
                  onChange={(e) => setEmail(e.target.value)} />

                <label>Phone</label>
                <input type="number" name="phoneNumber" placeholder="Enter number..." 
                 value={phonenumber}
                 onChange={(e) => setphoneNumber(e.target.value)} />

                <label>Course</label>
                <select name="course" 
                 value={course}
                 onChange={(e) => setCourse(e.target.value)} >
                    <option value="">Select Course</option>
                    <option value="Date Science">Data Science</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Basics of AI">Basics of AI</option>
                    <option value="Cyber Security">Cyber Security</option>
                </select>

                <button onClick={handleSubmit} >Add user</button>
            </form>

            {/* Test for display of user data */}
            <div>
                <h3>User List</h3>
                {userList.map((user, index) => 
                <div key={index}>
                    <p>Name: {user.name} </p>
                    <p>Email: {user.email} </p>
                    <p>Course: {user.course} </p>
                </div>
                )}
                
                
            </div>
        </div>
    )
};

export default Input;