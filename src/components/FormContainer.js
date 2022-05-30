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
        background:grey;
        text-align:center;

    }
`
const Input = styled.div`
    display:flex;

    div {
        border: 1px solid transparent;
        border-radius:0.2rem 0rem 0rem 0.2rem;
        background: lightgrey;
        padding:0.4rem 0.6rem;
    }

    input {
        border: 1px solid transparent;
        border-radius:0rem 0.2rem 0.2rem 0rem;
        background: yellow;
        padding:0.4rem 0.6rem;
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
    background: grey;
    padding:1em 1em 0;

    span {
        margin:0 0 1rem;
        display:flex;
        align-items:center;
    }

    span > div {
        border:1px solid transparent;
        border-radius: 0.1rem;
        background: red;
        padding:0.2rem;
        margin-right:0.2rem;
    }

    .interetColor {
        background: yellow;
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
                        <input placeholder="10000" type="text" onChange={(e) => setMontantBien(e.target.value)}/>
                    </Input>
                </InputContain>
                <Image>
                    <img src={Donuts} />
                </Image>
                <ResultContain>
                    <span><div></div> Mensualités: {numeral(resultat).format("0,0")} €/ mois</span>
                    <span><div className="interetColor"></div> Coût des intérets: {numeral(coutInteret).format("0,0")} €/ mois</span>
                </ResultContain>
            </FormContain>
            <FormContain>
                <InputContain>
                    <label>Montant de l'apport</label>
                    <input type="text" onChange={(e) => setMontantApport(e.target.value)}/>
                    <p>{montantApport} € - {numeral(pourcentageApport).format("0,0.00")}% prix</p>
                </InputContain>
                <InputContain>
                    <label>Durée de</label>
                    <input type="text" onChange={(e) => setDuree(e.target.value)}/>
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