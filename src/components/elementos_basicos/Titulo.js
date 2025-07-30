const Titulo = ({ texto, nivel }) => {
  const Tag = `h${nivel}`;
  return <Tag>{texto}</Tag>;
};

export default Titulo;
