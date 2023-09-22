import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Tab.css'
import { BookData } from '../BookData/BookData';
import Bookcard from '../Home/Bookcard';
import { BookData2 } from '../BookData/BookData';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;



    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabSection = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    /*  value added*/


    return (
        <div className='tab-section' >
            <Box >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab style={{ color: '#fff' }} label="Item One" {...a11yProps(0)} />
                        <Tab style={{ color: '#fff' }} label="Item Two" {...a11yProps(1)} />
                        <Tab style={{ color: '#fff' }} label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div className='tab-book' >
                        {
                            BookData2.map((book) => {
                                return <Bookcard
                                    id={book.id}
                                    Bookdetails={book}
                                />

                            })
                        }
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className='tab-book' >
                        {
                            BookData.map((book) => {
                                return <Bookcard
                                    id={book.id}
                                    Bookdetails={book}
                                />

                            })
                        }
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
            </Box>
        </div>
    )
}

export default TabSection
