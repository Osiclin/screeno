import { themes } from "../../constants"

export default function Navbar() {
    const { purple } = themes

    return(
        <div style={{backgroundColor: '#000000', color: '#ffffff', padding: '1rem'}}>
            <div style={{maxWidth: '1140px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{cursor: 'pointer', fontSize: '1.4rem', marginRight: '8rem'}}>scr<span style={{color: purple}}>ee</span>no</div>
                    <ul style={{display: 'flex', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0}}>
                        <li style={{marginRight: '3rem', cursor: 'pointer'}}>Exemplets</li>
                        <li style={{marginRight: '3rem', cursor: 'pointer'}}>Pricing</li>
                        <li style={{cursor: 'pointer'}}>About</li>
                    </ul>
                </div>
                
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{marginRight: '2rem', cursor: 'pointer'}}>Login</div>
                    <div style={{backgroundColor: purple, padding: '.5rem 1rem', cursor: 'pointer', borderRadius: '6px', width: '140px', textAlign: 'center'}}>Start Free Trail</div>
                </div>
            </div>
        </div>
    )
}