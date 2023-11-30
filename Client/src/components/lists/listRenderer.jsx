export default function ListRenderer({ list, listElement }) {
  return (
    <div className="list-container">
      <h2>{list.title}</h2>
      <div className="list">
        {listElement.map(element => (
          <div className="list-element" key={element.id}>
            <img src={element.image} alt="element" />
            <p>{element.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
