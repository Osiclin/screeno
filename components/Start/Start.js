import Image from 'next/image'

export default function Start() {
    return(
        <div style={{backgroundColor: '#000000', color: '#ffffff', padding: '1rem 1rem 4rem'}}>
            <div style={{maxWidth: '1140px', margin: '0 auto'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem'}}>
                    <h2 style={{textAlign: 'center'}}>Start your own business today</h2>
                    <p style={{maxWidth: '400px', textAlign: 'center', marginBottom: '2rem'}}>Consistent quality and experience across all platforms and devices.</p>
                    <div style={{display: 'flex'}}>
                        <div style={{border: `1px solid #ffffff`, backgroundColor: '#ffffff', padding: '.5rem 1rem', cursor: 'pointer', borderRadius: '6px', width: '140px', textAlign: 'center', marginRight: '1rem', color: '#000000'}}>Get Started</div>
                        <div style={{border: '1px solid #ffffff', padding: '.5rem 1rem', cursor: 'pointer', borderRadius: '6px', width: '140px', textAlign: 'center'}}>Login</div>
                    </div>
                </div>
                
                <div style={{margin: '0 auto', padding: '2rem 0', display: 'flex', justifyContent: 'center'}}>
                    <div style={{position: 'relative'}}>
                        <div>
                            <Image 
                                src="https://s3-alpha-sig.figma.com/img/cc71/2a36/5ef75971b1e2e7fbef210c903e4cb519?Expires=1650844800&Signature=fED~QNgRHtIaqYjSKvGr7DssL4g5Ib0U7Vtty6yUl6Sg3Xtency3Z1LefexDorHFD6KlA~Is6OLZ7SInI1p7iCuyBEjVg2GKpSgbbf6ESjqwkCuVAu1Xy0wc5quimbXBCOp4ZuAIAWoVhCCY6YVU8R~sG14WWnr0f7563fqSvHyneKO0yQrhEH9fBJGxwL0TImlPHI6~bcC4-r9TzBHgA1sWP-x8KUKzAqMy8cmNOKzHDcKTQqGtb1hfsmHZc4eoL-dq-ieph3XIuDxwYqWJ1yXpeTfFZjxQFre5o30LoaZiPHUzWJZgxWHO-uapsN6W9mndFKG~3dGC3RsNebNskA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                width={790.37}
                                height={526.91}
                                objectFit="cover"
                                style={{borderRadius: '16px'}}
                            />
                        </div>
                        
                        {/* <div style={{position: 'absolute', bottom: "-40px", left: "-20px", border: '4px solid #ffffff', borderRadius: '10px'}}>
                            <Image 
                                src="https://s3-alpha-sig.figma.com/img/726e/2fdf/707df588c249715d78800580aa4d2566?Expires=1650844800&Signature=OALF-B39lYdhasK8E8gng1-lYQqIOUIZSLB1YBIcgfD6V4LHvhu7bEjp3T9-XjJmFvqd9NC1~Hkwkm97B~HZfYnAtsnsX8Ycbgl3tg0gtHJSnIaDqFc7w2yAdsmrXHoLJiMOV25fJ-OT5RBjuEBQ6aSjIyUEFngxafSNZjq3pJ2oujoQkzVAkj66fThneEofNtG7qW1~OldcyJq-46AP5D72DNrAHEc0LDSEyRmOPyZ2EDodgwLmjNzQy5djUdZi~6vYVMkUK~FQ8Rd8QShn5B0Kpf24OBx2~1POJX5cGjCmI0-Wjyhf7u6ye0cbMrgPuM5lruIY30I3YUIrBNPgWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                width={153}
                                height={292}
                                objectFit="cover"
                            />
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}