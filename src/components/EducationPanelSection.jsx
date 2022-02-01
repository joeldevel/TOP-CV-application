import {useState, useEffect} from 'react';

import Input from './Input';

function EducationPanelSection (props) {
    const [isPanelVisible, setPanelIsVisible] = useState(true);
    const {edu} = props;
    return (
        <div className="new-education-item">
            <header className="education-item-header">
                <h3>New education item</h3>
                <button className="btn btn-remove" type="button" onClick={()=>props.removeEducation(edu.id)}>
                    Remove
                </button>
                <button className="btn btn-toggle-show" onClick={()=>setPanelIsVisible(pre => !pre)}>
                    {isPanelVisible? "hide": "show"}
                </button>
            </header>
            <div className={`edit-section ${isPanelVisible? "visible": "hidden"}`}>
                {
                <div className="input-group">
                    <label>Title</label>
                    <input type="text"
                           value={edu.title.value}
                           name="education title"
                           data-id={edu.id}
                           onChange={(e)=> props.handleChange(e)}/>
                       <label>Institution </label>
                     <input type="text"
                            value={edu.name.value}
                            name="education name"
                            data-id={edu.id}
                            onChange={(e)=> props.handleChange(e)}
                    />
                <label>Date</label>
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
