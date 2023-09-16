import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './footer.css'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='footer' >
            <p className='footer-p' > {date}</p>
            <div className="stack">
                <Stack direction="row" spacing={3} >
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </Stack>
            </div>

        </div>
    )
}

export default Footer
