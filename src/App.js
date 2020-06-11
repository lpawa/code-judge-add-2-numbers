import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: "",
            value2: "",
            sum: null
        };
        this.setValue1 = this.setValue1.bind(this);
        this.setValue2 = this.setValue2.bind(this);
        this.setSum = this.setSum.bind(this);
    }

    setValue1(event) {
        this.setState({
            value1: event.target.value
        });
    }

    setValue2(event) {
        this.setState({value2: event.target.value});
    }

    setSum() {
        if(this.state.value1 && this.state.value2) {
            this.setState({
                sum: parseInt(this.state.value1) + parseInt(this.state.value2)
            })
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <div className={"inp"}>
                            <label> Enter First Number: </label>
                            <input type={"number"} id={"Text1"} onChange={this.setValue1}/>
                        </div>
                        <div className={"inp"}>
                            <label> Enter Second Number: </label>
                            <input type={"number"} id={"Text2"} onChange={this.setValue2}/>
                        </div>
                        <div className={"inp"}>
                            <label> Result: </label>
                            <input type={"number"} id={"txtresult"} value={this.state.sum}/>
                        </div>
                    </div>
                    <div>
                        <button name={"clickbtn"} disabled={!(this.state.value1 && this.state.value2)} onClick={this.setSum}>Display Result</button>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
