// path: exemple/src/component/Display/index.jsx
import "./style.scss";

const Display = ({display}) => {
 
 return (
  <div className="Display">
    <span>{display || 0}</span>
  </div>
 )
}

export default Display