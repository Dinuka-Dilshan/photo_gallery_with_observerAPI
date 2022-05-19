import './Loader.css';

const Loader = ()=>{
    return <div style={{display:'flex', justifyContent:'center', padding:'2rem'}}>
        <div className="lds-dual-ring"></div>
    </div>
}

export default Loader;