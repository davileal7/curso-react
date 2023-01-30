import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function ServiceForm({handleSubmit, btnText, projectData}) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
        
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value})
        
    }

    return (
        <form onSubmit={submit} className={styles.form}>
         <Input 
         type="text"
         text="Nome do serviço"
         name="name"
         placeholder="insira o nome do serviço"
         handleOnChange={handleChange} //mudança de status
         /> 
          <Input 
         type="number"
         text="Custo do serviço"
         name="const"
         placeholder="insira o valor total"
         handleOnChange={handleChange} //mudança de status
         /> 
          <Input 
         type="text"
         text="Descrição do serviço"
         name="description"
         placeholder="Descreva o serviço"
         handleOnChange={handleChange} //mudança de status
         /> 

         <SubmitButton text={btnText} />
        </form>
    )   
}


export default ServiceForm