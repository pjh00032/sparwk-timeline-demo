import './App.css';
import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
export { RiHeart3Fill } from 'react-icons/ri';

/**
 *
 * */
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            events : [{
                date : "22/09/2017", /*기준일*/
                dateString: "22/09/2017 11:00:11", /*입력된 시간*/
                event: "start timeline", /*코멘트*/
                color : "#fcd804" /*아이콘 색상*/
            }
            ],
            inputText : 0 /*input text value*/
        }

    }

    /*
     * 타임라인 항목 추가
     * : input 태그에 입력된 수만큼 timeline 추가
     * 1) 홀수 : 초록색 / 짝수 : 노란색 으로 생성
     * */
    onAddTimeLine = () => {
        let time = null;
        let today = new Date();
        let date = ''; /*기준일*/
        let addDay = '';
        let color = '';

        //입력한 값이 숫자일때만 동작
        if(!isNaN(this.state.inputText)){
            let newEvents = []; //추가할 timeline
            let num = 1;

            while(num<=this.state.inputText) {
                if(num%2 === 0){
                    //노란색
                    color = "#fcd804";
                    time = new Date(today.setTime(today.getTime()+1));
                }
                else
                {
                    //초록색
                    color = "#0aaf0c";
                    time = new Date(today.setDate(today.getDate()+1));
                }

                date = time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear();
                addDay = time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ":" + time.getMilliseconds();

                newEvents.push({
                    date : date,
                    dateString: addDay,
                    event: num,
                    color: color
                })

                num++;
            }


            //적용
            const { events } = this.state;
            this.setState({
                events: events.concat(newEvents)
            })
        }else
        {
            alert("숫자를 입력해주시기 바랍니다.");
        }
    }

    //input text onChange Evnet
    onInputTextChange = (e) => {
        this.setState({inputText : e.target.value})
    }

    //input text Max Length Check text
    onInputMaxLengthCheck= (e) => {
        if (e.target.value.length > e.target.maxLength){
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }
    }

    render() {
        let addDateComment = "12/8/2021"; /*시작 기준일*/

        return (
            <div>
                {/**timeline 추가 input************************************************************************************************************************/}
                <div style={{height:100}}>
                    <span>
                        Enter the number to add of timeline :&nbsp;
                    </span>

                    <input type={"number"} value = {this.state.inputText} onChange={this.onInputTextChange} maxLength={5} onInput={this.onInputMaxLengthCheck}/>
                    &nbsp;
                    <button onClick={this.onAddTimeLine}> add timeline </button>
                </div>

                {/**timeline 표출*******************************************************************************************************************************/}
                <div
                    className="App"
                    style={{ fontFamily: "Trebuchet Ms" }}
                >
                    <h1>Timeline Test</h1>
                    <VerticalTimeline layout="1-column">
                        <VerticalTimelineElement
                            icon={ <div>Waiting to accept</div> }
                            iconStyle={{ background: "#fcd804", width:120, left:-42, borderRadius:2, height:25, lineHeight:2 }}
                        >
                            <h3>가나다라</h3>

                        </VerticalTimelineElement>

                        {this.state.events.map((event) => {

                            //기준일이 같으면 timeline만 추가
                            if(addDateComment === event.date){
                                return (
                                    <VerticalTimelineElement
                                        date={event.date}
                                        icon={ <div></div> }
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
                            }
                            else //기준일이 다르면, 기준일 추가, timeline 추가
                            {
                                addDateComment = event.date;
                                return (
                                    <div>
                                        <VerticalTimelineElement
                                            icon={ <div>{event.date}</div> }
                                            iconStyle={{ background: "#a1a1a0", color:"#ffffff", width:120, left:-42, borderRadius:2, height:25, lineHeight:2 }}
                                        >
                                        </VerticalTimelineElement>
                                        <VerticalTimelineElement
                                            date={event.dateString}
                                            icon={ <div></div> }
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
                        })}

                    </VerticalTimeline>
                </div>
            </div>

        )
    }
}
export default App;
