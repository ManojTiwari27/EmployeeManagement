import React,{useState} from 'react'



export default function AddEmployee({ addEmployee }) {
    const [fname,setfName] = useState("");
    const [lname,setlName] = useState("");
    const [email,setEmail] = useState("");

   /* const handleAdd = () => {
        const employee = {
          fName: fname,
          lName: lname,
          mail: email,
        };
        addEmployee(employee);
        setfName('');
        setlName('');
        setEmail('');
      };*/
    return (
        <div className='container my-5'>
            <form>
                <div className="row">
                    <div className="col">
                        <input onChange={(e)=>setfName(e.target.value)} type="text" value={fname} className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                        <input onChange={(e)=>setlName(e.target.value)} type="text" value={lname} className="form-control" placeholder="Last name" />
                    </div>
                    <div class="form-group my-3">
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email}class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="button" class="btn btn-dark" /*onClick={handleAdd}*/>Add</button>
                </div>
            </form>
        </div>
    );
}

