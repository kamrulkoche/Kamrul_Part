import Content from "../Content/Content"
import ExchangeRateCard from "../ExchangeRateCard/ExchangeRateCard"
import BackgroundImage from "../../../assets/images/gallery img4.jpg";

import Image from 'next/image'

const MoneyTransferHome = () => {
    return (
        <div className="bg-cover bg-center min-h-screen  grid grid-cols-2 justify-items-center items-center" style={{ backgroundImage: "url('/images/moneyTransferHomeBg.JPG')" }}>
        <Content />
        <ExchangeRateCard />
    </div>
    )
}

export default MoneyTransferHome
