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
      value: "Joao"
    },
    { label: "last name",
      value: "del prete"
    },
    { label: "email",
      value: "joao@gmail.com"
    },
  ]
};

let education = {
  title: "education",
  data: [
    { label: "name",
      value: "Sooftware engineer"
    },
    { label: "title",
      value: ""
    },
    { label: "date",
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

function Input({data}) {
  // console.log(data)
  return (
    <div className="input-group">
      <label>{data.label}
      </label>
      <input type="text" name="{data.value}"/>
    </div>);
}

function Section({title, data}) {
  return (
    <div className="edit-section">
      <header>
          <h2> {title}</h2>
            <div className="edit-section-btn-header-controls">
                <button className="add-item" title="add item">+</button>
                <button className="collapse" title="collapse">V</button>
            </div>
      </header>
      {data.map((e, i) => <Input data={e} key={i}/>)}
    </div>
  );
}

function App() {
  console.log(sections);
  return (
    <div className="app">
        <div className="edit-panel">
            <div className="panel-title">
                <h2>edit panel</h2>
            </div>
            <div className="sections-container scrollable-content">
                <Section title={sections[0].title} data={sections[0].data}/>
                <Section title={sections[1].title} data={sections[1].data}/>
                <Section title={sections[2].title} data={sections[2].data}/>
                {/*more sections here...*/}
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
                <div className="cv-body">
                    <h2> General information</h2>

                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
