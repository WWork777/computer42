import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/" className='flex items-center gap-5'>
            <Image
                src="/logo/computerlogo.svg"
                alt="logo"
                width={50}
                height={30}
                // style={{ width: 'auto', height: 'auto' }}
                quality={100}
                priority={true}
                className='dark:hidden'
            />
            <Image
                src="/logo/Computerlogowhite.svg"
                alt="logo"
                width={50}
                height={30}
                // style={{ width: 'auto', height: 'auto' }}
                quality={100}
                className='dark:block hidden'
            />
            <h4>Компьютер42</h4>
        </Link>
    );
};

export default Logo;
