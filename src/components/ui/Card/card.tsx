import "./style.css";

type CardsProps = {
  type: string;
  title: string;
  name: string;
  img: string;
};

export const Card = (props: CardsProps) => {
  const { type, title, name, img } = props;
  return (
    <div className="card">
      <img src={img} alt="Avatar" />
      <div className="container">
        <h2>{title}</h2>
        <h4>
          <b>{name}</b>
        </h4>
        <p>{type}</p>
      </div>
    </div>
  );
};
