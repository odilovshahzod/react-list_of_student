import React,{useState} from "react";
import pencil from "./img/pencil.svg";
import "./style.css";
const Title= ()=>{
    return(
        <section className="section">
            <a className="text" href="#">Back</a>
            <p className="personal">personal details</p>
            <div className="personalContainer">
                <Image />
                <div className="danli">
                <InputDanli danli={danliRight}/>
                </div>
            </div>
            <div className="education">
                <p className="personal">education</p>
                <InputEducation danli={edu}/>
            </div>
            <div className="result">
                    <div className="line">
                        <span className="spanLine btn"></span>
                    </div>
                  <InputResult danli={res}/>
            </div>
            <div className="payment">
            <div className="line">
                        <span className="spanLine btn"></span>
                    </div>
                <p className="personal">payment</p>
                <InputPayment danli={pay}/>
            </div>
            <div className="footer">
                <Information info={footer}/>
                <button className="cancel btn">Cancel</button>
                <button className="save btn">Save</button>
            </div>
        </section>
    )}
//------------------ Image -------------------------------
const Image=()=>{
    const family=[
        {id:1, name:'Female'},
        {id:2, name:'Male'},
    ]
 return(
        <div className="imageContainer">
            <p className="textStyle">Image</p>
            <div className='image'>
                <button className="btn">
                     <img src={pencil}/>
                </button>
            </div>
            <p className="gender">Gender <span>*</span></p>
            <div className="family">
               {family.map((prev,count)=>{
                   return(
                       <div className="checked" key={count}>
                            {prev.name}
                                <span className="noclick" onClick={(e)=>{e.target.classList.toggle("click")}}></span>
                        </div>)})}
            </div>  
        </div>
    )}
//------------------ InputDanli -------------------------
const InputDanli=({danli})=>{
return(
        <div className="inputContainer">
                    <label className="labelCon textStyle">Name
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[0].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                     <label className="labelCon textStyle">Surname
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[1].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                     <label className="labelCon textStyle">Middle name
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[2].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                      <label className="labelCon textStyle">Date birth
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[3].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                      <label className="labelCon textStyle">Phone number
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[4].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                      <label className="labelCon textStyle">Nationality
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[5].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                        <label className="labelCon textStyle">Seria Passport
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[6].value} style={{width:'80px'}}/>
                            <input className="input" type='text' defaultValue={danli[6].namber} style={{  width:'150px',marginLeft:'10px'}}/>
                            <ClickButtons/>
                        </div>
                    </label>
                        <label className="labelCon textStyle">E-mail
                        <div className="inputCon">
                            <input className="input" type='email' defaultValue={danli[7].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                        <label className="labelCon textStyle">Region
                        <div className="inputCon">
                            <select className="input">
		                        <option>Tashkent region</option>
		                        <option>Qashqadaryo region</option>
		                        <option>Samarqand region</option>
		                        <option>Jizzax region</option>
		                        <option>Sirdaryo region</option>
		                        <option>Namangan region</option>
	                        </select>
                            <ClickButtons/>
                        </div>
                    </label>
                        <label className="labelCon textStyle">Address
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[9].value} style={{width:'280px'}}/>
                            <ClickButtons/>
                        </div>
                    </label>
                        <label className="labelCon textStyle">Dad's phone number
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[10].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                        <label className="labelCon textStyle">Mom's phone number
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[11].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
        </div>
        )}
//------------------ InputEducation -------------------------
    const InputEducation=({danli})=>{   
    return(
        <div className="inputContainer">
                    <label className="labelCon textStyle">Direction of study
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[0].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                    <label className="labelCon textStyle">Group
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[1].value} style={{width:'80px'}}/>
                            <ClickButtons/>
                        </div>
                    </label>
                    <label className="labelCon textStyle">Teacher
                        <div className="inputCon">
                             <select className="input">
		                        <option>Allayorov Hudoyor</option>
		                        <option>Allayorov Hudoyor</option>
		                        <option>Allayorov Hudoyor</option>
	                        </select>
                            <ClickButtons/>
                        </div>
                    </label>
                    <label className="labelCon textStyle">Studying language
                        <div className="inputCon">
                             <select className="input">
		                        <option>Uzbek</option>
		                        <option>English</option>
		                        <option>Rus</option>
	                        </select>
                            <ClickButtons/>
                        </div>
                    </label>
                    <label className="labelCon textStyle">Starting time of study
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[4].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
        </div>
    )}
//------------------ InputResult -------------------------
const InputResult=({danli})=>{
    return(
<div className="inputContainer">
            <div className="leftContainer">
                 <label className="labelCon textStyle">Result entering exam
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[0].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                    <label className="labelCon textStyle">Language
                        <div className="inputCon">
                             <select className="input">
		                        <option>English</option>
		                        <option>Uzbek</option>
		                        <option>Rus</option>
	                        </select>
                            <ClickButtons/>
                        </div>
                    </label>
                    <label className="labelCon textStyle">Language
                        <div className="inputCon">
                             <select className="input">
		                        <option>Uzbek</option>
		                        <option>English</option>
		                        <option>Rus</option>
	                        </select>
                            <ClickButtons/>
                        </div>
                    </label>
            </div>
            <div className="rightContainer">
                  <label className="labelCon textStyle">Graduation
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[1].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                    <label className="labelCon textStyle">Level language
                        <div className="inputCon">
                             <select className="input">
		                        <option>Intermediate</option>
		                        <option>Intermediate</option>
		                        <option>Intermediate</option>
	                        </select>
                            <ClickButtons/>
                        </div>
                    </label>
                    <label className="labelCon textStyle">Level language
                        <div className="inputCon">
                              <select className="input">
		                        <option>Intermediate</option>
		                        <option>Intermediate</option>
		                        <option>Intermediate</option>
	                        </select>
                            <ClickButtons/>
                        </div>
                    </label>
            </div>
        </div>
    )}
