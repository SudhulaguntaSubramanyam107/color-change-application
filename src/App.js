import "./App.css"
function App(){ 
  return(
    <div>
        <h1 className="wrapper"> Background colour change</h1> 
        <input type="color" onChange={(e)=>{
            document.body.style.background=e.target.value
        }}/>
      


    </div> 
  )
}

export default App
