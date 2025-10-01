import Button1 from '../buttons/button1'

import { Formik, Form, Field, ErrorMessage,useField } from 'formik';
 import * as Yup from 'yup'
import './charInfo.css'




const FindChar = () => {
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
            onSubmit ={ values => console.log(JSON.stringify(values, null, 2))}
                >
        
            <Form>
                 <div className="findCharWraper">
                    <div className="findCharDiv">
                        <h3 className="findTitle">Or find a character by name:</h3>
                        <div className="fieldFormButtons">
                            <Field  type="name" id="name" name="name" />
                            <Button1  text='find'/>
                        </div>
                        <div className='validationErrDiv'>
                            <ErrorMessage className='error' style={{color: 'red'}} name="name" component='div'/>
                            {/* <h5 style={{
                                color: 'red',
                                
                            }}>
                                Erorr
                            </h5> */}
                            {/* <Button1  text='To page' style={{backgroundColor:'#5C5C5C'}}/> */}
                        </div>
                    </div>
                 </div>
            </Form>
       </Formik>
                
        
    )
}

export default FindChar