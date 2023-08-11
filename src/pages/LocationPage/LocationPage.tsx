import Locations from 'components/Locations/Locations'
import { LocationData, LocationDetailComponent } from 'ui-kit/LocationDetailComponent'
import { TextDivider } from 'ui-kit/TextDivider'
import './LocationPage.scss'
import AOS from 'aos'
import 'aos/dist/aos.css' // Impor stylesheet AOS
import { useEffect, useState } from 'react'
import { db } from '../../config/Firebase'
import { getDocs, collection } from 'firebase/firestore'

const LocationPage = () => {
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
    AOS.init()
  }, [])

  return (
    <div className='locationPageWrapper' data-aos='fade-up' data-aos-duration='3000'>
      <TextDivider>Locations</TextDivider>
      <LocationDetailComponent isMap options={locations} />
    </div>
  )
}
export default LocationPage
