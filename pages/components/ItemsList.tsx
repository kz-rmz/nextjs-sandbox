interface IlistItem {
  listItem: {
    id: number;
    title: string;
    body: string;
    isDone: boolean;
  };
}

const Item: React.FC<IlistItem> = ({ listItem }): JSX.Element => {
  let { id, title, body, isDone } = listItem;
  return (
    <div className="list__item card" key={id}>
      <ul className="list__item__ul">
        <li className="list__item__title">
          <h3>{title}</h3>
        </li>
        <li className="list__item__body">{body}</li>
        <li className="list__item__footer">{isDone}</li>
      </ul>
      {/* Style */}
      <style jsx>
        {`
          .list__item__ul {
            list-style: none;
          }
        `}
      </style>
    </div>
  );
};

export default Item;
