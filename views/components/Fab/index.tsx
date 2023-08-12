import { FaFacebookMessenger, FaLine } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { Action, Fab } from 'react-tiny-fab'

const FabButton = () => (
  <Fab
    style={{ bottom: 24, right: 24 }}
    mainButtonStyles={{
      backgroundColor: '#CF5363',
    }}
    icon={
      <FaMessage
        color='white'
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
      onClick={() => window.open(`https://m.me/Thefreshyclinic.cnx/`, '_blank')}
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
      onClick={() => window.open(`https://lin.ee/Tdrn4pv`, '_blank')}
    >
      <FaLine
        color='white'
        size={25}
      />
    </Action>
  </Fab>
)

export default FabButton
