import invImg from '../assets/investment-calculator-logo.png'
import './header.css'

export default function Header(){
    return(
        <header id='header'>
            <img src={invImg} alt='invest_calculator' />
            <h1>React Investment Calculator</h1>
        </header>
    )
}