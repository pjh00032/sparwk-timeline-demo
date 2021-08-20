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
            inputText : 0
        }

    }



    onAddTileLine = () => {
        let time = null;
        let today = new Date();
        let date = '';
        let day = '';
        let color = '';

        if(!isNaN(this.state.inputText)){
            let newEvents = [];

            let num = 0;
            while(num<=this.state.inputText) {
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

            const { events } = this.state;

            this.setState({
                events: events.concat(newEvents)
            })
        }else
        {
            alert("숫자를 입력해주시기 바랍니다.");
        }



    }

    onInputTextChange = (e) => {
        this.setState({inputText : e.target.value})
    }

    maxLengthCheck= (e) => {
        if (e.target.value.length > e.target.maxLength){
            //object.maxLength : 매게변수 오브젝트의 maxlength 속성 값입니다.
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }
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
                <span>
                    Enter the number to add of timeline :&nbsp;
                </span>

                <input type={"number"} value = {this.state.inputText} onChange={this.onInputTextChange} maxLength={5} onInput={this.maxLengthCheck}/>
                &nbsp;
                <button onClick={this.onAddTileLine}> add timeline </button>
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
