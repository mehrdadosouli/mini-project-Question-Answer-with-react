import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
    constructor(){
        super();
       this.state={
        sum:0,
        showscore:false,
        currenta:0,
        questions:[
            {
                    q:'Which animal is known as the Ship of the Desert?',
                    item:1,
                    answers:[
                    {isq:true,id:1,answer:'Camel'},
                    {isq:false,id:2,answer:'CAT'},
                    {isq:false,id:3,answer:'DOG'},
                ],
            },
            {
                    q:'How many days are there in a week?',
                    item:2,
                    answers:[
                        {isq:false,id:5,answer:'6 days'},
                        {isq:false,id:6,answer:'8 days'},
                        {isq:true,id:4,answer:'7 days'},
                ]
            },
            {
                    q:'How many days are there in a year?',
                    item:3,
                    answers:[
                        {isq:false,id:8,answer:'360 days'},
                        {isq:true,id:7,answer:'365 days'},
                    {isq:false,id:9,answer:'345 days'},
                ],
            },
        ]
       }
    }
    handlers=(ans)=>{
       if(ans){
            this.setState(prevs=>({
                sum:prevs.sum + 1
            }))
       }
       if(this.state.currenta < this.state.questions.length - 1){
           this.setState(prevstate=>({
           currenta:prevstate.currenta + 1
        }))
       }else{
        this.setState({
            showscore:true
        })
       }

    }
  render() {
    return (
      <div className='div'>
        {this.state.showscore ?
            <div className='sumScores'>
                <p>your score is {this.state.sum} of 3</p>
            </div> : <div>
           <div className='container'>
                <div className='left'>
                    <div className='left_item'>{this.state.questions[this.state.currenta].q}</div>     
                </div>
                <div className='right'>
                    <div className='right_item'>{this.state.questions[this.state.currenta].answers.map(item=>{
                        return <button key={item.id} onClick={()=>this.handlers(item.isq)}>{item.answer}</button>
                    })}
                    </div>  
                </div>
            </div>
            <div className='sum'>
                <p>your score is: {this.state.sum} of 3</p>
            </div>
        </div>
         }
      </div>
    )
  }
}
