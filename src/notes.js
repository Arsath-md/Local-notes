import { useState } from "react";
import './index.css'


export default function Notes(){
      const [val , setVal ]= useState('')
      const [data , setData] = useState([])
      const [ok ,setOk] = useState(false)
      const [save ,setSave] = useState('')
      const [gets ,setGets] = useState('')
      const[store , setStore] =useState('')

       const sve =(e)=>{
        setSave(e.target.value)
       }
      const inputs=(e)=>{
            setVal(e.target.value)
      }
        const handler=(e)=>{
            e.preventDefault();
            setData([...data,val])
            console.log(data)
            setOk(true)
        }
        const game=(e)=>{
          setStore(e.target.value)
        }
        const saved=()=>{
          localStorage.setItem(save,val)
          setVal('')
          setOk(false)
        }
        const gett=()=>{
          setStore(localStorage.getItem(gets))
          setGets('')
        }
        return(
              <>
                <form onSubmit={handler}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'10px'}}>
                {
                  <>
                   <button className="btn" type="submit">{ok?'saved':'save'}</button>
                   <div style={{display:'flex',flexDirection:'row'}}>
                   <input type="text" value={gets} onChange={(e)=> setGets(e.target.value)} placeholder="get your saved note......"></input>
                   <button className="btn" type="button" onClick={gett}>click</button>
                   </div>
               
               
               
                </>
                }
              </div>
                  <div style={{display:"flex",flexDirection:'row',justifyContent:'center' ,padding:'10px'}}>
                  {ok && ( <> <input className="inputs" type="text" placeholder="save as...." value={save} onChange={sve}/>
                    <button className="btn" type="button" onClick={saved}>Save As</button></>)}
                  </div>
                  <textarea cols={19} rows={19} value={store ? store:val} onChange={store?game:inputs} id="textarea"/>
              </form>
              {/* <div>
                {
                  data.map((key,index) => (
                    <p key={index}>{key}</p>
                  ))
                }
              </div> */}
             
              </>
        );
}