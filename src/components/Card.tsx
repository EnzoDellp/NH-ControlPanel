type CardProps = {
  titulo: string;
  contenido: string;
  className: string;
  img?: string;
  useFullHeightImg?: boolean;
  altImg?: string;
};
const Card: React.FC<CardProps> = ({
  titulo,
  contenido,
  img,
  className = "",
  useFullHeightImg = false,
  altImg = "Imagen de la tarjeta",
}) => {
  return (
    <div
      className={`max-w-sm rounded-xl ml-10 overflow-hidden cursor-pointer  text-center p-3 shadow-2xl flex flex-col h-full ${className}`}
    >
      <img
        src={img}
        className={`${
          useFullHeightImg ? "h-full" : "h-40"
        } w-full object-cover`}
        alt={altImg}
      />
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="underline text-4xl mb-5">{titulo}</h2>
        <p>{contenido}</p>
      </div>
    </div>
  );
};

export default Card;
