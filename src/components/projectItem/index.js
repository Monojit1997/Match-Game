import './index.css'

const ProjectItem = props => {
  const {eachItem, checkMatchImage} = props
  const {id, thumbnailUrl} = eachItem
  const clickedMatchImage = () => {
    checkMatchImage(id)
  }
  return (
    <button
      type="button"
      className="projectItem-list"
      onClick={clickedMatchImage}
    >
      <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
    </button>
  )
}
export default ProjectItem
