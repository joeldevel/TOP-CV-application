/*
  An input is part of a section from edit panel
  data: this plus handleChange makes possible take control of input
*/
function Input({ label, data, name, section, handleChange }) {
    const sectionName = `${section} ${name}`;
    return (
        <div className="input-group">
            <label>{label}</label>
            <input
                type="text"
                name={sectionName}
                data={data[name]}
                value={data[name]}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
export default Input;
