import "./card.css";

function Card(props: any) {
  const data = props.cardData;

  return (
    <div className="container__card">
      {data.map((res: any, index: number) => {
        return (
          <div key={index} className="card">
            <div className="img__container">
              <img width="158" height="158" src={res.url} alt="" />
            </div>
            <h4 className="title__card">{res.title}</h4>
            <p className="description__card">{res.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
