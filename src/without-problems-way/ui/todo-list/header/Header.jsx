export function Header({ onChangeTotalCount, onAddElement }) {
  return (
    <div className="header">
      <div className="header__total-count">
        Total count: {onChangeTotalCount()}
      </div>

      <button className="header__add" onClick={onAddElement}>
        add
      </button>
    </div>
  );
}
