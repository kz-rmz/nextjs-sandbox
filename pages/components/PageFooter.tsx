function PageFooter() {
  return (
    <footer>
      <ul className="footer__description">
        <li>
          <p>Take care!</p>
        </li>
        <li>
          <a
            href="https://www.flaticon.com/ru/free-icons/"
            title="список иконки"
            className="flaticons__link"
          >
            Список иконки от DinosoftLabs - Flaticon
          </a>
        </li>
      </ul>
      §
      <style jsx>
        {`
          .footer__description {
            list-style: none;
            text-align: center;
          }
          .flaticons__link {
            font-size: 0.5rem;
          }
        `}
      </style>
    </footer>
  );
}

export default PageFooter;
