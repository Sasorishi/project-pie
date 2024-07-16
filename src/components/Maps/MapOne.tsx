import 'leaflet/dist/leaflet.css';

import L, { LatLngTuple } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import customMarkerIcon from '/public/images/icon/map-marker.svg'; // Chemin de l'image

// Création de l'icône personnalisée
const CustomIcon = L.icon({
  iconUrl: customMarkerIcon.src, // Utilisez .src pour obtenir l'URL de l'image avec Next.js
  iconSize: [25, 41], // Ajustez la taille selon vos besoins
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapOne = () => {
  const positions: { name: string; position: LatLngTuple }[] = [
    { name: 'NeuroTech AI', position: [48.8566, 2.3522] }, // Paris, France
    { name: 'EcoDrive Innovations', position: [51.5074, -0.1278] }, // London, UK
    { name: 'Quantum Solutions', position: [40.7128, -74.006] }, // New York, USA
  ];

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-semibold mb-4">
        Répartition Géographique des Entreprises
      </h2>
      <MapContainer
        center={[20, 0] as LatLngTuple}
        zoom={2}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {positions.map((pos, idx) => (
          <Marker key={idx} position={pos.position} icon={CustomIcon}>
            <Popup>{pos.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapOne;
