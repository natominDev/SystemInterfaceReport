import React, {useEffect, useState} from 'react';
import './App.css';

function AlertMessage(props) {
  const data = props.data;
  const msg = JSON.stringify(data);

  return (
    <div className="alert alert-primary h text-primary">
      <h5>{msg}</h5>
      <hr />
      <table className="table h6">
        <tbody>
          <tr><th>Name</th><td>{data.name}</td></tr>
          <tr><th>Mail</th><td>{data.mail}</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function TestComponent(props) {
  const [val, setVal] = useState(0);
  const [msg2, setMsg2] = useState("set a number...");

  const doChange = (event) => {
    setVal(event.target.value);
  }

  useEffect(() => {
    let total = 0;
    for(let i = 0; i <= val; ++i){
      total += i;
    }
    setMsg2("total: " + total + ".");
  });

  return (
    <div>
      <p>{msg2}</p>
      <div className="form-group">
        <lebel>Input:</lebel>
        <input type="number" className="form-control" onChange={doChange} />
      </div>
    </div>
  );
}

function InputAge() {
  const [age, setAge] = useState(0);
  const addAge = () => {
    setAge(age + 1);
  }
  const decAge = () => {
    if(age > 0) setAge(age - 1);
  }
  return (
    <div>
      <p className="h5 mb-3 text-left">Age: {age}</p>
      <div>
        <button className="btn btn-primary" onClick={addAge}>
          +1
        </button>
        <button className="btn btn-primary" onClick={decAge}>
          -1
        </button>
      </div>
    </div>
  );
}

function CheckBoxList() {
  const [flag1, setFlag1] = useState(false);
  const changeFlag1 = (e) => {
    setFlag1(e.target.checked);
  }
  const [flag2, setFlag2] = useState(false);
  const changeFlag2 = (e) => {
    setFlag2(e.target.checked);
  }
  const [flag3, setFlag3] = useState(false);
  const changeFlag3 = (e) => {
    setFlag3(e.target.checked);
  }
  return (
    <div className="form-group h6 text-left pt-3">
      <input type="checkbox" className="form-check-input"
        id="check1" onChange={changeFlag1} />
      <label className="form-check-label" htmlFor="check1">
        Are you fine?
      </label>
      <hr />
      <input type="checkbox" className="form-check-input"
        id="check2" onChange={changeFlag2} />
      <label className="form-check-label" htmlFor="check2">
        Reset your choise.
      </label>
      <hr />
      <input type="checkbox" className="form-check-input"
        id="check3" onChange={changeFlag3} />
      <label className="form-check-label" htmlFor="check3">
        Are you fine?
      </label>          
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const clickFunc = () => {
    setCount(count + 1);
  }
  const [flag, setFlag] = useState(false);
  const changeFlag = (e) => {
    setFlag(e.target.checked);
  }
  const [msg, setMsg] = useState("This is sample message!");
  const doAction = () => {
    let res = window.prompt("type your name");
    setMsg("Hello, " + res + "!!");
  }
  const [name, setName] = useState("");
  const doChangeName = (event) => {
    setName(event.target.value);
  }
  const [mail, setMail] = useState("");
  const doChangeMail = (event) => {
    setMail(event.target.value);
  }
  const [form, setForm] = useState({name:'no name', mail:'no mail'});
  const doSubmit = (event) => {
    setForm({name:name, mail:mail});
    event.preventDefault();
  }
  
  return (
    <div className="App">
      <h1 class="bg-primary text-white display-4">Reservaton Form</h1>
      <div class="container">
        <h4 className="my-3">Hooks sample!</h4>
        { /*flag ?
        <div className="alert alert-primary text-center">
          <p className="h5 mb-3">click: {count} times!</p>
          <div>
            <button className="btn btn-primary" onClick={clickFunc}>
              Click me
            </button>
          </div>
        </div>
        :
        <div className="card p-3 border-primary text-center">
          <p className="h5 mb-3 text-left text-primary">
            click: {count} times!
          </p>
          <div>
            <button className="btn btn-primary" onClick={clickFunc}>
              Click me
            </button>
          </div>
        </div>
        */}
        {/*
        <div className="form-group h6 text-center pt-3">
          <input type="checkbox" className="form-check-input"
            id="check0" onChange={changeFlag} />
          <label className="form-check-label" htmlFor="check0">
            Change form style.
          </label>
        </div>

        <div className="text-center">
          <p>{msg}</p>
          <button onClick={doAction} className="btn btn-primary">
            Click me!
          </button>
        </div>
        */}
        <AlertMessage data={form} setData={setForm} />
        <form onSubmit={doSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" onChange={doChangeName} />
          </div>
          <div className="form-group">
            <label>Mail:</label>
            <input type="text" className="form-control" onChange={doChangeMail} />
          </div>
          <input type="submit" className="btn btn-primary" value="Click" />
        </form>

        <TestComponent />

        {/* input age */}
        <InputAge />

        {/* confirm condition */}
        <CheckBoxList />

      </div>
    </div>
  );
}


export default App;
