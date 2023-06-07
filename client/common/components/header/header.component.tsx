import menu from '@/mocks/menu.json'

export const Header = () => {    
    return (
        <div className="bg-[url('https://minimalthemedemo.simplybook.it/v2/themes/minimal/img/main-image.jpg')] min-h-[680px] bg-cover bg-center">
            <ul className='flex justify-evenly pt-4 font-bold'>
                {menu?.map(m => (
                    <li key={m.id}>{m.name}</li>
                ))}
            </ul>
            <div className='flex flex-col justify-center items-center h-[560px]'>
                <h1 className="text-[60px] drop-shadow-[0_2px_8px_rgba(0,0,0,.15)] text-[#e49092] font-bold leading-snug">Retail Business</h1>
                <button className="bg-gradient-to-r from-[#f5a778] via-[#e6938f] to-[#e28c96] text-[20px] px-[75px] py-[15px] rounded-full shadow-lg font-semibold text-[#fff] mt-[70px]">Book Now</button>
            </div>
        </div>
    )
}