import Image from 'next/image';

export default function Tile(props) {

  const { recipe, setModalInfo, setShowModal } = props;

  return (
    <div className="tile is-parent is-4" key={recipe.label}>
      <a
        className="tile is-child box"
        onClick={() => {
          setModalInfo(recipe);
          setShowModal(true);
        }}>
        <h2 className="title is-size-5 has-text-weight-bold">{recipe.label}</h2>
        <figure className="image is-square">
          <Image
            src={recipe.image}
            alt={recipe.label}
            className="is-square"
            layout="fill"
          />
        </figure>
        <p className="is-size-6">
          <b>Source:</b> {recipe.source}
        </p>
      </a>
    </div>
  );
}
