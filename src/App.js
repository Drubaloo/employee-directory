import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import FilterEmployee from "./components/buttons/filterEmployee"

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
   
    this.setState({ employees });
  };

  filterEmployees = coolness => {
    const employees = this.state.employees.filter(employee => employee.coolness >= 50)
    console.log(employees)
    this.setState({ employees })
  }

  sortEmployees = cooless => {
    const employees = this.state.employees.sort((x, y) => y.coolness - x.coolness)

    this.setState({ employees})
  }

  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Middle Earth Employees<FilterEmployee 
        filterEmployee={this.filterEmployees}
        sortEmployee={this.sortEmployees} /></Title>
        
        {this.state.employees.map(employee => (
          <EmployeeCard
            
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
            coolness={employee.coolness}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
