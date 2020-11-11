import { Card } from 'antd'
import './style.css'
import logo from './follow.png'

const { Meta } = Card;

const App = (props) => {
    return (
        <a href={props.link} rel='noreferrer' target='_blank' style={{textDecoration: 'none'}}>
            <Card
            hoverable
            cover={<img alt={props.name} src={props.img} className='avatar'/>}
            className='card'
            >
            <span style={{color: 'red', fontWeight: 700}}><Meta title={props.name}/></span>
            <Meta description={props.location} />
            <a href={props.link} rel='noreferrer' target='_blank' className='link'>Acessar GitHub</a>
            <hr/>
            
            <div className='fama'>
                <img alt='follow' src={logo} className='follow'></img>
                <span style={{marginLeft: '10px'}}>Followers: </span><span style={{color: 'darkorange', fontWeight: 700, marginLeft: '20px'}}>{props.followers}</span>
            </div>
            </Card>
        </a>
    )
}

export default App