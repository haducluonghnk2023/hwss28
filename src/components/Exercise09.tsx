import React, { Component } from 'react'

interface Class {
    theme: string;
    language: string;
    isButtonClicked: boolean,
}


export default class B9 extends Component<any,Class> {
    constructor(props:Class) {
        super(props);
        this.state = {
          theme: 'dark', 
          language: 'vietnamese',
          isButtonClicked: false,
        };
        
      }
      toggle = () => {
        if (this.state.theme === 'light') {
            this.setState({
              theme: 'dark',
              isButtonClicked: false,
            });
          } else {
            this.setState({
              theme: 'light',
              isButtonClicked: true,
            });
          }
          if (this.state.language === 'english') {
            this.setState({
                language: 'vietnamese',
            });
          } else {
            this.setState({
                language: 'english',
            });
          }
         
      };
    
    
  render() {
    const { theme, language, isButtonClicked } = this.state;
    return (
      <div>
        <h1>Exercise09</h1>
        <div>
            <div className={isButtonClicked ? 'clicked' : 'aa'}>

            <th>{`Theme: ${theme}, Language: ${language}`}</th>
            <button  onClick={this.toggle}>Toggle</button>
            </div>
        </div>
      </div>
    )
  }
}
