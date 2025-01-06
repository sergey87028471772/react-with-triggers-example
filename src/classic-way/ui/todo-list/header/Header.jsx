export function Header({ totalCount, onAddElement }) {
  return (
    <div className="header">
      <div className="header__total-count">Total count: {totalCount}</div>

      <button className="header__add" onClick={onAddElement}>
        add
      </button>
    </div>
  );
}
