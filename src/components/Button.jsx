function MyButton(props) {
  return <button className={props.className} onClick={props.onClick}>{props.children}</button>
}

export default function App() {
  const clicked = () => {

    if(document.body.classList.length==0){
        document.body.classList.add("bg-secondary");
        
    }else{
        if(document.body.classList.contains('bg-primary')){
            document.body.classList.remove('bg-primary')
        }else{

            document.body.classList.replace("bg-secondary","bg-primary");
        }
    }
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <MyButton className={'btn btn-secondary'} onClick={clicked}>Change background</MyButton>
    </div>
  )
}