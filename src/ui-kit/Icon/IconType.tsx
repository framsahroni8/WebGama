import { newGuid } from 'utils/guid'
import { ReactComponent as ArrowDown } from '../assets/icons/ArrowDown.svg'
import { ReactComponent as ArrowLeft } from '../assets/icons/ArrowLeft.svg'
import { ReactComponent as ArrowRight } from '../assets/icons/ArrowRight.svg'
import { ReactComponent as Center } from '../assets/icons/Center.svg'
import { ReactComponent as Checkbox } from '../assets/icons/Checkbox.svg'
import { ReactComponent as Close } from '../assets/icons/Close.svg'
import { ReactComponent as Copy } from '../assets/icons/Copy.svg'
import { ReactComponent as Down } from '../assets/icons/Down.svg'
import { ReactComponent as Edit } from '../assets/icons/Edit.svg'
import { ReactComponent as Exit } from '../assets/icons/Exit.svg'
import { ReactComponent as Facebook} from '../assets/icons/Facebook.svg'
import { ReactComponent as GoFood} from '../assets/icons/GoFood.svg'
import { ReactComponent as GrabFood} from '../assets/icons/GrabFood.svg'
import { ReactComponent as Home } from '../assets/icons/Home.svg'
import { ReactComponent as Instagram } from '../assets/icons/Instagram.svg'
import { ReactComponent as Location} from '../assets/icons/Location.svg'
import { ReactComponent as Message} from '../assets/icons/Message.svg'
import { ReactComponent as Minus } from '../assets/icons/Minus.svg'
import { ReactComponent as Pdf } from '../assets/icons/files/Pdf.svg'
import { ReactComponent as Plus } from '../assets/icons/Plus.svg'
import { ReactComponent as Search } from '../assets/icons/Search.svg'
import { ReactComponent as ShopeeFood} from '../assets/icons/ShopeeFood.svg'
import { ReactComponent as Spinner } from '../assets/icons/Spinner.svg'
import { ReactComponent as Telegram } from '../assets/icons/Telegram.svg'
import { ReactComponent as Twitter} from '../assets/icons/Twitter.svg'
import { ReactComponent as Visibility } from '../assets/icons/Visibility.svg'
import { ReactComponent as VisibilityOff } from '../assets/icons/VisibilityOff.svg'
import { ReactComponent as WhatsApp} from '../assets/icons/WhatsApp.svg'

export type IconType =
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Center'
  | 'Checkbox'
  | 'Close'
  | 'Copy'
  | 'Down'
  | 'Edit'
  | 'Exit'
  | 'Facebook'
  | 'GoFood'
  | 'GrabFood'
  | 'Home'
  | 'Instagram'
  | 'Location'
  | 'Message'
  | 'Minus'
  | 'Pdf'
  | 'Plus'
  | 'Search'
  | 'ShopeeFood'
  | 'Spinner'
  | 'Telegram'
  | 'Twitter'
  | 'Visibility'
  | 'VisibilityOff'
  | 'WhatsApp'

export const iconTypes = new Map([
  ['ArrowDown', <ArrowDown key={newGuid()} />],
  ['ArrowLeft', <ArrowLeft key={newGuid()} />],
  ['ArrowRight', <ArrowRight key={newGuid()} />],
  ['Center', <Center key={newGuid()} />],
  ['Checkbox', <Checkbox key={newGuid()} />],
  ['Close', <Close key={newGuid()} />],
  ['Copy', <Copy key={newGuid()} />],
  ['Down', <Down key={newGuid()} />],
  ['Edit', <Edit key={newGuid()} />],
  ['Exit', <Exit key={newGuid()} />],
  ['Facebook', <Facebook key={newGuid()} />],
  ['GoFood', <GoFood key={newGuid()} />],
  ['GrabFood', <GrabFood key={newGuid()} />],
  ['Home', <Home key={newGuid()} />],
  ['Instagram', <Instagram key={newGuid()} />],
  ['Location', <Location key={newGuid()} />],
  ['Message', <Message key={newGuid()} />],
  ['Minus', <Minus key={newGuid()} />],
  ['Pdf', <Pdf key={newGuid()} />],
  ['Plus', <Plus key={newGuid()} />],
  ['Search', <Search key={newGuid()} />],
  ['ShopeeFood', <ShopeeFood key={newGuid()} />],
  ['Spinner', <Spinner key={newGuid()} />],
  ['Telegram', <Telegram key={newGuid()} />],
  ['Twitter', <Twitter key={newGuid()} />],
  ['Visibility', <Visibility key={newGuid()} />],
  ['VisibilityOff', <VisibilityOff key={newGuid()} />],
  ['WhatsApp', <WhatsApp key={newGuid()} />],
])
