import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button'

//https://www.youtube.com/watch?v=IL82CzlaCys&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=26
//React Hooks Tutorial - 26 - useCallback Hook

function ParentComponents() {

    const [age, setAge] = useState(100);
    const [salary, setSalary] = useState(10000); 

    /*const increaseAge =  () => {
        console.log("increaseAge ",age)
        setAge(age + 1)
    } */
    
    const increaseAge = useCallback( () => {
        console.log("increaseAge ",age)
        setAge(age + 1)
    }, [age]) 

    /*const increaseSalary  = () => {
        console.log("increaseSalary ",salary)
        setSalary(salary + 1)
    }*/
    
    const increaseSalary = useCallback( () => {
        console.log("increaseSalary ",salary)
        setSalary(salary + 1000)
    }, [salary]) 
    
    return (
        <div>
            <Title/>
            <Count text = "Age" value = {age}/>
            <Button handleClick = {increaseAge}>Increament Age</Button>
            <Count text = "Salary" value = {salary}/>
            <Button handleClick = {increaseSalary}>Increament Salary</Button> 
        </div>
    );
}

export default ParentComponents;