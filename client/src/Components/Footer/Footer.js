import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './footer.css'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='footer' >
            <div className="stack">
                <Stack direction="row" spacing={3} >
                    <Avatar style={{ marginTop: '50px', width: '70px', height: '10vh' }} alt="Remy Sharp" src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325370145_665389131946690_8484651511858289568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeHeOUVYJa1DIdt6nX7r7mp-6HNFJBK10Evoc0UkErXQS0HWNUCW9p6XWEX2shGdnTOG-Ldkf26l7AroLiBk1yIh&_nc_ohc=p7VriqzAHYcAX9d3IEF&_nc_ht=scontent.fdac135-1.fna&oh=00_AfCVXfjFm1PsQx_6OE11HnX3anW_zC4TvxYV6WTEiR267w&oe=6526E2B2" />
                    <Avatar style={{ marginTop: '50px', width: '70px', height: '10vh' }} alt="Travis Howard" src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-9/95821227_2663320067323595_6840507194438320128_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHLKB_OPunlVmtEMAkO4LEfmxpdz1jeCw2bGl3PWN4LDahUfDzio5KGJvEXCp4tDDXTbqzRiR8IGw9RBUD1dxJZ&_nc_ohc=HPAbAU6eXNcAX9_nVoD&_nc_ht=scontent.fdac135-1.fna&oh=00_AfB_N1aeu9GgIHLw-Zd9a1VGda37C2XdbWthGoJSzAI41w&oe=654A2D44" />
                    <Avatar style={{ marginTop: '50px', width: '70px', height: '10vh' }} alt="Cindy Baker" src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/370557354_2209018809290886_8115087880579482272_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeG8iO2z-Ov161HzBrFtJbTIgrM5VQv252eCszlVC_bnZ1aJlTt3l94l1iXkYsIX_zOJoFWX6upt-D7P9432__Bc&_nc_ohc=AI0X8-DS2wgAX8UF5Md&_nc_ht=scontent.fdac135-1.fna&oh=00_AfC_5O5bLQlvWSShRTZOAfljT55Zc8vuYZs6CpOE4wt51g&oe=6526AB5A" />
                </Stack>
            </div>
            <p className='footer-p' > {date} All rights deserved by our team</p>

        </div>
    )
}

export default Footer
