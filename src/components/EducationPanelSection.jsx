import Input from './Input';

function EducationPanelSection (props) {
    console.log(props.handleChange);
    const {edu} = props;

    return (
        <div>
            <h1>new education</h1>
            <button type="button" onClick={()=>props.removeEducation(edu.id)}>
                remove
            </button>
            <div className="edit-section">
                {
                <div className="input-group">
                    <label>title</label>
                    <input type="text"
                           value={edu.title.value}
                           name="education title"
                           data-id={edu.id}
                           onChange={(e)=> props.handleChange(e)}/>
                     <label>name</label>
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
