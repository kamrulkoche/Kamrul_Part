import MenuItems from "../../NavBar/MenuItems/MenuItems"
import Content from "../Content/Content"
import ExchangeRateCard from "../ExchangeRateCard/ExchangeRateCard"


const MoneyTransferHome = () => {
    return (
        <div style={{ backgroundImage: "url('/images/moneyTransferHomeBg.JPG')" }}>
            <div className="container mx-auto pb-10">
                <MenuItems></MenuItems>
                <div className="bg-cover bg-center min-h-screen gap-6 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
                    <Content open></Content>
                    <ExchangeRateCard />
                </div>
            </div>
        </div>
    )
}

export default MoneyTransferHome
