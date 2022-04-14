import { themes } from "../../constants"
import Image from "next/image"

export default function Hero() {
    const { purple } = themes

    return(
        <div style={{backgroundColor: '#000000', color: '#ffffff', padding: '7rem 1rem'}}>
            <div style={{maxWidth: '1140px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 auto'}}>
                <div style={{marginRight: '2rem'}}>
                    <h1>Reach more</h1>
                    <h1>people in real time</h1>
                    <p style={{marginBottom: '2rem', width: '450px'}}>The Screeno ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with ease using the Screeno</p>
                    <div style={{display: 'flex'}}>
                        <div style={{border: `1px solid ${purple}`, backgroundColor: purple, padding: '.5rem 1rem', cursor: 'pointer', borderRadius: '6px', width: '140px', textAlign: 'center', marginRight: '1rem'}}>Start Free Trail</div>
                        <div style={{border: '1px solid #ffffff', padding: '.5rem 1rem', cursor: 'pointer', borderRadius: '6px', width: '140px', textAlign: 'center'}}>Login</div>
                    </div>
                </div>
                <div style={{position: 'relative'}}>
                    <div>
                        <Image 
                            src="https://s3-alpha-sig.figma.com/img/51f6/7386/48d0435a4e4ca08b3398ff4797ea6003?Expires=1650844800&Signature=XVSTbhAEvSoyV9Hyl7jdjym5fhztstr0i3Z3T2Ja9h6eT8sW3NJFyj1aI5ji3yjVIZzc4vr5MHo3UexOjU0VvS3VvhunotfJE5xRmpW4HXUXdO6g1OvYA84R9feaqU5rvuvIAPbQStVMtIvN8iFyZ22oLY3rhkt~5mA0pfMIBLi6T1eLbFeDduT2WbJ0ouvPkXgLa~VwDn7bb5Eq1u7xFXl3Nl3F5JvipzbXXlzmRwjfUs~tuFWnXcmfJANkX7MCIH5wQaqASBjlg7ZOL1Hv7EYE3oISf5OWZRE~VM-bpC--Azg88ZIct0N2qfMVUpQ4QMH~hu5Nu8erl3GDX~wMuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            width={543}
                            height={362}
                            objectFit="cover"
                            style={{borderRadius: '10px'}}
                        />
                    </div>
                    
                    <div style={{position: 'absolute', bottom: "-40px", left: "-20px", border: '4px solid #ffffff', borderRadius: '10px'}}>
                        <Image 
                            src="https://s3-alpha-sig.figma.com/img/3acf/96eb/837f97d87ef85e5d7d3b0d7656c9039d?Expires=1650844800&Signature=LdFI7deXDHVAYxoeckdXKNfhSPgZKqY3ck2CAwahIKWe1Rr5e4u4r5aDgsw98u~GGTeV4RPDdt8iHQlENVY6GSjueClMsmbMsmMXROM3JhHszERPgsi~n~W2EvMBYGkfg9R4qbzGAS1Azq3IHUbElWiq8ERW1rJFA92EFfqKX~Sb41oMs5IelTcHkaGN4tGaCgZIjW--sWNfGs2WsQcrJT-Es3ezeioYYkSaoE6reRYQfl7p55tHb7iS-14XONLQAOYXXMUECWzPOO7-6sr3xy8gbIOgx1L-LCupCQWIvpppERLbRjHrqSwJ2nsK~8BiDFKbGr7k3wBMRDJcwF2WdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            width={153}
                            height={292}
                            objectFit="cover"
                            style={{borderRadius: '10px'}}
                        />
                    </div>

                    <div style={{position: 'absolute', right: '-20px', top: "-40px"}}>
                        <svg width="134" height="92" viewBox="0 0 134 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_0_1)">
                            <rect x="31" y="26" width="72" height="30" rx="15" fill="white"/>
                            </g>
                            <circle cx="47" cy="41" r="3" fill="#FF0000"/>
                            <path d="M56.536 47C56.3227 47 56.168 46.952 56.072 46.856C55.9867 46.76 55.944 46.616 55.944 46.424V36.712C55.944 36.5093 55.9867 36.36 56.072 36.264C56.168 36.168 56.3227 36.12 56.536 36.12H57.384C57.5973 36.12 57.752 36.168 57.848 36.264C57.944 36.36 57.992 36.5093 57.992 36.712V45.448H62.888C63.1013 45.448 63.2507 45.496 63.336 45.592C63.4213 45.6773 63.464 45.8213 63.464 46.024V46.456C63.464 46.648 63.4213 46.7867 63.336 46.872C63.2507 46.9573 63.1013 47 62.888 47H56.536ZM65.3016 47C65.0883 47 64.9336 46.952 64.8376 46.856C64.7523 46.76 64.7096 46.616 64.7096 46.424V36.712C64.7096 36.5093 64.7523 36.36 64.8376 36.264C64.9336 36.168 65.0883 36.12 65.3016 36.12H66.1496C66.363 36.12 66.5176 36.168 66.6136 36.264C66.7096 36.36 66.7576 36.5093 66.7576 36.712V46.424C66.7576 46.616 66.7096 46.76 66.6136 46.856C66.5283 46.952 66.3736 47 66.1496 47H65.3016ZM73.0631 47C72.9138 47 72.8018 46.9733 72.7271 46.92C72.6631 46.8667 72.5991 46.76 72.5351 46.6L68.3751 36.568C68.3431 36.504 68.3271 36.44 68.3271 36.376C68.3271 36.3013 68.3485 36.2427 68.3911 36.2C68.4445 36.1467 68.5138 36.12 68.5991 36.12H69.9751C70.1138 36.12 70.2205 36.1467 70.2951 36.2C70.3698 36.2533 70.4285 36.3387 70.4711 36.456L73.4951 44.136L76.5191 36.456C76.5618 36.3387 76.6205 36.2533 76.6951 36.2C76.7698 36.1467 76.8765 36.12 77.0151 36.12H78.3911C78.4765 36.12 78.5405 36.1467 78.5831 36.2C78.6365 36.2427 78.6631 36.3013 78.6631 36.376C78.6631 36.44 78.6471 36.504 78.6151 36.568L74.4711 46.6C74.4071 46.76 74.3378 46.8667 74.2631 46.92C74.1885 46.9733 74.0765 47 73.9271 47H73.0631ZM80.5829 47C80.3695 47 80.2149 46.952 80.1189 46.856C80.0335 46.76 79.9909 46.616 79.9909 46.424V36.712C79.9909 36.5093 80.0335 36.36 80.1189 36.264C80.2149 36.168 80.3695 36.12 80.5829 36.12H87.2389C87.4522 36.12 87.5962 36.1627 87.6709 36.248C87.7562 36.3333 87.7989 36.4773 87.7989 36.68V37.112C87.7989 37.3147 87.7562 37.464 87.6709 37.56C87.5962 37.6453 87.4522 37.688 87.2389 37.688H82.0389V40.792H85.8149C86.0282 40.792 86.1775 40.8347 86.2629 40.92C86.3482 41.0053 86.3909 41.1493 86.3909 41.352V41.752C86.3909 41.9547 86.3482 42.104 86.2629 42.2C86.1775 42.2853 86.0282 42.328 85.8149 42.328H82.0389V45.448H87.2229C87.4362 45.448 87.5855 45.496 87.6709 45.592C87.7562 45.6773 87.7989 45.8213 87.7989 46.024V46.456C87.7989 46.648 87.7562 46.7867 87.6709 46.872C87.5855 46.9573 87.4362 47 87.2229 47H80.5829Z" fill="#141516"/>
                            <defs>
                            <filter id="filter0_d_0_1" x="0" y="0" width="134" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
                            <feOffset dy="5"/>
                            <feGaussianBlur stdDeviation="10.5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}