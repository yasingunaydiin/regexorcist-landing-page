import ArrowRightIcon from '../assets/arrow-icon.png';
import RegexorcistIcon from '../assets/icons/RegExorcist_mac.png';
import AppImage from '../assets/images/macbookpro.png';
import Image from 'next/image';

export const Hero = () => {
    return (
        <div className="py-[72px] relative overflow-clip">
            <div className="container">
                <div className="flex items-center justify-center">
                    <a href="" className="inline-flex gap-3 border border-black/30 py-1 px-2 rounded-lg">
                        <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">Version 0.3 is here</span>
                        <span className="inline-flex items-center gap-1">
                            <a href="https://github.com/yasingunaydiin/RegExorcist"><span>Read More</span></a>
                            <Image src={ArrowRightIcon} alt="Arrow Right Icon" className="h-5 w-auto"/>
                        </span>
                    </a>
                </div>
                <div className="flex justify-center mt-8">
                    <Image src={RegexorcistIcon} alt="Illumicheck Icon" className="h-48 w-auto"/>
                </div>
                <h1 className="text-5xl font-bold tracking-tighter text-center mt-8">Regexorcist</h1>
                <p className="text-center text-xl mt-5">RegExorcist is a tool designed to remove specific words and regular expressions from documents.</p>
                <div className="flex justify-center mt-8">
                    <a href='https://github.com/yasingunaydiin/RegExorcist/releases' className='bg-white py-3 px-5 rounded-lg border border-black'>Download</a>
                </div>
                <div>
                <div className="flex justify-center mt-8">
                    <Image src={AppImage} alt="App Icon" className="h-full w-auto"/>
                </div>
                </div>
            </div>
        </div>
    );
};
