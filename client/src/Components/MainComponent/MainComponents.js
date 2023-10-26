import React from 'react'
import NavbarMenu from '../Header/NavbarMenu'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import TabSection from '../TabsSection/TabSection'
import Banner from '../Banner/Banner'

const MainComponents = () => {
    return (
        <div>
            <Banner />
            <Home />
            <TabSection />
            <Footer />
        </div>
    )
}

export default MainComponents
