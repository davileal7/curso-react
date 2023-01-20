//import {useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import styles from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm'
//import { Form, useNavigate } from 'react-router-dom'

function NewProject() {

    /*const history = useHistory()*/
    const navigate = useNavigate()

    function createPost(project) {
        //initialize
        project.const = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
                navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })
                //history.push('/projects', {message: 'Proejeto criado com sucesso!'})
            })
            .catch((err) => console.log(err))
        
        
}

 return (
     <div className={styles.newproject_container}>   
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adcionar os serviços</p>
        <ProjectForm handleSubmit={createPost} btnText='Criar Projeto'/>
     </div>
    )   
}

export default NewProject

