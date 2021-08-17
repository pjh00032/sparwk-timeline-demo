import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
/*import 'react-vertical-timeline-component/style.min.css';*/
import { LikeIcon } from './Icon';
export { RiHeart3Fill } from 'react-icons/ri';


// eslint-disable-next-line no-undef
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newEvent : [{
                date : "01/01/2021",
                dateString : "01/01/2021'<br/>'11:00:00:121",
                event : '시작'
            }],
            events : [{
                date : "22/09/2017",
                dateString: "22/09/2017 11:00:11",
                event: "Naissance du projet suite à la publication de l'<a href=\"https://www.legifrance.gouv.fr/affichTexteArticle.do;jsessionid=AE9DCF75DDCF0465784CEE0E7D62729F.tplgfr37s_2?idArticle=JORFARTI000035607420&cidTexte=JORFTEXT000035607388&dateTexte=29990101&categorieLien=id\">ordonnance du 22 Septembre 2017</a>",
                color : "#fcd804"
            }
            ],
            inputText : ''
        }

    }



    onAddTileLine = () => {
        let time = null;
        let today = new Date();
        let date = '';
        let day = '';
        let color = '';

        let newEvents = [];

        console.log(today);
        let num = 0;
        while(num<=1000) {
            if(num%2 === 0){
                color = "#fcd804";
                time = new Date(today.setTime(today.getTime()+1));
            }
            else
            {
                color = "#0aaf0c";
                time = new Date(today.setDate(today.getDate()+1));
            }
            date = time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear();
            day = time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ":" + time.getMilliseconds();



            newEvents.push({
                date : date,
                dateString: day,
                event: num,
                color: color
            })

            num++;
        }
        console.log(newEvents);

        const { events } = this.state;

        this.setState({
            events: events.concat(newEvents)
        })
/*
        this.setState({newEvent : newEvents});

        console.log(this.state.newEvent);*/
    }

    onChangeEvents = () => {

        console.log(this.state.newEvent.entries() );

        /*this.setState({events : [...this.state.events, this.state.newEvent ]});*/
    }

    onInputTextChange = (e) => {
        this.setState({inputText : e.target.value})
    }

    addDate = (day) => {
        return(
            <VerticalTimelineElement
                icon={ <a>{(day)}</a> }
                iconStyle={{ background: "#a1a1a0", color:"#ffffff", width:120, left:-42, borderRadius:2, height:25, lineHeight:2 }}
            >
            </VerticalTimelineElement>
        )
    }

render(){
    let addDateComment = "12/8/2021";


    return (
        <div>
            <div style={{height:100}}>
                <input type={"text"} value = {this.state.inputText} onChange={this.onInputTextChange}/>
                <button onClick={this.onAddTileLine}>입력 버튼 </button>
                <button onClick={this.onChangeEvents}>event Change </button>
            </div>
            <div
                className="App"
                style={{ fontFamily: "Trebuchet Ms" }}
            >
                <h1>Timeline Test</h1>
                <VerticalTimeline layout="1-column">
                    <VerticalTimelineElement
                        icon={ <a>Waiting to accept</a> }
                        iconStyle={{ background: "#fcd804", width:120, left:-42, borderRadius:2, height:25, lineHeight:2 }}
                    >
                        <h3>가나다라</h3>

                    </VerticalTimelineElement>

                    {this.state.events.map((event) => {

                        if(addDateComment === event.date){
                            return (
                                <VerticalTimelineElement    
                                    date={event.date}
                                    icon={ <a></a> }
                                    iconStyle={{ background: event.color}}
                                >
                                    <h3
                                        className="vertical-timeline-element-title"
                                        dangerouslySetInnerHTML={{ __html: event.event }}
                                    />
                                    <button
                                        onClick={function () {
                                            alert(event.date);
                                        }}
                                    >show date</button>
                                </VerticalTimelineElement>
                            )
                        }else
                        {
                            addDateComment = event.date;
                            return (
                                <div>
                                <VerticalTimelineElement
                                    icon={ <a>{event.date}</a> }
                                    iconStyle={{ background: "#a1a1a0", color:"#ffffff", width:120, left:-42, borderRadius:2, height:25, lineHeight:2 }}
                                >
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    date={event.dateString}
                                    icon={ <a></a> }
                                    iconStyle={{ background: event.color}}
                                >
                                    <h3
                                        className="vertical-timeline-element-title"
                                        dangerouslySetInnerHTML={{ __html: event.event }}
                                    />
                                    <button
                                        onClick={function () {
                                            alert(event.dateString);
                                        }}
                                    >show date</button>
                                </VerticalTimelineElement>
                                </div>
                            )

                        }
                        } )}

                </VerticalTimeline>
            </div>
        </div>

  )
}
}
export default App;
