import PropTypes from "prop-types";

export default function Tab(props) {
  const { activeTab, name, setActiveTab } = props;

  return (
    <li
      className={name === activeTab ? 'is-active' : ''}
      onClick={() => setActiveTab(name)}
    >
      <a>
        <span>{name}</span>
      </a>
    </li>
  );
}

Tab.propTypes = {
  activeTab: PropTypes.string,
  name: PropTypes.string,
  setActiveTab: PropTypes.func
};