//------------------ InputPayment -------------------------
const InputPayment=({danli})=>{
    return(
<div className="inputContainer">
                    <label className="labelCon textStyle">Number of Agreement
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[0].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                    <label className="labelCon textStyle">Amount of payment
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[1].value}/>
                            <ClickButtons/>
                        </div>
                    </label>
                    <label className="labelCon textStyle">Paid payment
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[2].value} style={{color: "rgb(2,233,172)"}}/>
                            <ClickButtons/>
                        </div>
                    </label>
                    <label className="labelCon textStyle">Unpaid payment
                        <div className="inputCon">
                            <input className="input" type='text' defaultValue={danli[3].value} style={{color: "rgb(255,255,89)"}}/>
                            <ClickButtons/>
                        </div>
                    </label>
        </div>
    )}
// ----------------- Information -------------------------
function Information({info}) {
    function Confirmation(){
        const [colorAdd, setColorAdd] = useState(false);
            const colorAddTest=()=>{ setColorAdd(colorAdd ? false : true);}
        const [colorAss, setColorAss] = useState(false);
            const colorAssTest=()=>{ setColorAss(colorAss ? false : true);}
        return(
        <div className="confirmation">
                <button onClick={()=>colorAddTest()} className={colorAdd ? 'noneFocusButton':'onFocusButton'}>
                    <span className={colorAdd ? 'noneFocusSpan download':'onFocusSpan download'}></span>download</button>
                <button onClick={()=>colorAssTest()} className={colorAss ? 'noneFocusButton':'onFocusButton'}>
                    <span className={colorAss ? 'noneFocusSpan':'onFocusSpan'}></span>upload</button>
        </div>)}
    return (
        <div className="inforContainer">
            <table className="table">
                <thead>
                    <tr>
                        <th style={{paddingRight:"0", paddingLeft:"0"}}>№</th>
                        <th style={{textAlign:"center"}}>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Payment Confirmation</th>
                    </tr>
                </thead>
            {info.map((tabs)=>{const {id,date,type,amount}=tabs;
                return(
                <tbody key={id}>
                    <tr>
                        <td style={{paddingRight:"0", paddingLeft:"0"}}>{id}</td>
                        <td>{date}</td>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{Confirmation()}</td>
                    </tr>
                </tbody>
                )})}
            </table>
        </div>
    )}
//--------------------- Button ----------------------------
const ClickButtons=()=>{
    const [clicked, setClicked] = useState(false);
        const clickTest=()=>{setClicked(clicked ? false:true);}
    return(
        <div className="buttonClick">
            <div className={clicked ? 'only': 'onFocus'}>
                <button onClick={()=>clickTest()} className="btnDanli btn" style={{backgroundColor: "rgb(121,217,238)",marginBottom:'4px'}}>
                    <i className="icon iconTop btn"></i>                              
                </button>
                <button onClick={()=>clickTest()} className="btnDanli btn" style={{backgroundColor: "rgb(241,120,182)"}}>
                    <i className="icon iconBottom btn"></i>
                </button>
            </div>
            <div onClick={()=>clickTest()} className={clicked? 'onFocus':'only'}>
                <button className="listButton btn">
                   <img src={pencil}/>
                </button>
            </div>
        </div>
    )}
//-----------------------------------------------------
const danliRight=[
    {id:"0", value:"Asad"},
    {id:"1", value:"Bektayev"},
    {id:"2", value:"Abdulhamid o'g'li"},
    {id:"3", value:"28.02.1998"},
    {id:"4", value:"+998 90 000 00 00"},
    {id:"5", value:"Kazakx"},
    {id:"6", value:"AA",namber:"1234567"},
    {id:"7", value:"asadbekbektayev@gmail.com"},
    {id:"8"},
    {id:"9", value:"35 , Toshloq street , O'rtaChirchiq town",},
    {id:"10", value:"+998 90 000 00 00"}, 
    {id:"11", value:"+998 90 000 00 00"}
]
//-------------------------------------------------------
const edu=[
    {id:"1",value:"Frontend"},
    {id:"2",value:"G-21",},
    {id:"3",value:"Alloyorov Hudoyor"},
    {id:"4",value:"Uzbek"},
    {id:"5",value:"14:00"}
]
//--------------------------------------------------------
const res=[
    {id:"1",value:"Best",},
    {id:"2",value:"213-school"},
    {id:"3",value:"English",},
    {id:"4",},
    {id:"5",value:"Russian",},
    {id:"6",value:"Intermediate"},
]
//--------------------------------------------------------
const pay=[
    {id:"1",value:"AA1234567"},
    {id:"2",value:"4 000 000 sum"},
    {id:"3",value:"2 000 000 sum",},
    {id:"4",value:"2 000 000 sum",}
]
//--------------------------------------------------------
const footer=[
    {id:1, date:"14:00 21.09.2021", type:"Payme", amount:"1 000 000 sum"},
      {id:2, date:"14:00 21.09.2021", type:"Cash", amount:"1 000 000 sum"}
]
//--------------------------------------------------------
export default Title;