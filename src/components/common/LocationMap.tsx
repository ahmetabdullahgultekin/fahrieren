import React from 'react';
import {MapPin} from 'lucide-react';

interface LocationMapProps {
    lat: number;
    lng: number;
    title?: string;
    zoom?: number;
}

const LocationMap: React.FC<LocationMapProps> = ({lat, lng, title = 'Konum', zoom = 15}) => {
    // OpenStreetMap embed needs a bbox (south,west,north,east). For the
    // requested zoom (default 15 ≈ city block) ±0.005 lat / ±0.01 lng gives a
    // visually similar viewport to the previous Google Maps embed.
    const dLat = 0.005;
    const dLng = 0.01;
    const south = lat - dLat;
    const north = lat + dLat;
    const west = lng - dLng;
    const east = lng + dLng;
    const bbox = `${west},${south},${east},${north}`;
    const marker = `${lat},${lng}`;
    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;
    void zoom;

    return (
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={title}
                className="w-full h-full"
            />

            {/* Overlay badge */}
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600"/>
                <span className="font-semibold text-gray-900">{title}</span>
            </div>
        </div>
    );
};

export default LocationMap;
