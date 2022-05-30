import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import numeral from 'numeral'
import Donuts from '../assets/donut.svg'


const Container = styled.div`
    display:flex;
    justify-content:center;
    margin: 0 auto;

    form {
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
    }
`;

const FormContain = styled.div`
    padding: 1em;
`

const InputContain = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:2rem;

    label {
        padding-bottom:0.4rem;
    }
    p { 
        border:1px solid transparent;
        border-radius:0.4rem;
        padding:0.5rem;
        background:white;
        text-align:center;
        box-shadow: 0px 2px 10px lightgrey;

    }
`
const Input = styled.div`
    display:flex;
    box-shadow: 0px 5px 10px lightgrey;
    border-radius:0.4rem;
    div {
        border-top:1px solid white;
        border-left:1px solid white;
        border-bottom:1px solid white;
        border-right:0px solid transparent;
        border-radius:0.4rem 0rem 0rem 0.4rem;
        background: #F5F4FC;
        padding:0.4rem 0.6rem;
        color:grey;
    }

    input {
        width:100%;
        border-top:1px solid white;
        border-left:0px solid white;
        border-bottom:1px solid white;
        border-right:1px solid white;
        border-radius:0rem 0.4rem 0.4rem 0rem;
        background: white;
        padding:0.4rem 0.6rem;
        box-shadow: 0px 5px 15px #F5F4FC inset;
        font-weight:600;
    }
    
`
const Image = styled.div`
    margin: 2rem auto;

    img {
        object-fit:contain;
        width:12rem;
    }
`

const ResultContain = styled.div`
    display:flex;
    flex-direction:column;
    border: 1px solid transparent;
    border-radius: 0.6rem;
    background: white;
    padding:1em 1em 0;
    box-shadow: 0px 5px 10px lightgrey;

    div {
        margin:0 0 1rem;
        display:flex;
        align-items:center;
    }

    div > div {
        border:1px solid transparent;
        border-radius: 0.1rem;
        background: red;
        padding:0.2rem;
        margin:0.1rem 0.2rem 0 0;
    }

    span {
        
    }

    .interetColor {
        background: #FF645A;
    }
`

const FormContainer = () => {
    const [montantBien, setMontantBien] = useState(0)
    const [montantApport, setMontantApport] = useState(0)
    const [pourcentageApport, setPourcentageApport] = useState('')
    const [duree, setDuree] = useState(0)
    const [tauxInteret, setTauxInteret] = useState(0)
    const [resultat, setResultat] = useState(0.0)
    const [coutInteret, setCoutInteret] = useState(0.0)

    useEffect(() => {
        let pourcentageApports = (montantApport / montantBien) * 100

        let principal = montantBien - montantApport
        let durees = duree * 12
        let tauxInterets = tauxInteret / 100

        let prixMensuelle = principal / durees
        let InteretMensuelle = (principal * tauxInterets) / 12

        if(montantApport > 0) {
            setPourcentageApport(pourcentageApports)
        } else {
            setPourcentageApport(0)
        }

        if(tauxInteret > 0) {
            setResultat(prixMensuelle)
            setCoutInteret(InteretMensuelle)
        } else {
            setResultat(0)
            setCoutInteret(0)
        }
    })

  return (
    <Container>
        <form type="submit">
            <FormContain>
                <InputContain>
                    <label>Montant du bien</label>
                    <Input>
                        <div>€</div>
                        <input placeholder="100000" type="text" onChange={(e) => setMontantBien(e.target.value)}/>
                    </Input>
                </InputContain>
                <Image>
                    <img src={Donuts} />
                </Image>
                <ResultContain>
                    <div>
                        <div></div>
                        <span>Mensualités: <b>{numeral(resultat).format("0,0")} €/ mois</b></span>
                    </div>
                    <div>
                        <div className="interetColor"></div>
                        <span>Coût des intérets:<b> {numeral(coutInteret).format("0,0")} €/ mois</b></span>
                    </div>
                </ResultContain>
            </FormContain>
            <FormContain>
                <InputContain>
                    <label>Montant de l'apport</label>
                    <input placeholder="20000" type="text" onChange={(e) => setMontantApport(e.target.value)}/>
                    <p>{montantApport} € - {numeral(pourcentageApport).format("0,0")}% prix</p>
                </InputContain>
                <InputContain>
                    <label>Durée de</label>
                    <input placeholder="20" type="text" onChange={(e) => setDuree(e.target.value)}/>
                    <p>Durée de {duree} ans</p>
                </InputContain>
                <InputContain>
                    <label>Taux d'interêt</label>
                    <input placeholder="1.65" type="text" onChange={(e) => setTauxInteret(e.target.value)}/>
                    <p>{tauxInteret} %</p>
                </InputContain>
            </FormContain>
        </form>
    </Container>
  )
}

export default FormContainer