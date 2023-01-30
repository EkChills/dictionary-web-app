
const ToggleMode = ({toggleMode}) => {
  return (
    <div className="form-control w-auto">
      <label className="cursor-pointer label">
        <input type="checkbox" onChange={toggleMode} className="toggle toggle-secondary"  />
      </label>
    </div>
  )
}

export default ToggleMode