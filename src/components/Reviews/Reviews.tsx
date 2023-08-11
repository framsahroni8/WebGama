import { TextDivider } from 'ui-kit/TextDivider'
import './Reviews.scss'
import SliderComponent, { ReviewData } from 'ui-kit/SliderComponent'
import { db } from '../../config/Firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useState, useEffect } from 'react'

const Reviews = () => {
  const [comment, setComment] = useState<ReviewData[]>([])
  const [ids, setIds] = useState<string[]>([])
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationQuerySnapshot = await getDocs(collection(db, 'Comment'))
      const fetchedIds = locationQuerySnapshot.docs.map((doc) => doc.id)
      // console.log(ids)
      setIds(fetchedIds) // Update the 'ids' state variable with the array of IDs
      const fetchedReviews: any = []
      locationQuerySnapshot.forEach((doc) => {
        const reviews = doc.data()
        fetchedReviews.push({
          id: doc.id,
          name: reviews.name,
          comment: reviews.comment,
          isAnonymous: reviews.isAnonymous,
        })
        })
        setComment(fetchedReviews)
      } catch (error) {
        console.log('Error fetching locations:', error)
      }
    }

    fetchLocations()
  }, [])

  return (
    <div className='reviewsWrapper'>
      <div className='reviewsText'>
        <TextDivider>Reviews</TextDivider>
      </div>
      <div className='pt-8'>
        <SliderComponent options={comment} />
      </div>
    </div>
  )
}

export default Reviews
