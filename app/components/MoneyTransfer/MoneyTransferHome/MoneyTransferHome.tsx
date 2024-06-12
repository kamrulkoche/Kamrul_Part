import Content from "../Content/Content"
import ExchangeRateCard from "../ExchangeRateCard/ExchangeRateCard"


const MoneyTransferHome = () => {
    return (
        <div className="bg-cover bg-center min-h-screen  grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center" style={{ backgroundImage: "url('/images/moneyTransferHomeBg.JPG')" }}>
            <Content />
            <ExchangeRateCard />
        </div>
    )
}

export default MoneyTransferHome
