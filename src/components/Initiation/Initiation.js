//import logo1 from "../../assets/svg/initiation/initiation1.svg"
//import logo2 from "../../assets/svg/initiation/initiation2.svg"
import climes from "../../assets/svg/initiation/climes.svg"
import windy from "../../assets/svg/initiation/windy.svg"

const Initiation = () =>{


    return(
        <div className="text-center mt-0 flex-col">
            <img className="object-none object-right h-40 w-full" src={climes} alt="weather"/>
            <h2 className="text-5xl mx-12 mb-8 font-black text-text"><span className="text-">Conoce</span> el clima de tu ciudad!</h2>
            <p className="mx-12 text-blue">Es un placer Atenderte!</p>
            <img className="object-none object-left h-40 w-full" src={windy} alt="weather"/>
        </div>

    )
}

export default Initiation;