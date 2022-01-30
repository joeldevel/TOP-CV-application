/*
  An input is part of a section from edit panel
  data: this plus handleChange makes possible take control of input
*/
function Input({label, data, name, section, handleChange}) {
  const s = `${section} ${name}`;
  // console.log('input component: ', data);
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type="text"
             name={s}
             data={data[name]}
             onChange={(e) => handleChange(e)}/>
    </div>);
}
export default Input;
