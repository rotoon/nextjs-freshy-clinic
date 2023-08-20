import { FaFacebookMessenger, FaLine } from 'react-icons/fa'
import { MdContacts } from 'react-icons/md'
import { Action, Fab } from 'react-tiny-fab'

const FabButton = () => (
  <Fab
    style={{ bottom: 0, right: 0 }}
    mainButtonStyles={{
      backgroundColor: 'white',
    }}
    icon={
      <MdContacts
        color='#B06DFF'
        size={25}
      />
    }
  >
    <Action
      text='Facebook สาขาเชียงใหม่'
      style={{
        backgroundColor: '#3b5998',
      }}
      onClick={() => window.open(`https://m.me/Thefreshyclinic.cnx/`, '_blank')}
    >
      <FaFacebookMessenger
        color='white'
        size={25}
      />
    </Action>
    <Action
      text='Line สาขาเชียงใหม่'
      style={{
        backgroundColor: '#1DAA39',
      }}
      onClick={() => window.open(`https://lin.ee/Tdrn4pv`, '_blank')}
    >
      <FaLine
        color='white'
        size={25}
      />
    </Action>
    <Action
      text='Facebook สาขาเชียงราย'
      style={{
        backgroundColor: '#3b5998',
      }}
      onClick={() => window.open(`https://m.me/Thefreshyclinic.cr/`, '_blank')}
    >
      <FaFacebookMessenger
        color='white'
        size={25}
      />
    </Action>
    <Action
      text='Line สาขาเชียงราย'
      style={{
        backgroundColor: '#1DAA39',
      }}
      onClick={() => window.open(`https://lin.ee/K3Oc2SB`, '_blank')}
    >
      <FaLine
        color='white'
        size={25}
      />
    </Action>
  </Fab>
)

export default FabButton
