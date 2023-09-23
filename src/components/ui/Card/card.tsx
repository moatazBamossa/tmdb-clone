type CardsProps = {
  image: string;
  title: string;
  description: string;
  usedBy: string;
};

const Card = ({ image, title, description, usedBy }: CardsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <img src={image} alt={title} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-500">Used By:</span>
        <div className="flex items-center">
          <p>{usedBy}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
