/*
  An Education item is a single piece of education related data.
  Each one is create when user adds one from the edit panel and
  then is diplayed in CV preview panel
*/

function EducationItem({id, name, title, date}) {
    return (
      <div className="education-item" >
          <ul>
              <li>name: {name}</li>
              <li>title: {title}</li>
              <li>date: {date}</li>
          </ul>
      </div>
    )
}
export default EducationItem;
