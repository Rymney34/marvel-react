import Button1 from '../buttons/button1'

import { Formik, Form, Field, ErrorMessage,useFieldm,useFormikContext } from 'formik';
import {useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom';
import './charInfo.css'

import MarvelService from '../../services/MarvelService.js'
 import * as Yup from 'yup'


const FindChar = () => {

    const navigate = useNavigate();

    const [char, setChar] = useState([])
    const [loading, setLoad] = useState(true);
    const [statusMsg, setStatusMsg] = useState("")
    const [foundChar, setFoundChar]= useState("")
    const marvelService = new MarvelService();

    useEffect(() => {

       

        if (!foundChar) return ;


        marvelService.
            getCharacterByName(foundChar)
            .then((res)=>{
                if (res.data.results.length > 0) {
                    setChar(res.data.results[0]); // take first result
                    setStatusMsg(`There is! Visit"${foundChar}" page!? ✅`);
                     console.log(res)
                } 
                else {
                    
                    setStatusMsg("The character was not found. Check the name and try again❌");
                    setChar(null);
                }
            })
                // console.log(res),
             
            .catch(error => {
            console.error('Error in Child:', error);
        });

    },[foundChar])
    

    const charThumbnailPath = char.thumbnail?.path
    const charThumbnailExtension = char.thumbnail?.extension
   
    
    function Page (){
              navigate(`/charHomePage`, 
                  {
                  state:{
                        
                        coverImg:charThumbnailPath +'.'+ charThumbnailExtension, 
                        name:char.name, 
                        description:char.description,
                   }});  
            //   console.log("page")
    }

    return (
       <Formik
            initialValues = {{
                name:'',
                
            }}
             validationSchema = {Yup.object({
            name: Yup.string()
                        .min(2, 'Min 2 Charachters')
                        .required('This Field is required'),
             })}
            // onSubmit ={  values => console.log(JSON.stringify(values, null, 2))}
            onSubmit ={  (values) => {setFoundChar(values.name);  setStatusMsg(""); }}
                >
        {({ errors, touched, values }) => (
            <Form>
                 <div className="findCharWraper">
                    <div className="findCharDiv">
                        <h3 className="findTitle">Or find a character by name:</h3>
                        <div className="fieldFormButtons">
                            <Field  type="name" id="name" name="name" />
                            <Button1 type="submit" text='find'/>
                        </div>
                        <div className='validationErrDiv'>
                         
                           <ErrorMessage
                            className="error"
                            style={{ color: 'red' }}
                            name="name"
                            component="div"
                            /> 
                            { values.name === foundChar && statusMsg &&(
                                <>
                                    <div style={{  color: statusMsg.includes("not") ? 'red' : 'green' }}>{statusMsg}</div>
                                    <Button1  onClick={Page} text='To page' style={{backgroundColor:'#5C5C5C'}}/> 
                                </>
                                
                            )}
                        </div>
                    </div>
                 </div>
            </Form>
        )}
       </Formik>
                
        
    )
}

export default FindChar