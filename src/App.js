import {useState} from 'react';
import './App.css';
// example of data needed
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

function Input({label, value, name, section, handleChange}) {
  const s = `${section} ${name}`;
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type="text"
             name={s}
             value={value[name]}
             onChange={(e) => handleChange(e)}/>
    </div>);
}

function Section({title, data, value, section, handleChange}) {
  // console.log(data)
  return (
    <div className="edit-section">
      <header>
          <h2> {title}</h2>
            <div className="edit-section-btn-header-controls">
                <button className="add-item" title="add item">+</button>
                <button className="collapse" title="collapse">V</button>
            </div>
      </header>
      {data.map((e, i) => <Input label={e.label} name={e.name} value={value} section={section} key={i} handleChange={handleChange}/>)}
    </div>
  );
}

function App() {
  // console.log(sections);
  const [CVData, setCVData] = useState({
      info: {
        firstname: "",
        lastname: "",
        email: "",
      },
      education: {
        name: "",
        title: "",
        date: "",
      }
  });
  // console.log(CVData);
  function handleChange(e) {
    // console.log(e.target.name);
    const [section, name] = e.target.name.split(" ");
    console.log(section, name)
    // update data
    setCVData(prevState => {
      return ({
            ...prevState,
            [section]: {
              ...prevState[section],
              [name]:e.target.value
            }
        }
      )
    });
  }

  return (
    <div className="app">
        <div className="edit-panel">
            <div className="panel-title">
                <h2>edit panel</h2>
            </div>
            <div className="sections-container scrollable-content">
                <Section title={sections[0].title}
                         data={sections[0].data}
                         handleChange={handleChange}
                         value={CVData.info}
                         section="info"
                         />
                 <Section title={sections[1].title}
                    data={sections[1].data}
                    handleChange={handleChange}
                    value={CVData.education}
                    section="education"
                    />

            </div>
            <div className="controls-container">
                <button className="control-button">Reset</button>
                <button className="control-button">Save</button>
                <button className="control-button print-button">Print</button>
            </div>
        </div>
        <div className="preview-panel">
            <div className="panel-title">
                <h2 className="panel-title">preview panel</h2>
            </div>
            <div className="cv-container">
                <div className="cv-header">
                    <h1>cv preview here</h1>
                </div>
                { CVData &&
                <div className="cv-body">
                    <section className="cv-section">
                        <h2 className="cv-section-title">General information</h2>
                        <p className="cv-complete-name">
                            <span className="cv-field-label">name </span>
                            {CVData.info.firstname} {CVData.info.lastname}
                        </p>
                        <p className="cv-email">
                            <span className="cv-field-label">email </span>
                            {CVData.info.email}
                        </p>
                    </section>
                    <section className="cv-section">
                        <h2 className="cv-section-title">Education</h2>
                        <ul className="education-list">
                            <li>
                                <span className="cv-field-label">name </span>{CVData.education.name}
                                   <ul>
                                        <li><span className="cv-field-label">title </span>
                                            {CVData.education.title}
                                        </li>
                                        <li><span className="cv-field-label">date </span>
                                            {CVData.education.date}
                                        </li>
                                   </ul>
                            </li>
                            <li>
                                <span className="cv-field-label">name </span>Pio XII Politeknejus
                                   <ul>
                                        <li><span className="cv-field-label">title </span>Boleadoras Engineer</li>
                                        <li><span className="cv-field-label">date </span>2015</li>
                                   </ul>
                            </li>
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

export default App;
