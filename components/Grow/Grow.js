import Image from 'next/image'

export default function Grow() {
    return(
        <div style={{backgroundColor: '#000000', color: '#ffffff', padding: '4rem 1rem'}}>
            <div style={{maxWidth: '1140px', margin: '0 auto'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem'}}>
                    <h2>We help you grow</h2>
                </div>
                
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 auto', padding: '4rem 0'}}>
                    <div style={{marginRight: '2rem'}}>
                        <h1>Monetize your way</h1>
                        <p style={{marginBottom: '2rem', width: '450px'}}>Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup.</p>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div style={{marginRight: '.5rem'}}>Get Started</div>
                            <div style={{display: 'flex'}}>
                                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM1 6.75H18V5.25H1V6.75Z" fill="#006AFF"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div style={{position: 'relative'}}>
                        <div>
                            <Image 
                                src="https://s3-alpha-sig.figma.com/img/65e5/d075/5be997467ea5739e4656c679c7ec6fee?Expires=1650844800&Signature=MbMoG5GNNEjIJsvx-OgJx73UAiP8-e8pu2jf0IzLZDR0VoZAtexmvefoEBpYPQb~PoAT8z7KZcvBdr2QZI0oLvvp1gUaqFMmK-ahR3Mjj9THso1s5M9YKRtwPaCBf0qetSvhj4AFI5Vfm~ZEB05gCMhpunP4dCDrJnCwIX5xnJnV4TrW1zr9nTGdqrk1K0malLoDb7TetTk87J5qQ0zXjDMy9YciTX7XiDLABUf0ByaKuKji5rU6FpSulgLX~tbD6JH6ksUYR~UDygGpRh~v1KWDAS~twAJX46OPPUBtFYNiN7MWJTllDuUTKr9jaxQg-1EGBhNYj8yZBQEjRzvfOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                width={543}
                                height={362}
                                objectFit="cover"
                                style={{borderRadius: '10px'}}
                                alt=''
                            />
                        </div>
                        
                        <div style={{position: 'absolute', top: "-40px", left: "-20px"}}>
                            <svg width="262" height="261" viewBox="0 0 262 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="262" height="261" rx="27" fill="white"/>
                            <rect x="37" y="30" width="188" height="53" rx="12" fill="#F5F5F5"/>
                            <g filter="url(#filter0_d_0_1)">
                            <rect x="45" y="96" width="188" height="53" rx="12" fill="#006AFF" fillOpacity="0.1" shapeRendering="crispEdges"/>
                            </g>
                            <rect x="37" y="178" width="188" height="53" rx="12" fill="#F5F5F5"/>
                            <path d="M49.692 50.4H55.2C56.544 50.4 57.738 50.664 58.782 51.192C59.826 51.708 60.636 52.446 61.212 53.406C61.788 54.354 62.076 55.452 62.076 56.7C62.076 57.948 61.788 59.052 61.212 60.012C60.636 60.96 59.826 61.698 58.782 62.226C57.738 62.742 56.544 63 55.2 63H49.692V50.4ZM55.092 61.02C56.016 61.02 56.826 60.846 57.522 60.498C58.23 60.138 58.77 59.634 59.142 58.986C59.526 58.326 59.718 57.564 59.718 56.7C59.718 55.836 59.526 55.08 59.142 54.432C58.77 53.772 58.23 53.268 57.522 52.92C56.826 52.56 56.016 52.38 55.092 52.38H52.032V61.02H55.092ZM68.6671 63.126C67.6951 63.126 66.8191 62.916 66.0391 62.496C65.2591 62.076 64.6471 61.494 64.2031 60.75C63.7711 59.994 63.5551 59.142 63.5551 58.194C63.5551 57.246 63.7711 56.4 64.2031 55.656C64.6471 54.912 65.2591 54.33 66.0391 53.91C66.8191 53.49 67.6951 53.28 68.6671 53.28C69.6511 53.28 70.5331 53.49 71.3131 53.91C72.0931 54.33 72.6991 54.912 73.1311 55.656C73.5751 56.4 73.7971 57.246 73.7971 58.194C73.7971 59.142 73.5751 59.994 73.1311 60.75C72.6991 61.494 72.0931 62.076 71.3131 62.496C70.5331 62.916 69.6511 63.126 68.6671 63.126ZM68.6671 61.2C69.4951 61.2 70.1791 60.924 70.7191 60.372C71.2591 59.82 71.5291 59.094 71.5291 58.194C71.5291 57.294 71.2591 56.568 70.7191 56.016C70.1791 55.464 69.4951 55.188 68.6671 55.188C67.8391 55.188 67.1551 55.464 66.6151 56.016C66.0871 56.568 65.8231 57.294 65.8231 58.194C65.8231 59.094 66.0871 59.82 66.6151 60.372C67.1551 60.924 67.8391 61.2 68.6671 61.2ZM81.4027 53.28C82.6147 53.28 83.5867 53.634 84.3187 54.342C85.0507 55.05 85.4167 56.1 85.4167 57.492V63H83.1667V57.78C83.1667 56.94 82.9687 56.31 82.5727 55.89C82.1767 55.458 81.6127 55.242 80.8807 55.242C80.0527 55.242 79.3987 55.494 78.9187 55.998C78.4387 56.49 78.1987 57.204 78.1987 58.14V63H75.9487V53.388H78.0907V54.63C78.4627 54.186 78.9307 53.85 79.4947 53.622C80.0587 53.394 80.6947 53.28 81.4027 53.28ZM91.9429 53.28C93.3589 53.28 94.4389 53.622 95.1829 54.306C95.9389 54.978 96.3169 55.998 96.3169 57.366V63H94.1929V61.83C93.9169 62.25 93.5209 62.574 93.0049 62.802C92.5009 63.018 91.8889 63.126 91.1689 63.126C90.4489 63.126 89.8189 63.006 89.2789 62.766C88.7389 62.514 88.3189 62.172 88.0189 61.74C87.7309 61.296 87.5869 60.798 87.5869 60.246C87.5869 59.382 87.9049 58.692 88.5409 58.176C89.1889 57.648 90.2029 57.384 91.5829 57.384H94.0669V57.24C94.0669 56.568 93.8629 56.052 93.4549 55.692C93.0589 55.332 92.4649 55.152 91.6729 55.152C91.1329 55.152 90.5989 55.236 90.0709 55.404C89.5549 55.572 89.1169 55.806 88.7569 56.106L87.8749 54.468C88.3789 54.084 88.9849 53.79 89.6929 53.586C90.4009 53.382 91.1509 53.28 91.9429 53.28ZM91.6369 61.488C92.2009 61.488 92.6989 61.362 93.1309 61.11C93.5749 60.846 93.8869 60.474 94.0669 59.994V58.878H91.7449C90.4489 58.878 89.8009 59.304 89.8009 60.156C89.8009 60.564 89.9629 60.888 90.2869 61.128C90.6109 61.368 91.0609 61.488 91.6369 61.488ZM104.983 62.478C104.719 62.694 104.395 62.856 104.011 62.964C103.639 63.072 103.243 63.126 102.823 63.126C101.767 63.126 100.951 62.85 100.375 62.298C99.7985 61.746 99.5105 60.942 99.5105 59.886V55.26H97.9265V53.46H99.5105V51.264H101.761V53.46H104.335V55.26H101.761V59.832C101.761 60.3 101.875 60.66 102.103 60.912C102.331 61.152 102.661 61.272 103.093 61.272C103.597 61.272 104.017 61.14 104.353 60.876L104.983 62.478ZM115.553 58.248C115.553 58.404 115.541 58.626 115.517 58.914H107.975C108.107 59.622 108.449 60.186 109.001 60.606C109.565 61.014 110.261 61.218 111.089 61.218C112.145 61.218 113.015 60.87 113.699 60.174L114.905 61.56C114.473 62.076 113.927 62.466 113.267 62.73C112.607 62.994 111.863 63.126 111.035 63.126C109.979 63.126 109.049 62.916 108.245 62.496C107.441 62.076 106.817 61.494 106.373 60.75C105.941 59.994 105.725 59.142 105.725 58.194C105.725 57.258 105.935 56.418 106.355 55.674C106.787 54.918 107.381 54.33 108.137 53.91C108.893 53.49 109.745 53.28 110.693 53.28C111.629 53.28 112.463 53.49 113.195 53.91C113.939 54.318 114.515 54.9 114.923 55.656C115.343 56.4 115.553 57.264 115.553 58.248ZM110.693 55.08C109.973 55.08 109.361 55.296 108.857 55.728C108.365 56.148 108.065 56.712 107.957 57.42H113.411C113.315 56.724 113.021 56.16 112.529 55.728C112.037 55.296 111.425 55.08 110.693 55.08Z" fill="#141516"/>
                            <path d="M193.024 60.138H190.792V63H188.524V60.138H181.612V58.518L187.822 50.4H190.324L184.474 58.158H188.596V55.62H190.792V58.158H193.024V60.138ZM197.898 55.278C199.674 55.278 200.988 55.626 201.84 56.322C202.692 57.006 203.118 57.942 203.118 59.13C203.118 59.886 202.932 60.57 202.56 61.182C202.188 61.794 201.63 62.28 200.886 62.64C200.142 63 199.224 63.18 198.132 63.18C197.232 63.18 196.362 63.054 195.522 62.802C194.682 62.538 193.974 62.178 193.398 61.722L194.388 59.904C194.856 60.288 195.414 60.594 196.062 60.822C196.722 61.038 197.4 61.146 198.096 61.146C198.924 61.146 199.572 60.978 200.04 60.642C200.52 60.294 200.76 59.82 200.76 59.22C200.76 58.572 200.502 58.086 199.986 57.762C199.482 57.426 198.612 57.258 197.376 57.258H194.334L194.982 50.4H202.38V52.362H196.962L196.692 55.278H197.898ZM214.368 59.436C214.368 60.408 214.008 61.236 213.288 61.92C212.58 62.592 211.548 63 210.192 63.144V65.16H208.716V63.162C207.828 63.102 206.988 62.94 206.196 62.676C205.404 62.412 204.774 62.076 204.306 61.668L205.116 59.85C205.56 60.21 206.1 60.516 206.736 60.768C207.372 61.008 208.032 61.158 208.716 61.218V57.618C207.864 57.414 207.15 57.192 206.574 56.952C206.01 56.7 205.536 56.34 205.152 55.872C204.768 55.392 204.576 54.762 204.576 53.982C204.576 53.01 204.93 52.182 205.638 51.498C206.346 50.814 207.372 50.406 208.716 50.274V48.24H210.192V50.238C210.864 50.274 211.518 50.388 212.154 50.58C212.802 50.772 213.366 51.024 213.846 51.336L213.108 53.154C212.196 52.626 211.224 52.302 210.192 52.182V55.818C211.056 56.022 211.77 56.244 212.334 56.484C212.91 56.724 213.39 57.084 213.774 57.564C214.17 58.032 214.368 58.656 214.368 59.436ZM206.898 53.874C206.898 54.27 207.054 54.588 207.366 54.828C207.678 55.068 208.128 55.272 208.716 55.44V52.236C208.104 52.332 207.648 52.524 207.348 52.812C207.048 53.1 206.898 53.454 206.898 53.874ZM210.192 61.182C210.828 61.086 211.296 60.9 211.596 60.624C211.908 60.348 212.064 60.006 212.064 59.598C212.064 59.19 211.902 58.866 211.578 58.626C211.254 58.374 210.792 58.164 210.192 57.996V61.182Z" fill="#141516"/>
                            <path d="M49.692 198.4H55.2C56.544 198.4 57.738 198.664 58.782 199.192C59.826 199.708 60.636 200.446 61.212 201.406C61.788 202.354 62.076 203.452 62.076 204.7C62.076 205.948 61.788 207.052 61.212 208.012C60.636 208.96 59.826 209.698 58.782 210.226C57.738 210.742 56.544 211 55.2 211H49.692V198.4ZM55.092 209.02C56.016 209.02 56.826 208.846 57.522 208.498C58.23 208.138 58.77 207.634 59.142 206.986C59.526 206.326 59.718 205.564 59.718 204.7C59.718 203.836 59.526 203.08 59.142 202.432C58.77 201.772 58.23 201.268 57.522 200.92C56.826 200.56 56.016 200.38 55.092 200.38H52.032V209.02H55.092ZM68.6671 211.126C67.6951 211.126 66.8191 210.916 66.0391 210.496C65.2591 210.076 64.6471 209.494 64.2031 208.75C63.7711 207.994 63.5551 207.142 63.5551 206.194C63.5551 205.246 63.7711 204.4 64.2031 203.656C64.6471 202.912 65.2591 202.33 66.0391 201.91C66.8191 201.49 67.6951 201.28 68.6671 201.28C69.6511 201.28 70.5331 201.49 71.3131 201.91C72.0931 202.33 72.6991 202.912 73.1311 203.656C73.5751 204.4 73.7971 205.246 73.7971 206.194C73.7971 207.142 73.5751 207.994 73.1311 208.75C72.6991 209.494 72.0931 210.076 71.3131 210.496C70.5331 210.916 69.6511 211.126 68.6671 211.126ZM68.6671 209.2C69.4951 209.2 70.1791 208.924 70.7191 208.372C71.2591 207.82 71.5291 207.094 71.5291 206.194C71.5291 205.294 71.2591 204.568 70.7191 204.016C70.1791 203.464 69.4951 203.188 68.6671 203.188C67.8391 203.188 67.1551 203.464 66.6151 204.016C66.0871 204.568 65.8231 205.294 65.8231 206.194C65.8231 207.094 66.0871 207.82 66.6151 208.372C67.1551 208.924 67.8391 209.2 68.6671 209.2ZM81.4027 201.28C82.6147 201.28 83.5867 201.634 84.3187 202.342C85.0507 203.05 85.4167 204.1 85.4167 205.492V211H83.1667V205.78C83.1667 204.94 82.9687 204.31 82.5727 203.89C82.1767 203.458 81.6127 203.242 80.8807 203.242C80.0527 203.242 79.3987 203.494 78.9187 203.998C78.4387 204.49 78.1987 205.204 78.1987 206.14V211H75.9487V201.388H78.0907V202.63C78.4627 202.186 78.9307 201.85 79.4947 201.622C80.0587 201.394 80.6947 201.28 81.4027 201.28ZM91.9429 201.28C93.3589 201.28 94.4389 201.622 95.1829 202.306C95.9389 202.978 96.3169 203.998 96.3169 205.366V211H94.1929V209.83C93.9169 210.25 93.5209 210.574 93.0049 210.802C92.5009 211.018 91.8889 211.126 91.1689 211.126C90.4489 211.126 89.8189 211.006 89.2789 210.766C88.7389 210.514 88.3189 210.172 88.0189 209.74C87.7309 209.296 87.5869 208.798 87.5869 208.246C87.5869 207.382 87.9049 206.692 88.5409 206.176C89.1889 205.648 90.2029 205.384 91.5829 205.384H94.0669V205.24C94.0669 204.568 93.8629 204.052 93.4549 203.692C93.0589 203.332 92.4649 203.152 91.6729 203.152C91.1329 203.152 90.5989 203.236 90.0709 203.404C89.5549 203.572 89.1169 203.806 88.7569 204.106L87.8749 202.468C88.3789 202.084 88.9849 201.79 89.6929 201.586C90.4009 201.382 91.1509 201.28 91.9429 201.28ZM91.6369 209.488C92.2009 209.488 92.6989 209.362 93.1309 209.11C93.5749 208.846 93.8869 208.474 94.0669 207.994V206.878H91.7449C90.4489 206.878 89.8009 207.304 89.8009 208.156C89.8009 208.564 89.9629 208.888 90.2869 209.128C90.6109 209.368 91.0609 209.488 91.6369 209.488ZM104.983 210.478C104.719 210.694 104.395 210.856 104.011 210.964C103.639 211.072 103.243 211.126 102.823 211.126C101.767 211.126 100.951 210.85 100.375 210.298C99.7985 209.746 99.5105 208.942 99.5105 207.886V203.26H97.9265V201.46H99.5105V199.264H101.761V201.46H104.335V203.26H101.761V207.832C101.761 208.3 101.875 208.66 102.103 208.912C102.331 209.152 102.661 209.272 103.093 209.272C103.597 209.272 104.017 209.14 104.353 208.876L104.983 210.478ZM115.553 206.248C115.553 206.404 115.541 206.626 115.517 206.914H107.975C108.107 207.622 108.449 208.186 109.001 208.606C109.565 209.014 110.261 209.218 111.089 209.218C112.145 209.218 113.015 208.87 113.699 208.174L114.905 209.56C114.473 210.076 113.927 210.466 113.267 210.73C112.607 210.994 111.863 211.126 111.035 211.126C109.979 211.126 109.049 210.916 108.245 210.496C107.441 210.076 106.817 209.494 106.373 208.75C105.941 207.994 105.725 207.142 105.725 206.194C105.725 205.258 105.935 204.418 106.355 203.674C106.787 202.918 107.381 202.33 108.137 201.91C108.893 201.49 109.745 201.28 110.693 201.28C111.629 201.28 112.463 201.49 113.195 201.91C113.939 202.318 114.515 202.9 114.923 203.656C115.343 204.4 115.553 205.264 115.553 206.248ZM110.693 203.08C109.973 203.08 109.361 203.296 108.857 203.728C108.365 204.148 108.065 204.712 107.957 205.42H113.411C113.315 204.724 113.021 204.16 112.529 203.728C112.037 203.296 111.425 203.08 110.693 203.08Z" fill="#141516"/>
                            <path d="M186.148 198.4V211H183.808V200.362H181.144V198.4H186.148ZM192.589 203.278C194.365 203.278 195.679 203.626 196.531 204.322C197.383 205.006 197.809 205.942 197.809 207.13C197.809 207.886 197.623 208.57 197.251 209.182C196.879 209.794 196.321 210.28 195.577 210.64C194.833 211 193.915 211.18 192.823 211.18C191.923 211.18 191.053 211.054 190.213 210.802C189.373 210.538 188.665 210.178 188.089 209.722L189.079 207.904C189.547 208.288 190.105 208.594 190.753 208.822C191.413 209.038 192.091 209.146 192.787 209.146C193.615 209.146 194.263 208.978 194.731 208.642C195.211 208.294 195.451 207.82 195.451 207.22C195.451 206.572 195.193 206.086 194.677 205.762C194.173 205.426 193.303 205.258 192.067 205.258H189.025L189.673 198.4H197.071V200.362H191.653L191.383 203.278H192.589ZM209.059 207.436C209.059 208.408 208.699 209.236 207.979 209.92C207.271 210.592 206.239 211 204.883 211.144V213.16H203.407V211.162C202.519 211.102 201.679 210.94 200.887 210.676C200.095 210.412 199.465 210.076 198.997 209.668L199.807 207.85C200.251 208.21 200.791 208.516 201.427 208.768C202.063 209.008 202.723 209.158 203.407 209.218V205.618C202.555 205.414 201.841 205.192 201.265 204.952C200.701 204.7 200.227 204.34 199.843 203.872C199.459 203.392 199.267 202.762 199.267 201.982C199.267 201.01 199.621 200.182 200.329 199.498C201.037 198.814 202.063 198.406 203.407 198.274V196.24H204.883V198.238C205.555 198.274 206.209 198.388 206.845 198.58C207.493 198.772 208.057 199.024 208.537 199.336L207.799 201.154C206.887 200.626 205.915 200.302 204.883 200.182V203.818C205.747 204.022 206.461 204.244 207.025 204.484C207.601 204.724 208.081 205.084 208.465 205.564C208.861 206.032 209.059 206.656 209.059 207.436ZM201.589 201.874C201.589 202.27 201.745 202.588 202.057 202.828C202.369 203.068 202.819 203.272 203.407 203.44V200.236C202.795 200.332 202.339 200.524 202.039 200.812C201.739 201.1 201.589 201.454 201.589 201.874ZM204.883 209.182C205.519 209.086 205.987 208.9 206.287 208.624C206.599 208.348 206.755 208.006 206.755 207.598C206.755 207.19 206.593 206.866 206.269 206.626C205.945 206.374 205.483 206.164 204.883 205.996V209.182Z" fill="#141516"/>
                            <path d="M57.692 116.4H63.2C64.544 116.4 65.738 116.664 66.782 117.192C67.826 117.708 68.636 118.446 69.212 119.406C69.788 120.354 70.076 121.452 70.076 122.7C70.076 123.948 69.788 125.052 69.212 126.012C68.636 126.96 67.826 127.698 66.782 128.226C65.738 128.742 64.544 129 63.2 129H57.692V116.4ZM63.092 127.02C64.016 127.02 64.826 126.846 65.522 126.498C66.23 126.138 66.77 125.634 67.142 124.986C67.526 124.326 67.718 123.564 67.718 122.7C67.718 121.836 67.526 121.08 67.142 120.432C66.77 119.772 66.23 119.268 65.522 118.92C64.826 118.56 64.016 118.38 63.092 118.38H60.032V127.02H63.092ZM76.6671 129.126C75.6951 129.126 74.8191 128.916 74.0391 128.496C73.2591 128.076 72.6471 127.494 72.2031 126.75C71.7711 125.994 71.5551 125.142 71.5551 124.194C71.5551 123.246 71.7711 122.4 72.2031 121.656C72.6471 120.912 73.2591 120.33 74.0391 119.91C74.8191 119.49 75.6951 119.28 76.6671 119.28C77.6511 119.28 78.5331 119.49 79.3131 119.91C80.0931 120.33 80.6991 120.912 81.1311 121.656C81.5751 122.4 81.7971 123.246 81.7971 124.194C81.7971 125.142 81.5751 125.994 81.1311 126.75C80.6991 127.494 80.0931 128.076 79.3131 128.496C78.5331 128.916 77.6511 129.126 76.6671 129.126ZM76.6671 127.2C77.4951 127.2 78.1791 126.924 78.7191 126.372C79.2591 125.82 79.5291 125.094 79.5291 124.194C79.5291 123.294 79.2591 122.568 78.7191 122.016C78.1791 121.464 77.4951 121.188 76.6671 121.188C75.8391 121.188 75.1551 121.464 74.6151 122.016C74.0871 122.568 73.8231 123.294 73.8231 124.194C73.8231 125.094 74.0871 125.82 74.6151 126.372C75.1551 126.924 75.8391 127.2 76.6671 127.2ZM89.4027 119.28C90.6147 119.28 91.5867 119.634 92.3187 120.342C93.0507 121.05 93.4167 122.1 93.4167 123.492V129H91.1667V123.78C91.1667 122.94 90.9687 122.31 90.5727 121.89C90.1767 121.458 89.6127 121.242 88.8807 121.242C88.0527 121.242 87.3987 121.494 86.9187 121.998C86.4387 122.49 86.1987 123.204 86.1987 124.14V129H83.9487V119.388H86.0907V120.63C86.4627 120.186 86.9307 119.85 87.4947 119.622C88.0587 119.394 88.6947 119.28 89.4027 119.28ZM99.9429 119.28C101.359 119.28 102.439 119.622 103.183 120.306C103.939 120.978 104.317 121.998 104.317 123.366V129H102.193V127.83C101.917 128.25 101.521 128.574 101.005 128.802C100.501 129.018 99.8889 129.126 99.1689 129.126C98.4489 129.126 97.8189 129.006 97.2789 128.766C96.7389 128.514 96.3189 128.172 96.0189 127.74C95.7309 127.296 95.5869 126.798 95.5869 126.246C95.5869 125.382 95.9049 124.692 96.5409 124.176C97.1889 123.648 98.2029 123.384 99.5829 123.384H102.067V123.24C102.067 122.568 101.863 122.052 101.455 121.692C101.059 121.332 100.465 121.152 99.6729 121.152C99.1329 121.152 98.5989 121.236 98.0709 121.404C97.5549 121.572 97.1169 121.806 96.7569 122.106L95.8749 120.468C96.3789 120.084 96.9849 119.79 97.6929 119.586C98.4009 119.382 99.1509 119.28 99.9429 119.28ZM99.6369 127.488C100.201 127.488 100.699 127.362 101.131 127.11C101.575 126.846 101.887 126.474 102.067 125.994V124.878H99.7449C98.4489 124.878 97.8009 125.304 97.8009 126.156C97.8009 126.564 97.9629 126.888 98.2869 127.128C98.6109 127.368 99.0609 127.488 99.6369 127.488ZM112.983 128.478C112.719 128.694 112.395 128.856 112.011 128.964C111.639 129.072 111.243 129.126 110.823 129.126C109.767 129.126 108.951 128.85 108.375 128.298C107.799 127.746 107.511 126.942 107.511 125.886V121.26H105.927V119.46H107.511V117.264H109.761V119.46H112.335V121.26H109.761V125.832C109.761 126.3 109.875 126.66 110.103 126.912C110.331 127.152 110.661 127.272 111.093 127.272C111.597 127.272 112.017 127.14 112.353 126.876L112.983 128.478ZM123.553 124.248C123.553 124.404 123.541 124.626 123.517 124.914H115.975C116.107 125.622 116.449 126.186 117.001 126.606C117.565 127.014 118.261 127.218 119.089 127.218C120.145 127.218 121.015 126.87 121.699 126.174L122.905 127.56C122.473 128.076 121.927 128.466 121.267 128.73C120.607 128.994 119.863 129.126 119.035 129.126C117.979 129.126 117.049 128.916 116.245 128.496C115.441 128.076 114.817 127.494 114.373 126.75C113.941 125.994 113.725 125.142 113.725 124.194C113.725 123.258 113.935 122.418 114.355 121.674C114.787 120.918 115.381 120.33 116.137 119.91C116.893 119.49 117.745 119.28 118.693 119.28C119.629 119.28 120.463 119.49 121.195 119.91C121.939 120.318 122.515 120.9 122.923 121.656C123.343 122.4 123.553 123.264 123.553 124.248ZM118.693 121.08C117.973 121.08 117.361 121.296 116.857 121.728C116.365 122.148 116.065 122.712 115.957 123.42H121.411C121.315 122.724 121.021 122.16 120.529 121.728C120.037 121.296 119.425 121.08 118.693 121.08Z" fill="#006AFF"/>
                            <path d="M199.296 116.4V117.966L194.4 129H191.898L196.632 118.38H191.682V120.522H189.504V116.4H199.296ZM204.369 121.278C206.145 121.278 207.459 121.626 208.311 122.322C209.163 123.006 209.589 123.942 209.589 125.13C209.589 125.886 209.403 126.57 209.031 127.182C208.659 127.794 208.101 128.28 207.357 128.64C206.613 129 205.695 129.18 204.603 129.18C203.703 129.18 202.833 129.054 201.993 128.802C201.153 128.538 200.445 128.178 199.869 127.722L200.859 125.904C201.327 126.288 201.885 126.594 202.533 126.822C203.193 127.038 203.871 127.146 204.567 127.146C205.395 127.146 206.043 126.978 206.511 126.642C206.991 126.294 207.231 125.82 207.231 125.22C207.231 124.572 206.973 124.086 206.457 123.762C205.953 123.426 205.083 123.258 203.847 123.258H200.805L201.453 116.4H208.851V118.362H203.433L203.163 121.278H204.369ZM220.838 125.436C220.838 126.408 220.478 127.236 219.758 127.92C219.05 128.592 218.018 129 216.662 129.144V131.16H215.186V129.162C214.298 129.102 213.458 128.94 212.666 128.676C211.874 128.412 211.244 128.076 210.776 127.668L211.586 125.85C212.03 126.21 212.57 126.516 213.206 126.768C213.842 127.008 214.502 127.158 215.186 127.218V123.618C214.334 123.414 213.62 123.192 213.044 122.952C212.48 122.7 212.006 122.34 211.622 121.872C211.238 121.392 211.046 120.762 211.046 119.982C211.046 119.01 211.4 118.182 212.108 117.498C212.816 116.814 213.842 116.406 215.186 116.274V114.24H216.662V116.238C217.334 116.274 217.988 116.388 218.624 116.58C219.272 116.772 219.836 117.024 220.316 117.336L219.578 119.154C218.666 118.626 217.694 118.302 216.662 118.182V121.818C217.526 122.022 218.24 122.244 218.804 122.484C219.38 122.724 219.86 123.084 220.244 123.564C220.64 124.032 220.838 124.656 220.838 125.436ZM213.368 119.874C213.368 120.27 213.524 120.588 213.836 120.828C214.148 121.068 214.598 121.272 215.186 121.44V118.236C214.574 118.332 214.118 118.524 213.818 118.812C213.518 119.1 213.368 119.454 213.368 119.874ZM216.662 127.182C217.298 127.086 217.766 126.9 218.066 126.624C218.378 126.348 218.534 126.006 218.534 125.598C218.534 125.19 218.372 124.866 218.048 124.626C217.724 124.374 217.262 124.164 216.662 123.996V127.182Z" fill="#006AFF"/>
                            <defs>
                            <filter id="filter0_d_0_1" x="30" y="96" width="203" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="-9" dy="13"/>
                            <feGaussianBlur stdDeviation="3"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.675 0 0 0 0 0.675 0 0 0 0 0.675 0 0 0 0.15 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            </defs>
                            </svg>
                        </div>
                        
                    </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 auto', padding: '4rem 0'}}>
                    <div style={{order: 1}}>
                        <h1>Optimized for growth</h1>
                        <p style={{marginBottom: '2rem', width: '450px'}}>Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup.</p>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div style={{marginRight: '.5rem'}}>Get Started</div>
                            <div style={{display: 'flex'}}>
                                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM1 6.75H18V5.25H1V6.75Z" fill="#006AFF"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div style={{position: 'relative', marginRight: '2rem'}}>
                        <div>
                            <Image 
                                src="https://s3-alpha-sig.figma.com/img/d04b/9fba/fe5caeaca73cff878bb98fe752d86842?Expires=1650844800&Signature=eMPwSZqlEvwzkG5BQshu~4ptfZUayWbYrCzhSI~K8P8OMQ4Fi8mQk11rc8EgUQEwEBeIMpXSes5F-3MIz4v70HZZ-8tO-XRX~mf0wUQymSD9NVTSLZ6~OULoW6Z1Tg3KeadT23Y9i-5TV6CSNxBD5h15mSyw7qrmWuPyM3BikoAWwCnoqpgHR~lwa3BDso-OnOASz~uMjNaC4deiOZ0v3YhnrzHGWrVuv7ElewAXcT3nTk328htQ7rqIWs6~xGLkAIERqUZbFaRjN0s54kvIy~aCEy72xtJBPxfNKhv~khExXaaINJJW5grMZcU6UbeuEApiF7HNX8u-4FliDwNvKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                width={543}
                                height={362}
                                objectFit="cover"
                                style={{borderRadius: '10px'}}
                            />
                        </div>
                        
                        <div style={{position: 'absolute', top: "-40px", left: "-20px"}}>
                            
                        </div>
                        
                    </div>
                </div>
            </div>            
        </div>
    )
}