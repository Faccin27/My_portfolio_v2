import { MailIcon, PhoneIcon, CalendarIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react'
import avatar from '../assets/images/my-avatar.png'

export default function Component() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-950 p-4 ">
            <div className="w-80 bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
                <div className="p-8 text-center space-y-6 ">
                    <div className="relative w-40 h-40 mx-auto">
                        <div className="absolute inset-2 bg-zinc-800 rounded-3xl overflow-hidden">
                            <img
                                src={avatar}
                                alt="Profile picture"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-white mb-8">Guilherme Faccin</h2>
                        <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg p-1 shadow-md transform hover:scale-105 transition-transform duration-200 ">
                        <p className="text-lg text-gray-400">Fullstack Developer</p>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6 p-1 border-t border-gray-700" />
                    <div className="space-y-4">
                        <div className="flex items-center text-gray-300 p-3">
                            <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg p-3 mr-4 shadow-md transform hover:scale-105 transition-transform duration-200">
                                <MailIcon className="w-6 h-6 selected"  />
                            </div>
                            <span className="text-sm">gfaccin27@gmail.com</span>
                        </div>
                        <div className="flex items-center text-gray-300 p-3">
                            <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg p-3 mr-4 shadow-md transform hover:scale-105 transition-transform duration-200">
                                <PhoneIcon className="w-6 h-6 selected" />
                            </div>
                            <span className="text-sm">+55 (49) 99921-5720</span>
                        </div>
                        <div className="flex items-center text-gray-300 p-3">
                            <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg p-3 mr-4 shadow-md transform hover:scale-105 transition-transform duration-200">
                                <CalendarIcon className="w-6 h-6 selected"  />
                            </div>
                            <span className="text-sm">August 27, 2005</span>
                        </div>
                        <div className="flex items-center text-gray-300 p-3">
                            <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg p-3 mr-4 shadow-md transform hover:scale-105 transition-transform duration-200">
                                <MapPinIcon className="w-6 h-6 selected"/>
                            </div>
                            <span className="text-sm text-center">Joaçaba, Santa Catarina <br />BRA</span>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center space-x-6 p-6 border-t border-gray-700">
                    <a href="#" className="text-gray-400 hover:text-white">
                        <FacebookIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <TwitterIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <InstagramIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    )
}