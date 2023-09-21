interface Props{
  title: string;
  subtitle?: string;
}

function Title({ title, subtitle }: Props) {
  return (
    <div className="title-container">
      <h1 className="title">{title}</h1>
      {subtitle && <p className="title__sub-title">{subtitle}</p>}
    </div>
  );
}
export default Title