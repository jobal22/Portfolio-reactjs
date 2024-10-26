import React from "react";
import PropTypes from "prop-types";

const Collapsible = ({ module, title, children }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(open);

  const ref = React.useRef();

  const [height, setHeight] = React.useState();

  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    setHeight(ref.current.clientHeight);
    setIsOpen((prev) => !prev);
  };

  const classes = `list-group-item ${isExpanded ? "is-expanded" : null}`;
  const currentHeight = isExpanded ? height : 0;
  return (
    <div className={classes} onClick={handleToggle}>
      <div className="card-title">
        <p>{module}</p>
        <div className="ctCage">
            <h2>{title}</h2>
            {!isOpen ? (
                    <i className="fa-solid fa-chevron-down" />
                ) : (
                    <i className="fa-solid fa-chevron-up" />
                )}
        </div>
      </div>
      <div className="card-collapse" style={{ height: currentHeight + "px" }}>
        <div className="card-body" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string,
};

export default Collapsible;
