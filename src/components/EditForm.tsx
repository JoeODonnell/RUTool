import React, {ChangeEvent, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Application, PolicyInformation } from '../mockData/applicationModel';






const EditForm = () => {

    const {id} = useParams<{id: string}>()
    const navigate = useHistory() // version 6 uses 'useNavigate' here, does same thing.
    


    const [application, setApplication] = useState<PolicyInformation>({
        applicationId: undefined,
        policyNumber: '',
        planType: '',
        coverType: '',
        policyStatus: '',
        policyAuxStatus: 0,
        coverAmount: 0,
        monthlyPremium: 0,
        onRiskDate: '',
        summary:    '',
        expiresIn: '',
        engagementNo: ''


    }) // fix the model or values you want to edit


    // I think I need to use the 'id' I set up earlier to fetch the data from the server or database change over from using applicationId. There may also need to be Router changes with this

    // useParams is a hook that allows you to access the URL parameters in a functional component. It returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
    useEffect(() => {
        if (application.applicationId) {
            
            // fetch the data from the server or database here
            //apiConnector.getApplication(application.applicationId).then((data) => setApplication(data))
        }


    }, [application.applicationId])




    function handleSubmit() {
        if (!application.applicationId) {
            // apiConnector.updateApplication(application)
            // .then(() => navigate('/'))
            // .catch((error) => console.error(error))

            //console.log("Error updating application: ", error)
            //})
      


    }}


    //watch back on how this works again and what it does. I think it's a way to handle the input change. 
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setApplication({...application, [name]: value});
    }

  
  
  
  
  
    return (
        <div className="form-container">
        <h2>Edit Application</h2>
        <h3>Update details here</h3>
        <form onSubmit={handleSubmit} autoComplete='off'>
            <input
                type='text'
                placeholder='Policy Number'
                name="policyNumber" // Ensure you have a 'name' attribute for handling changes
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='Plan Type'
                name="planType" // Ensure you have a 'name' attribute for handling changes
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='Cover Type'
                name="coverType" // Ensure you have a 'name' attribute for handling changes
                onChange={handleInputChange}
            />
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default EditForm
