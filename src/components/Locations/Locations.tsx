import { LocationData, LocationDetailComponent } from 'ui-kit/LocationDetailComponent'
import { TextDivider } from 'ui-kit/TextDivider'
import './Locations.scss'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../config/Firebase'
import { useEffect, useState } from 'react'

const Locations = () => {
  const [locations, setLocations] = useState<LocationData[]>([])
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationQuerySnapshot = await getDocs(collection(db, 'Location'))
        const fetchedLocations: LocationData[] = []
        locationQuerySnapshot.forEach((doc) => {
          const location = doc.data()
          fetchedLocations.push({
            id: location.id,
            storeLocation: location.storeLocation,
            storeLocationDetail: location.storeLocationDetail,
            storeLocationMap: location.storeLocationMap,
            storeLocationOutlet: location.storeLocationOutlet,
          })
        })
        setLocations(fetchedLocations)
      } catch (error) {
        console.log('Error fetching locations:', error)
      }
    }

    fetchLocations()
  }, [])

  return (
    <>
      <div className='locationsTitle mb-5'>
        <TextDivider>Locations</TextDivider>
      </div>
      <LocationDetailComponent isMap={false} options={locations} />
    </>
  )
}

export default Locations
