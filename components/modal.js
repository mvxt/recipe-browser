export default function RecipeModal(props) {

  const { isActive, recipeInfo, setShowModal } = props;

  if (Object.keys(recipeInfo).length === 0) {
    return null;
  }

  return <div className={"modal " + (isActive ? "is-active" : "")}>
    <div className="modal-background"></div>
    <div className="modal-card box">
      <section className="modal-card-body">
        <h2 className="title">{recipeInfo.label}</h2>
        <hr />
        <figure className="image is-16by9">
          <img src={recipeInfo.image} alt={recipeInfo.label} />
        </figure>
        <p className="has-text-right paragraph">
          <a href={recipeInfo.url}>(via {recipeInfo.source})</a>
        </p>
        <h3 className="subtitle space-above">Ingredients</h3>
        <ul className="paragraph">
          {recipeInfo.ingredientLines.map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>
          })}
        </ul>
        <h3 className="subtitle space-above">Health Labels</h3>
        <p className="paragraph tags">
          {recipeInfo.healthLabels.map((label) => {
            return <span className="tag is-light is-rounded" key={label}>{label}</span>
          })}
        </p>
        <hr />
        <button
          className="close button"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </section>
    </div>
  </div>
}
