import React from "react"

class Classcomponent extends React.Component{
    state={
        subjectname:"React",
        year:2013,
        userdata:""
    }
    handleChange=(e)=>{
        this.setState({
            userdata:e.target.value
        })
    }
    handelClick=()=>{
        console.log (this.state.userdata);
        this.setState({
            userdata:""
        })
    }
    render(){
        return(
            <div>
                <h1>Good Afternoon</h1>
                <p>{this.state.subjectname}</p>
                <p>{this.state.year}</p>
                <input 
                   value={this.state.userdata}
                   onChange={this.handleChange}/>
                <button onClick={this.handelClick}>click</button>

            </div>
        )
    }
}
export default Classcomponent