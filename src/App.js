import {useState} from 'react';

import uniqid from 'uniqid';

import PanelSection from './components/PanelSection';
import EducationItem from './components/EducationItem';
import EducationPanelSection from './components/EducationPanelSection';

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
  // console.log(sections);
  const [generalInfo, setGeneralInfo] = useState({
        firstname: "",
        lastname: "",
        email: "",
      });
  const [education, setEducation] = useState([]);

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
      setGeneralInfo({
            firstname: "",
            lastname: "",
            email: "",
        });
  }

  const printCV = () => {
      // var doc = new jsPDF('p', 'pt');
      //
      // doc.text(20, 20, 'This is the first title.')
      //
      // doc.addFont('helvetica', 'normal')
      // doc.text(20, 60, 'This is the second title.')
      // doc.text(20, 100, 'This is the thrid title.')
      //
      //
      // doc.save('demo.pdf')
      window.print();
  }

  return (
    <div className="app">
        <div className="edit-panel">
            <div className="panel-title">
                <h2>edit panel</h2>
                <header>
                    <h2>general information</h2>
                </header>
             </div>
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
                     <button className="add-item"
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
            </div>
            {/*edit controls*/}
            <div className="controls-container">
                <button className="control-button" onClick={resetFields}>Reset</button>
                <button className="control-button">Save</button>
                <button className="control-button print-button" onClick={printCV}>Print</button>
            </div>
        </div>
        {/* ======================= preview Panel ===================*/}
        <div className="preview-panel">
            <div className="panel-title">
                <h2 className="panel-title">Preview panel</h2>
            </div>
            <div className="cv-container myDivToPrint">
                <div className="cv-header">
                    <h1>{generalInfo.firstname} {generalInfo.lastname}</h1>
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
                            <li>
                                <span className="cv-field-label">company </span> google
                                   <ul>
                                        <li><span className="cv-field-label">position </span>CEO</li>
                                        <li><span className="cv-field-label">from </span>1990</li>
                                        <li><span className="cv-field-label">to </span>present</li>
                                   </ul>
                            </li>
                            <li>
                                <span className="cv-field-label">company </span> Amazon
                                   <ul>
                                        <li><span className="cv-field-label">position </span>Call center</li>
                                        <li><span className="cv-field-label">from </span>1985</li>
                                        <li><span className="cv-field-label">to </span>1990</li>
                                   </ul>
                            </li>

                        </ul>
                    </section>
                </div>
                }
            </div>
        </div>
    </div>
  );
}

// function EducationItem({data}) {
//   console.log(data)
//     return (
//           <li>
//               <span className="cv-field-label">name </span>{data.name}
//                  <ul>
//                       <li><span className="cv-field-label">title </span>
//                           {data.title}
//                       </li>
//                       <li><span className="cv-field-label">date </span>
//                           {data.date}
//                       </li>
//                  </ul>
//           </li>
//     )
// }
// {/*<li>
//     <span className="cv-field-label">name </span>{generalInfo.education.name}
//        <ul>
//             <li><span className="cv-field-label">title </span>
//                 {generalInfo.education.title}
//             </li>
//             <li><span className="cv-field-label">date </span>
//                 {generalInfo.education.date}
//             </li>
//        </ul>
// </li>*/}

export default App;
