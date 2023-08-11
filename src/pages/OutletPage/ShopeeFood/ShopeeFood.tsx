import { db } from '../../../config/Firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { LocationData } from 'ui-kit/LocationDetailComponent';
import Outlet from '../OutletPage';

const ShopeeFood = () => {
  const [locations, setLocations] = useState<LocationData[]>([]);

  console.log(locations)
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationQuerySnapshot = await getDocs(collection(db, 'Location'))
        const fetchedLocations: LocationData[] = []
        locationQuerySnapshot.forEach((doc) => {
          const location = doc.data()
          const outletData: LocationData = {
            id: location.id,
            storeLocation: location.storeLocation,
            storeLocationDetail: location.storeLocationDetail,
            storeLocationMap: location.storeLocationMap,
            storeLocationOutlet: location.storeLocationOutletShopee,
          }
          fetchedLocations.push(outletData)
        })
        setLocations(fetchedLocations)
      } catch (error) {
        console.log('Error fetching locations:', error)
      }
    }


    fetchLocations();
  }, []);

  return (
    <>
      <Outlet OutletName="ShopeeFood Outlet" DataOutlet={locations} />
    </>
  );
};

export default ShopeeFood;
