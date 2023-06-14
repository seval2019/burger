function MenuItem({ image, name, content, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: "10px" }}>{name}</h1>
      <h6 style={{ marginTop: "0" }}>{content}</h6>
      <p style={{ color: "red"}}>
        {price} ₺
      </p>
    </div>
  );
}
export default MenuItem;
