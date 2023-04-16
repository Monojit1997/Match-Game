import './index.css'

const TabItem = props => {
  const {eachItem, clickTabItem, isActive} = props
  const {tabId, displayText} = eachItem
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const activeButtonClassname = isActive ? 'active-button' : ''
  return (
    <li className="tabItem-container">
      <button
        type="button"
        className={`tabs-button ${activeButtonClassname}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
