import { MenuDetail, menuImage } from 'ui-kit/MenuDetail'
import { TextDivider } from 'ui-kit/TextDivider'
import './Menu.scss'
import { Button } from 'ui-kit'
import { Link } from 'react-router-dom'
import { db } from '../../config/Firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useState, useEffect } from 'react'


const Menu = () => {
  const [menu, setMenu] = useState<menuImage[]>([])
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const locationQuerySnapshot = await getDocs(collection(db, 'Menu'));
        const fetchedMenu: menuImage[] = [];
        locationQuerySnapshot.forEach((doc) => {
          const menu = doc.data();
          fetchedMenu.push({
            id: menu.id,
            data: {
              src: menu.url,
              name: menu.name,
            }
          });
        });
        setMenu(fetchedMenu);
      } catch (error) {
        console.log('Error fetching locations:', error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <section id='menuSection'>
      <div className='menuWrapper w-full' id='menuSection'>
          <div className='menuText'>
            <TextDivider>Our Menu</TextDivider>
          </div>
          <div>
            <MenuDetail options={menu} />
          </div>
        <div className='flex justify-end'>
          <Link to='/order'>
            <Button>Order Now</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Menu
