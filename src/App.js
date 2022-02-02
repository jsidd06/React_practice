import React, { useState } from 'react';
import { Button, Container, Form, Input, Label } from 'reactstrap';

function App() {
    const [count,setCount] = useState(0);
    const [countCorrect,setCountCorrect] = useState(0);
    const [percentage,setPercentage] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();
        const formValid = +count >= 0 && +countCorrect;
        if(!formValid) {
            return;
        }
        Math.floor(+count/+countCorrect*100) > 100 ? setPercentage(100) : setPercentage(Math.floor(+count/+countCorrect*100));
    }

  return (
    <Container>
        <Form onSubmit={submitHandler}>
            <Label>Type you get number</Label> 
            <Input placeholder="enter the number" value={count} onChange={(e) => setCount(e.target.value)}/>
            <Label>Type total of number</Label>
            <Input placeholder="enter the number" value={countCorrect} onChange={(e) => setCountCorrect(e.target.value)} />
            <Button type="submit">Submit</Button> 
        </Form>
        <h1>percentage:-{percentage}%</h1>
        </Container>
  )
}

export default App;
