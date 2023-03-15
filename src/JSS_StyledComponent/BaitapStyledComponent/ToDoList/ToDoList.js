import React, { Component } from "react";
import { Container } from "../../ComponentToDoList/Container";
import { ThemeProvider } from "styled-components";
import { TodoListDarkTheme } from "../../Theme/ToDoListDarkTheme";
import { TodoListLightTheme } from "../../Theme/ToDoListLightTheme";
import { Dropdown } from "../../ComponentToDoList/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../ComponentToDoList/Heading";
import { Label, Input, TextField } from "../../ComponentToDoList/TextField";
import { Button } from "../../ComponentToDoList/Button";
import { Table, Tr, Td, Th, Thead, Tbody } from "../../ComponentToDoList/Table";
import { connect } from "react-redux";
import {
  addTaskAction,
  changeThemeAction,
  deletetaskAction,
  donetaskAction,
  edittaskAction,
  updateTaskAction,
} from "../../../redux/actions/ToDoListAction";
import { arrTheme } from "../../Theme/ThemeManager";

class TodoList extends Component {
  state = {
    taskName: "",
    disabled: true,
  };
  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>

            <Th className="text-right">
              <Button
                onClick={() => {
                  this.setState({
                    disabled:false
                  },()=>{this.props.dispatch(edittaskAction(task))
                })
                  
                }}
                className="ml-1"
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(donetaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(deletetaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTaskCompled = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}> {task.taskName}</Th>

            <Th className="text-right">
              <Button
                onClick={() => {
                  this.props.dispatch(deletetaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return <option value={theme.id}>{theme.name}</option>;
    });
  };

  // componentWillReceiveProps(newProps){
  //   console.log('this.props',this.props);
  //   console.log('newProps',newProps);
  //   this.setState({
  //     taskName:newProps.taskEdit.taskName
  //   })
  // }

  //  static getDerivedStateFromProps(newProps,currentState){

  //   let newState={...currentState,taskName: newProps.taskEdit.taskName}
  //   return newState;

  // }

  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <Container className="w-50">
          <Dropdown
            onChange={(e) => {
              let { value } = e.target;

              this.props.dispatch(changeThemeAction(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <Heading3>TO DO LIST</Heading3>

          <TextField
            value={this.state.taskName}
            onChange={(e) => {
              this.setState(
                {
                  taskName: e.target.value,
                },
                () => {}
              );
            }}
            label="Task Name"
            className="w-50"
          />
          <Button
            onClick={() => {
              let { taskName } = this.state;
              let newTask = {
                id: Date.now(),
                taskName: taskName,
                done: false,
              };
              this.props.dispatch(addTaskAction(newTask));
            }}
            className="ml-2"
          >
            {" "}
            <i className="fa fa-plus"></i> Add Task{" "}
          </Button>

          {this.state.disabled ? (
            <Button
              disabled
              onClick={() => {
                this.props.dispatch(updateTaskAction(this.state.taskName));
              }}
              className="ml-2"
            >
              {" "}
              <i className="fa fa-upload"></i> Update Task{" "}
            </Button>
          ) : (
            <Button
              onClick={() => {
                let {taskName}=this.state;
                this.setState({
                  disabled:true,
                  taskName:""
                  
                },()=>{
                  this.props.dispatch(updateTaskAction(taskName))
                })
              
                
              }}
              className="ml-2"
            >
              {" "}
              <i className="fa fa-upload"></i> Update Task{" "}
            </Button>
          )}

          <hr />
          <Heading3>Task To Do</Heading3>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>

          <Heading3>Task Completed</Heading3>

          <Table>
            <Thead>{this.renderTaskCompled()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    themeToDoList: state.ToDoListReducer.themeToDoList,
    taskList: state.ToDoListReducer.taskList,
    taskEdit: state.ToDoListReducer.taskEdit,
  };
};

export default connect(mapStateToProps)(TodoList);
