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
                    <Avatar alt="Remy Sharp" src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/379644795_878106343737375_5501229579758189022_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGpO772fMDaH10lNNL1pdc7MrQU3yTkxkIytBTfJOTGQinqwPqxR4hBBNsVsBNcjT8zqK28cF9gMAYdmq8fEeUn&_nc_ohc=OeDOlqlUbFAAX9I8EH1&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAq1KWBzXJ4N-U47HntZZye3fTZdVAsDnx_U4IOd9IdOw&oe=6512CEB6" />
                    <Avatar alt="Travis Howard" src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/370557354_2209018809290886_8115087880579482272_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeG8iO2z-Ov161HzBrFtJbTIgrM5VQv252eCszlVC_bnZ1aJlTt3l94l1iXkYsIX_zOJoFWX6upt-D7P9432__Bc&_nc_ohc=diZUBlbFTfsAX-NS6Ex&_nc_ht=scontent.fdac135-1.fna&oh=00_AfC_9wqVO9g183f6K3e1ayMv8MEcuIWwG6ZNDqmguVRyHg&oe=6512E4DA" />
                    <Avatar alt="Cindy Baker" src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/363327960_3635913190064273_3888399955429781760_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeEzAsfd9vcdTWiFwEuaI6XFC8bikJC1k10LxuKQkLWTXR3YJoHtBhMeF4qmH-mo6wrxb9hAJbdvasEe5hFkzAWX&_nc_ohc=edK4hX-MgcMAX-LyV3d&_nc_oc=AQmqLMHScdWiIG770quwceZ6eWPQyKcecFScouP8iTdRWG3FwjTUDEbceVUujHpfz98&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAOOhl1bv-5FoQkBhAf_lqWCcIeIQa1Vd_-FpoSzmCdyQ&oe=6511E948" />
                </Stack>
            </div>
            <p className='footer-p' >All rights deserved by Md Ariful Hasan</p>

        </div>
    )
}

export default Footer
