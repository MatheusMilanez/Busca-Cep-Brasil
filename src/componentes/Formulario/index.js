import { useState } from 'react'
import './Formulario.css'




const Formulario = () => {
    
    const [endereco , setEndereco] = useState({})

    function manipularEndereco(evento){

        const cep = evento.target.value

        setEndereco({
            cep 
        })

        if(cep && cep.length === 8){
            //Obter o cep

            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(resposta => resposta.json())
                .then(dados => {
                    setEndereco({
                        Rua: dados.logradouro,
                        Bairro: dados.bairro,
                        Cidade: dados.localidade,
                        Estado: dados.uf,
                        Cep: dados.cep
                    })
                })
        }


    }



    return(
        <form className='form'>
            <div className='formularioCep'>
                <h3 className='formularioTitulo'>Digite seu cep!</h3>
                <input placeholder='Digite seu cep aqui' className='formularioInput' onChange={manipularEndereco} />
            </div>

            <div>
                <ul>
                    <li>Rua: {endereco.Rua}</li>
                    <li>Bairro: {endereco.Bairro}</li>
                    <li>Cidade: {endereco.Cidade}</li>
                    <li>Estado: {endereco.Estado}</li>
                    <li>Cep: {endereco.Cep}</li>
                </ul>
            </div>
        </form>
    )    
}




export default Formulario