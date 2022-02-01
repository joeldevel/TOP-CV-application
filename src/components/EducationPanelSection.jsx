import {useState, useEffect} from 'react';

import Input from './Input';

function EducationPanelSection (props) {
    const [isPanelVisible, setPanelIsVisible] = useState(true);
    // console.log(props.handleChange);
    const {edu} = props;
    return (
        <div>
            <header className="education-item-header">
                <h3>new education item</h3>
                <button className="btn"type="button" onClick={()=>props.removeEducation(edu.id)}>
                    remove
                </button>
                <button className="btn" onClick={()=>setPanelIsVisible(pre => !pre)}>
                    {isPanelVisible? "hide": "show"}
                </button>
            </header>
            <div className={`edit-section ${isPanelVisible? "visible": "hidden"}`}>
                {
                <div className="input-group">
                    <label>title</label>
                    <input type="text"
                           value={edu.title.value}
                           name="education title"
                           data-id={edu.id}
                           onChange={(e)=> props.handleChange(e)}/>
                     <label>institution </label>
                     <input type="text"
                            value={edu.name.value}
                            name="education name"
                            data-id={edu.id}
                            onChange={(e)=> props.handleChange(e)}
                    />
                    <label>date</label>
                    <input type="date"
                           value={edu.date.value}
                           name="education date"
                           data-id={edu.id}
                           onChange={(e)=> props.handleChange(e)}
                   />
                </div>
                }
            </div>
        </div>
    )
}

export default EducationPanelSection;
