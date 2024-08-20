import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        const initMap = () => {
            const joacaba = { lat: -27.1712, lng: -51.5107 };
            const map = new google.maps.Map(document.getElementById("map"), {
                center: joacaba,
                zoom: 14,
            });
            new google.maps.Marker({
                position: joacaba,
                map: map,
            });
        };

        const loadScript = (url) => {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
            script.onload = () => {
                initMap();
            };
        };

        loadScript()
    }, []);

    return (
        <div className=" text-white  flex flex-col items-center justify-center p-5" >
            <h1 className="text-3xl font-bold mb-5">Contact</h1>
            <div id="map" className="w-full max-w-lg h-80 mb-5"></div>
            <form className="bg-zinc-900 p-5 rounded-lg shadow-lg w-full max-w-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-medium mb-1">Name:</label>
                    <input type="text" name="name" id="name" required className="w-full p-3 bg-zinc-600 border border-zinc-500 rounded-lg text-white placeholder-zinc-400" placeholder="Your Name"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-medium mb-1">Email:</label>
                    <input type="email" name="email" id="email" required className="w-full p-3 bg-zinc-600 border border-zinc-500 rounded-lg text-white placeholder-zinc-400" placeholder="Your Email"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-medium mb-1">Message:</label>
                    <input type="text" name="message" id="message" required className="w-full p-3 bg-zinc-600 border border-zinc-500 rounded-lg text-white placeholder-zinc-400" placeholder="Your Message"/>
                </div>

            </form>
        </div>
    );
}
