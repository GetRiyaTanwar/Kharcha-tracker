import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

function Header() {
    return (
        <div className='p-5 flex justify-between items-center boarder shadow-sm'>
            <Image src={'./logo.svg'}
                alt='logo'
                width={80}
                height={40}
            />
            <Button>Get Started</Button>
        </div>
    );
}

export default Header;
