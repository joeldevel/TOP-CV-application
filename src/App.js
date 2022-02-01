import React, {useState, useRef} from 'react';

import uniqid from 'uniqid';
import ReactToPrint from "react-to-print";

import PanelSection from './components/PanelSection';
import EducationItem from './components/EducationItem';
import EducationPanelSection from './components/EducationPanelSection';
import WorkPanelSection from './components/WorkPanelSection';

import './App.css';
// example of data needed for creating inputs for edit panel
// each section needs a title
// data are input, each input needs a label and a value
// label is the field name and value is what the user inputs
// <input name="label here" value={}>
let generalInfo = {
  title: "general information",
  data: [
    { label: "first name",
      name: "firstname",
      value: ""
    },
    { label: "last name",
      name: 'lastname',
      value: ""
    },
    { label: "email",
      name: "email",
      value: ""
    },
  ]
};

let education = {
  id: "",
  title: "education",
  data: [
    { label: "name",
      name: "name",
      value: "Sooftware engineer"
    },
    { label: "title",
      name: "title",
      value: ""
    },
    { label: "date",
      name: "date",
      value: "joao@gmail.com"
    },
  ]
};

let workExperience = {
  title: "work experience",
  data: [
    { label: "company name",
      value: "acme"
    },
    { label: "position",
      value: "CTO"
    },
    { label: "main task",
      value: "calling clients"
    },
    { label: "from",
      value: "some date"
    },
    { label: "to",
      value: "some date"
    },
  ]
};

let sections = [generalInfo, education, workExperience];

const educationPrototype = {name: "", title: "", date: ""};

