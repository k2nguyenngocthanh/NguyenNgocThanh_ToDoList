import React,{Component} from "react";
import styled, { ThemeProvider } from "styled-components";

const configDarkTheme = {
    background: "#000",
    color: "#fff",
  };

  const configLightTheme = {
    background: "red",
    color: "blue",
  };
export default class DemoTheme extends Component {
    
    state={
        currentTheme:configDarkTheme
    }

    handleChangeTheme=(event) =>{
        this.setState({
            currentTheme: event.target.value =='1' ?configDarkTheme : configLightTheme
        })
    }
  render() {
   
    const DivStyle = styled.div`
      color: ${(props) => props.theme.color};
      padding: 5%;
      background-color: ${(props) => props.theme.background};
    `;
    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyle>Nguyễn Ngọc Thanh</DivStyle>
        <select onChange={this.handleChangeTheme}>
          <option value="1">Dark Theme</option>
          <option value="2">Light Theme</option>
        </select>
      </ThemeProvider>
    );
  }
}
