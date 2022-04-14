import { themes } from "../../constants"

export default function All() {
    const {purple} = themes

    return(
        <div style={{padding: '4rem 1rem'}}>
            <div style={{maxWidth: '1140px', margin: '0 auto'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem'}}>
                    <h2>All-in-one platform</h2>
                    <p style={{maxWidth: '400px', textAlign: 'center', marginBottom: '2rem'}}>You take care of the video quality and we take care of everything else</p>
                    <div style={{display: 'flex'}}>
                        <div style={{border: `1px solid ${purple}`, backgroundColor: purple, padding: '.5rem 1rem', cursor: 'pointer', borderRadius: '6px', width: '140px', textAlign: 'center', marginRight: '1rem', color: '#ffffff'}}>Start Free Trail</div>
                        <div style={{border: '1px solid #000000', padding: '.5rem 1rem', cursor: 'pointer', borderRadius: '6px', width: '140px', textAlign: 'center'}}>Login</div>
                    </div>
                </div>
                
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <Item
                        icon={<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.6875 12.2387C0.869836 12.2387 1.0447 12.3111 1.17364 12.4401C1.30257 12.569 1.375 12.7439 1.375 12.9262V16.3637C1.375 16.7284 1.51987 17.0781 1.77773 17.336C2.03559 17.5938 2.38533 17.7387 2.75 17.7387H19.25C19.6147 17.7387 19.9644 17.5938 20.2223 17.336C20.4801 17.0781 20.625 16.7284 20.625 16.3637V12.9262C20.625 12.7439 20.6974 12.569 20.8264 12.4401C20.9553 12.3111 21.1302 12.2387 21.3125 12.2387C21.4948 12.2387 21.6697 12.3111 21.7986 12.4401C21.9276 12.569 22 12.7439 22 12.9262V16.3637C22 17.0931 21.7103 17.7925 21.1945 18.3083C20.6788 18.824 19.9793 19.1137 19.25 19.1137H2.75C2.02065 19.1137 1.32118 18.824 0.805456 18.3083C0.289731 17.7925 0 17.0931 0 16.3637V12.9262C0 12.7439 0.0724328 12.569 0.201364 12.4401C0.330295 12.3111 0.505164 12.2387 0.6875 12.2387Z" fill="#006AFF"/>
                        <path d="M10.5131 0.201979C10.577 0.137955 10.6529 0.0871581 10.7364 0.0524992C10.8199 0.0178403 10.9095 0 10.9999 0C11.0903 0 11.1799 0.0178403 11.2634 0.0524992C11.3469 0.0871581 11.4228 0.137955 11.4866 0.201979L15.6116 4.32698C15.7407 4.45607 15.8133 4.63116 15.8133 4.81373C15.8133 4.9963 15.7407 5.17138 15.6116 5.30048C15.4825 5.42957 15.3075 5.5021 15.1249 5.5021C14.9423 5.5021 14.7672 5.42957 14.6381 5.30048L11.6874 2.34835V14.4387C11.6874 14.6211 11.615 14.7959 11.486 14.9249C11.3571 15.0538 11.1822 15.1262 10.9999 15.1262C10.8176 15.1262 10.6427 15.0538 10.5138 14.9249C10.3848 14.7959 10.3124 14.6211 10.3124 14.4387V2.34835L7.36164 5.30048C7.29772 5.3644 7.22184 5.4151 7.13832 5.4497C7.0548 5.48429 6.96529 5.5021 6.87489 5.5021C6.78449 5.5021 6.69498 5.48429 6.61146 5.4497C6.52795 5.4151 6.45206 5.3644 6.38814 5.30048C6.32422 5.23656 6.27352 5.16067 6.23892 5.07716C6.20433 4.99364 6.18652 4.90413 6.18652 4.81373C6.18652 4.72333 6.20433 4.63382 6.23892 4.5503C6.27352 4.46678 6.32422 4.3909 6.38814 4.32698L10.5131 0.201979Z" fill="#006AFF"/>
                        </svg>
                        }
                        title='Upload & Organize'
                        description='Upload in bulk, organize content in categories, add custom filters & upload extras.'
                    />
                    <Item
                        icon={<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33333 7L8.33333 1.72C8.33333 1.62545 8.3523 1.53182 8.38916 1.44447C8.42601 1.35711 8.48003 1.27774 8.54812 1.21088C8.61622 1.14402 8.69706 1.09099 8.78603 1.0548C8.87501 1.01862 8.97037 0.999998 9.06667 0.999998L22.2667 0.999999C22.363 0.999999 22.4583 1.01862 22.5473 1.05481C22.6363 1.09099 22.7171 1.14402 22.7852 1.21088C22.8533 1.27774 22.9073 1.35711 22.9442 1.44447C22.981 1.53182 23 1.62545 23 1.72L23 12.28C23 12.471 22.9227 12.6541 22.7852 12.7891C22.6477 12.9241 22.4612 13 22.2667 13L9.06667 13C8.87218 13 8.68565 12.9241 8.54812 12.7891C8.41059 12.6541 8.33333 12.471 8.33333 12.28L8.33333 7ZM8.33333 7L2.20267 12.016C2.09558 12.1036 1.9653 12.1594 1.82708 12.1769C1.68886 12.1944 1.54842 12.1728 1.42222 12.1148C1.29602 12.0567 1.18928 11.9646 1.1145 11.8491C1.03972 11.7336 1.00001 11.5996 1 11.4628L1 2.5372C1.00024 2.40047 1.04012 2.26663 1.11499 2.15134C1.18986 2.03606 1.29662 1.94408 1.42277 1.88618C1.54893 1.82827 1.68927 1.80684 1.82738 1.82437C1.96549 1.84191 2.09566 1.89769 2.20267 1.9852L8.33333 7Z" stroke="#006AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        }
                        title='Stream On-Demand'
                        description='Showcase your content in a beautiful on-demand video catalog.'
                    />
                    <Item
                        icon={<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.23538 0.1829C3.35993 0.0632831 3.52738 -0.00248025 3.70092 7.15852e-05C3.87445 0.00262342 4.03985 0.0732812 4.16076 0.196507C4.29294 0.33294 4.36548 0.515429 4.36265 0.704427C4.35982 0.893425 4.28185 1.07371 4.14563 1.2062C2.36757 2.98659 1.37182 5.3898 1.37501 7.89303C1.37501 10.601 2.51626 13.0449 4.3505 14.7785C4.42133 14.8433 4.47841 14.9214 4.51841 15.0082C4.55841 15.0951 4.58052 15.1889 4.58347 15.2843C4.58641 15.3797 4.57012 15.4747 4.53555 15.5638C4.50099 15.6529 4.44883 15.7343 4.38213 15.8032C4.26385 15.9241 4.10257 15.9946 3.93259 15.9997C3.76261 16.0048 3.59732 15.9441 3.47188 15.8304C2.37446 14.8135 1.49998 13.5841 0.902736 12.2187C0.305488 10.8532 -0.0017795 9.3809 7.7522e-06 7.89303C7.7522e-06 4.88028 1.23751 2.1533 3.23538 0.1829ZM17.8544 1.2062C17.7183 1.07352 17.6406 0.893144 17.638 0.704147C17.6355 0.515151 17.7083 0.332762 17.8406 0.196507C17.9615 0.0736948 18.1266 0.00330098 18.2998 0.0007503C18.473 -0.00180038 18.6401 0.0637005 18.7646 0.1829C19.7915 1.19303 20.6062 2.39442 21.1615 3.71775C21.7168 5.04107 22.0018 6.46013 22 7.89303C22 11.0228 20.6662 13.8451 18.5281 15.8304C18.4027 15.9441 18.2374 16.0048 18.0674 15.9997C17.8974 15.9946 17.7362 15.9241 17.6179 15.8032C17.5514 15.7343 17.4994 15.653 17.465 15.564C17.4305 15.4751 17.4143 15.3802 17.4172 15.285C17.4202 15.1898 17.4422 15.0961 17.4821 15.0094C17.522 14.9226 17.5789 14.8446 17.6495 14.7799C18.5912 13.8915 19.3406 12.8229 19.8521 11.639C20.3637 10.4551 20.6266 9.18062 20.625 7.89303C20.6282 5.38939 19.6325 2.98709 17.8544 1.2062ZM5.6815 2.57242C5.80403 2.45693 5.9679 2.39434 6.13706 2.39842C6.30622 2.40251 6.46681 2.47293 6.5835 2.59419C6.8695 2.87723 6.84063 3.34261 6.55875 3.62837C5.43672 4.76999 4.81004 6.30045 4.8125 7.89303C4.8125 9.64843 5.55913 11.2324 6.75675 12.3496C7.05925 12.6312 7.1005 13.113 6.80488 13.4055C6.69156 13.5221 6.53726 13.5911 6.37395 13.5982C6.21064 13.6053 6.05083 13.5499 5.92763 13.4436C5.14272 12.7428 4.51544 11.8865 4.08646 10.9303C3.65748 9.97404 3.43638 8.93926 3.43751 7.89303C3.43599 6.90317 3.63363 5.92291 4.0189 5.00942C4.40417 4.09593 4.96936 3.26749 5.6815 2.57242ZM15.4412 3.62837C15.1594 3.34261 15.1305 2.87723 15.4165 2.59419C15.5332 2.47293 15.6938 2.40251 15.8629 2.39842C16.0321 2.39434 16.196 2.45693 16.3185 2.57242C17.0305 3.26763 17.5955 4.09609 17.9808 5.00955C18.366 5.92301 18.5638 6.9032 18.5625 7.89303C18.564 8.93939 18.3432 9.97436 17.9145 10.9308C17.4857 11.8873 16.8586 12.7439 16.0737 13.445C15.95 13.5518 15.7894 13.6071 15.6255 13.5995C15.4615 13.5919 15.3068 13.5219 15.1937 13.4042C14.8995 13.113 14.9407 12.6312 15.2432 12.3496C15.858 11.7778 16.3477 11.0873 16.6821 10.3207C17.0165 9.5542 17.1885 8.72795 17.1875 7.89303C17.19 6.30045 16.5633 4.76999 15.4412 3.62837ZM11 6.19207C10.5442 6.19207 10.107 6.37128 9.78466 6.69027C9.46233 7.00926 9.28125 7.44191 9.28125 7.89303C9.28125 8.34416 9.46233 8.7768 9.78466 9.0958C10.107 9.41479 10.5442 9.594 11 9.594C11.4558 9.594 11.893 9.41479 12.2153 9.0958C12.5377 8.7768 12.7187 8.34416 12.7187 7.89303C12.7187 7.44191 12.5377 7.00926 12.2153 6.69027C11.893 6.37128 11.4558 6.19207 11 6.19207Z" fill="#006AFF"/>
                        </svg>
                        }
                        title='Stream Live'
                        description='Schedule events in advance & build excitement with a countdown overlay.'
                    />
                    <Item
                        icon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.825 9.625C11.275 9.4875 10.725 9.2125 10.3125 8.8C9.9 8.6625 9.7625 8.25 9.7625 7.975C9.7625 7.7 9.9 7.2875 10.175 7.15C10.5875 6.875 11 6.6 11.4125 6.7375C12.2375 6.7375 12.925 7.15 13.3375 7.7L14.575 6.05C14.1625 5.6375 13.75 5.3625 13.3375 5.0875C12.925 4.8125 12.375 4.675 11.825 4.675V2.75H10.175V4.675C9.4875 4.8125 8.8 5.225 8.25 5.775C7.7 6.4625 7.2875 7.2875 7.425 8.1125C7.425 8.9375 7.7 9.7625 8.25 10.3125C8.9375 11 9.9 11.4125 10.725 11.825C11.1375 11.9625 11.6875 12.2375 12.1 12.5125C12.375 12.7875 12.5125 13.2 12.5125 13.6125C12.5125 14.025 12.375 14.4375 12.1 14.85C11.6875 15.2625 11.1375 15.4 10.725 15.4C10.175 15.4 9.4875 15.2625 9.075 14.85C8.6625 14.575 8.25 14.1625 7.975 13.75L6.6 15.2625C7.0125 15.8125 7.425 16.225 7.975 16.6375C8.6625 17.05 9.4875 17.4625 10.3125 17.4625V19.25H11.825V17.1875C12.65 17.05 13.3375 16.6375 13.8875 16.0875C14.575 15.4 14.9875 14.3 14.9875 13.3375C14.9875 12.5125 14.7125 11.55 14.025 11C13.3375 10.3125 12.65 9.9 11.825 9.625ZM11 0C4.95 0 0 4.95 0 11C0 17.05 4.95 22 11 22C17.05 22 22 17.05 22 11C22 4.95 17.05 0 11 0ZM11 20.4875C5.775 20.4875 1.5125 16.225 1.5125 11C1.5125 5.775 5.775 1.5125 11 1.5125C16.225 1.5125 20.4875 5.775 20.4875 11C20.4875 16.225 16.225 20.4875 11 20.4875Z" fill="#006AFF"/>
                        </svg>
                        }
                        title='Monetization'
                        description='Offer subscriptions or one-time purchases. Accept credit cards & PayPal.'
                    />
                    <Item
                        icon={<svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L10.5 5.5M20.5 9.5L26 4L20.5 9.5ZM13.5 5.5L17.5 9.5L13.5 5.5Z" stroke="#006AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M27.5 4C28.3284 4 29 3.32843 29 2.5C29 1.67157 28.3284 1 27.5 1C26.6716 1 26 1.67157 26 2.5C26 3.32843 26.6716 4 27.5 4Z" stroke="#006AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 12.5C19.8284 12.5 20.5 11.8284 20.5 11C20.5 10.1716 19.8284 9.5 19 9.5C18.1716 9.5 17.5 10.1716 17.5 11C17.5 11.8284 18.1716 12.5 19 12.5Z" stroke="#006AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5.5C12.8284 5.5 13.5 4.82843 13.5 4C13.5 3.17157 12.8284 2.5 12 2.5C11.1716 2.5 10.5 3.17157 10.5 4C10.5 4.82843 11.1716 5.5 12 5.5Z" stroke="#006AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.5 15C3.32843 15 4 14.3284 4 13.5C4 12.6716 3.32843 12 2.5 12C1.67157 12 1 12.6716 1 13.5C1 14.3284 1.67157 15 2.5 15Z" stroke="#006AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        }
                        title='Analytics'
                        description='Know what your audience likes & how your content is performing.'
                    />
                    <Item
                        icon={<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5 6.75H16.5C16.1022 6.75 15.7206 6.90804 15.4393 7.18934C15.158 7.47064 15 7.85218 15 8.25V19.5C15 19.8978 15.158 20.2794 15.4393 20.5607C15.7206 20.842 16.1022 21 16.5 21H22.5C22.8978 21 23.2794 20.842 23.5607 20.5607C23.842 20.2794 24 19.8978 24 19.5V8.25C24 7.85218 23.842 7.47064 23.5607 7.18934C23.2794 6.90804 22.8978 6.75 22.5 6.75ZM22.5 8.25V16.5H16.5V8.25H22.5ZM16.5 19.5V17.7H22.5V19.5H16.5Z" fill="#006AFF"/>
                        <path d="M13.5 13.5H1.5V1.5H19.5V5.25H21V1.5C21 1.10218 20.842 0.720644 20.5607 0.43934C20.2794 0.158035 19.8978 0 19.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V13.5C0 13.8978 0.158035 14.2794 0.43934 14.5607C0.720644 14.842 1.10218 15 1.5 15H13.5V13.5Z" fill="#006AFF"/>
                        <path d="M13.5 16.5H5.25C5.05109 16.5 4.86032 16.579 4.71967 16.7197C4.57902 16.8603 4.5 17.0511 4.5 17.25C4.5 17.4489 4.57902 17.6397 4.71967 17.7803C4.86032 17.921 5.05109 18 5.25 18H13.5V16.5Z" fill="#006AFF"/>
                        </svg>
                        }
                        title='For all devices'
                        description='Get organized on all devices'
                    />

                </div>
            </div>
        </div>
    )
}

const Item = ({ icon, title, description }) => {
    return(
        <div style={{width: '250px', margin: '2rem 2rem 0 2rem'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{marginRight: '.5rem', display: 'flex'}}>{icon}</div>
                <div style={{fontSize: '1.125rem', fontWeight: 600}}>{title}</div>
            </div>
            <p>{description}</p>
        </div>
    )
}