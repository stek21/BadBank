

/*function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}*/

function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
        <Card
      bgcolor="secondary"
      txtcolor="light"
      header="All Data"
      header-bg="success"
      body={JSON.stringify(ctx)}
    />    
    <br/>
    </>
  );
}