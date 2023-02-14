const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={className}>
      <p className="box-title">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="box box1" text="Small" />
      <Box className="box box2" text="Medium" />
      <Box className="box box3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
