import Input from './Input';
/*
  A section is part of the edit panel.
  Each section wraps related inputs
  params:
    : section
    dataInputs: iterable of inputs
    section: which section is
    handleChange: manage input behaviour
    addItem: optional, for section that can add elements
*/
function PanelSection({ id=null, dataInputs, data, section, handleChange, addItem, showInputs=false}) {
  // console.log({data})
  return (
    <div className="edit-section">
      {showInputs && dataInputs.map((e, i) => (
        <Input label={e.label}
               name={e.name}
               data={data}
               section={section}
               key={i}
               handleChange={handleChange}/>))
      }
    </div>
  );
}

export default PanelSection;
