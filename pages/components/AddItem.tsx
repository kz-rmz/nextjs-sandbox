import { useState } from "react";

export default function AddItem(): JSX.Element {
  let [data, setData] = useState({ name: "Marj" });
  return (
    <form className="add_item__from">
      <div className="add_item__form__section">
        <label htmlFor="userName">Ф.И.О:</label>
        <input
          className="add_item__form__input"
          type="text"
          name="userName"
          id="userName"
          placeholder="введите текст..."
        />
        <label htmlFor="birthDate">Дата рождения:</label>
        <input
          className="add_item__form__input"
          type="text"
          name="birthDate"
          id="birthDate"
          placeholder="введите текст..."
        />
        <label htmlFor="userId">ИИН:</label>
        <input
          className="add_item__form__input"
          type="text"
          name="userId"
          id="userId"
          placeholder="введите текст..."
        />
      </div>
      <div className="add_item__form__section">
        <label htmlFor="userPhone">Номер телефона:</label>
        <input
          className="add_item__form__input"
          type="text"
          name="userPhone"
          id="userPhone"
          placeholder="введите текст..."
        />
        <label htmlFor="adress">Адрес:</label>
        <input
          className="add_item__form__input"
          type="text"
          name="adress"
          id="adress"
          placeholder="введите текст..."
        />
      </div>
      <div className="break"></div>
      <input className="add_item__form__btn" type="submit" />

      <style jsx>
        {`
          .add_item__from {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 3rem 0;
          }
          .add_item__form__section {
            display: flex;
            flex-direction: column;
            padding: 0 1rem;
          }

          .add_item__form__input {
            padding: 0.3rem 0.5rem;
            margin: 0.5rem 0;
            line-height: 1.5rem;
            font-weight: 300;
            border: 1px solid #ccc;
            border-radius: 3px;
          }
          .add_item__form__btn {
            margin-top: 1.5rem;
            padding: 1rem 1.5rem;
            background-color: #7465bf;
            border: none;
            border-radius: 3px;
            color: #fafafa;
            font-size: 1.3rem;
          }
          .break {
            flex-basis: 100%;
            height: 0;
          }
          input[type="text"] {
            font-size: 1.3rem;
          }
        `}
      </style>
    </form>
  );
}
