import DevicesIcon from '../assets/icons/devices-icon.png';
import SettingsIcon from '../assets/icons/settings-icon.png';
import SearchIcon from '../assets/icons/search-icon.png';
import Image from 'next/image';

const features = [
    {
        icon: SettingsIcon,
        title: 'Settings',
        description: 'Remove numbers, non-letters and format your file as CSV.',
        color: 'bg-blue-50'  // Light blue
    },
    {
        icon: SearchIcon,
        title: 'Specific',
        description: 'Remove a specific word or number.',
        color: 'bg-green-50' // Light green
    },
    {
        icon: DevicesIcon,
        title: 'Supported Devices',
        description: 'Available for Windows and Mac.',
        color: 'bg-yellow-50' // Light yellow
    }
];

export const Features = () => {
    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
                    {features.map(({ icon, title, description, color }) => (
                        <div
                            key={title}
                            className={`text-center ${color} rounded-xl p-6`}
                        >
                            <div className="flex justify-center">
                                <Image src={icon} alt={`${title} Icon`} className="h-16 w-auto"/>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{title}</h3>
                            <p className="text-md text-slate-600">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
