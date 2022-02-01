import {useState, useEffect} from 'react';

import Input from './Input';

function WorkPanelSection (props) {
    const [isPanelVisible, setPanelIsVisible] = useState(true);
    const {experience} = props;
    return (
        <div className="new-education-item">
            <header className="work-item-header">
                <h3>new work item</h3>
                <button className="btn btn-remove" type="button" onClick={()=>props.removeWorkExperience(experience.id)}>
                    remove
                </button>
                <button className="btn btn-toggle-show" onClick={()=>setPanelIsVisible(pre => !pre)}>
                    {isPanelVisible? "hide": "show"}
                </button>
            </header>
            <div className={`edit-section ${isPanelVisible? "visible": "hidden"}`}>
                {
                <div className="input-group">
                    <label>Company </label>
                    <input type="text"
                           value={experience.company.value}
                           name="work-experience company"
                           data-id={experience.id}
                           onChange={(e)=> props.handleChange(e)}/>
                       <label>Role/position </label>
                     <input type="text"
                            value={experience.position.value}
                            name="work-experience position"
                            data-id={experience.id}
                            onChange={(e)=> props.handleChange(e)}
                     />
                 <label>Main tasks</label>
                    <textarea value={experience.mainTasks.value}
                            name="work-experience position"
                            data-id={experience.id}
                            onChange={(e)=> props.handleChange(e)}
                     />

                 <label>From </label>
                    <input type="date"
                           value={experience.dateFrom.value}
                           name="work-experience dateFrom"
                           data-id={experience.id}
                           onChange={(e)=> props.handleChange(e)}
                    />
                <label>To </label>
                    <input type="date"
                          value={experience.dateTo.value}
                          name="work-experience dateTo"
                          data-id={experience.id}
                          onChange={(e)=> props.handleChange(e)}
                     />
                </div>
                }
            </div>
        </div>
    )
}

export default WorkPanelSection;