function App() {
  // for printing cv using react-to-pdf
  let componentRef = useRef();
  // console.log(sections);
  const [generalInfo, setGeneralInfo] = useState({
        firstname: "",
        lastname: "",
        email: "",
      });
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  const [headingBg, setHeadingBg] = useState("dodgerblue");
  const [headingColor, setHeadingColor] = useState("#000");

  // console.log([...generalInfo.education].map(x=>console.log('hola')));
  function handleChange(e) {
    // console.log(e.target.name);
    const [section, name] = e.currentTarget.name.split(" ");
    if(section=="info"){
        setGeneralInfo(prevState => {
          return ({
            ...prevState,
            [name]:e.target.value
          })
        });
    } else if(section=="education") {
        // console.log(" handleChange education", e.target.dataset.id);
        console.log("education: ", education);
        // find object in array using data-id
        const searchIndex = education.findIndex((edu) => edu.id==e.target.dataset.id);

        console.log(searchIndex, name, e.target.value);
        // update field using name
        let newArray = [...education];
        newArray[searchIndex][name] = e.target.value;
        setEducation(newArray);

    }else if(section=="work-experience") {
        // console.log({workExperience});
        // find object in array using data-id
        const searchIndex = workExperience.findIndex((exp) => exp.id==e.target.dataset.id);
        //
        // console.log(searchIndex, name, e.target.value);
        // // update field using name
        let newArray = [...workExperience];
        newArray[searchIndex][name] = e.target.value;
        setWorkExperience(newArray);
    }
  }

  /* Adds group to edit panel*/
  const addEducation = () => {

    if( education.lenght === 0) {
        setEducation([{
            id: uniqid(),
            name: "",
            title:"" ,
            date: "",
        }]);
        return;
    }
    setEducation(oldEducation => [...oldEducation, {
        id: uniqid(),
        name: "",
        title:"" ,
        date: "",
    }]);
  }

  const addItem = () => {

  }

  const removeEducation = (id) => {
      console.log(id);
      const newEducationArray = education.filter(edu => edu.id!==id);
      setEducation(newEducationArray);
  }

  const resetFields = () => {
      setEducation([]);
      setWorkExperience([]);
      setGeneralInfo({
            firstname: "",
            lastname: "",
            email: "",
        });
  }

  const printCV = () => {

  }

// work experienc
/* Adds group to edit panel*/
const addWorkExperience = () => {
// company name, position title, main tasks of your jobs, date from and until when you worked for that company
  if( workExperience.lenght === 0) {
      setWorkExperience([{
          id: uniqid(),
          company: "",
          position:"" ,
          mainTasks: "",
          dateFrom: "",
          dateTo: "",
      }]);
      return;
  }
  setWorkExperience(oldExperience => [...oldExperience, {
      id: uniqid(),
      company: "",
      position:"" ,
      mainTasks: "",
      dateFrom: "",
      dateTo: "",
      }]);
    }

    const removeWorkExperience = (id) => {
        console.log(id);
        const newWorkExperienceArray = workExperience.filter(exp => exp.id!==id);
        setWorkExperience(newWorkExperienceArray);
    }

  return (
    <div className="app">
        <div className="edit-panel">
            <div className="panel-title-container">
                <h2>edit panel</h2>
             </div>
             <header class="edit-section-header">
                 <h2>general information</h2>
             </header>
             <div className="sections-container scrollable-content">
             <PanelSection
                     dataInputs={sections[0].data}
                     handleChange={handleChange}
                     data={generalInfo}
                     section="info"
                     showInputs={true}
             />

         <header className="edit-panel-section-header">
             <h2>education</h2>
                 <div className="edit-section-btn-header-controls">
                     <button className="btn add-item"
                         title="add item"
                         data-section-group="education"
                         onClick={(e) => addEducation(e)}>
                         add
                     </button>
                 </div>
         </header>
         {education.length > 0 &&
             education.map(edu => (
                 <EducationPanelSection
                     edu={edu}
                     handleChange={handleChange}
                     key={edu.id}
                     removeEducation={removeEducation}/>
             ))
         }
             <header className="edit-panel-section-header">
                 <h2>Work experience</h2>
                 <div className="edit-section-btn-header-controls">
                     <button className="add-item btn"
                         title="add item"
                         data-section-group="education"
                         onClick={(e) => addWorkExperience(e)}>
                         add
                     </button>
                 </div>
             </header>
             {workExperience.length > 0 &&
                 workExperience.map(experience => (
                     <WorkPanelSection
                         experience={experience}
                         handleChange={handleChange}
                         key={experience.id}
                         removeWorkExperience={removeWorkExperience}/>
                 ))
             }
            </div>



            {/* ************ control buttons ***************** */}

            <div className="controls-container">
                <button className="control-button" onClick={resetFields}>Reset</button>
                <button className="control-button" disabled>Save</button>
                <ReactToPrint
                  documentTitle="My CV"
                  trigger={() => <button className="control-button print-button">Print CV</button>}
                  content={() => componentRef}

                />
                {/*<button className="control-button print-button" onClick={printCV}>Print</button>*/}
            </div>
        </div>
        {/* ======================= preview Panel ===================*/}
        <div className="preview-panel">
            <div className="panel-title-container">
                <h2 className="panel-title">Preview panel</h2>
            </div>
            <div className="bg-color-picker">
                <label htmlFor="color">Change header background</label>
                <input type="color" name="color" value={headingBg} onChange={(e)=>setHeadingBg(e.target.value)}/>
                <label htmlFor="color">Change header color</label>
                <input type="color" name="color" value={headingColor} onChange={(e)=>setHeadingColor(e.target.value)}/>
            </div>
            <div className="cv-container myDivToPrint"
                ref={(el) => (componentRef = el)}>
                {/*
                <style type="text/css" media="print">
                        "\@media print { .myDivToPrint{background: whitesmoke;}}\
                </style>
                "*/}
                <div className="cv-header" style={{background: headingBg, color: headingColor}}>
                    <h1>
                        {generalInfo.firstname.length!==0 ? `${generalInfo.firstname} ${generalInfo.lastname}`: "your name"}
                    </h1>
                </div>
                { generalInfo &&
                <div className="cv-body">
                    <section className="cv-section">
                        <h2 className="cv-section-title">General information</h2>
                        <p className="cv-complete-name">
                            <span className="cv-field-label">name </span>
                            {generalInfo.firstname} {generalInfo.lastname}
                        </p>
                        <p className="cv-email">
                            <span className="cv-field-label">email </span>
                            {generalInfo.email}
                        </p>
                    </section>
                    <section className="cv-section">
                        <h2 className="cv-section-title">Education</h2>
                        <ul className="education-list">
                          {education.length > 0 && education.map((item, i)=>(
                            <EducationItem key={i} name={item.name} title={item.title} date={item.date}/>
                          ))}
                        </ul>
                    </section>
                    <section className="cv-section">
                        <h2 className="cv-section-title">Work experience</h2>
                        <ul className="work-experience-list">
                          {workExperience.length > 0 && workExperience.map((item, i)=>(
                              <li>
                                  <span className="cv-field-label">company </span> {item.company}
                                      <ul>
                                          <li><span className="cv-field-label">position </span>{item.position}</li>
                                          <li><span className="cv-field-label">main tasks </span>{item.mainTasks}</li>
                                          <li><span className="cv-field-label">from </span>{item.dateFrom}</li>
                                          <li><span className="cv-field-label">to </span>{item.dateTo}</li>
                                      </ul>
                               </li>
                          ))}
                        </ul>
                    </section>
                </div>
                }
            </div>
        </div>
    </div>
  );
}


export default App;
