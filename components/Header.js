import{
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,

}from "@heroicons/react/outline"



import Image from 'next/image'
import { Headeritems } from './Headeritems'


function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
         <div className="flex flex-grow justify-evenly max-w-2xl ">
             <Headeritems title="HOME" Icon={HomeIcon} />
             <Headeritems title="TRANDING" Icon={LightningBoltIcon} />
             <Headeritems title="VERIFY" Icon={BadgeCheckIcon} />
             <Headeritems title="COLLECTIONS" Icon={CollectionIcon} />
             <Headeritems title="SEARCH" Icon={SearchIcon} />
             <Headeritems title="ACCOUNT" Icon={UserIcon} />
             



         </div>




             <Image className='object-contain'
             src="https://links.papareact.com/ua6" 
             width={200}
              height={100} />
            
        </header>
    )
}

export default Header
