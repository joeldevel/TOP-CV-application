import {useState, useEffect} from 'react';

import Input from './Input';

function WorkPanelSection (props) {
    const [isPanelVisible, setPanelIsVisible] = useState(true);
    // console.log(props.handleChange);
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
                    <label>company </label>
                    <input type="text"
                           value={experience.company.value}
                           name="work-experience company"
                           data-id={experience.id}
                           onChange={(e)=> props.handleChange(e)}/>
                     <label>role/position </label>
                     <input type="text"
                            value={experience.position.value}
                            name="work-experience position"
                            data-id={experience.id}
                            onChange={(e)=> props.handleChange(e)}
                     />
                    <label>main tasks</label>
                    <textarea value={experience.mainTasks.value}
                            name="work-experience position"
                            data-id={experience.id}
                            onChange={(e)=> props.handleChange(e)}
                     />

                    <label>from </label>
                    <input type="date"
                           value={experience.dateFrom.value}
                           name="work-experience dateFrom"
                           data-id={experience.id}
                           onChange={(e)=> props.handleChange(e)}
                    />
                    <label>to </label>
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
