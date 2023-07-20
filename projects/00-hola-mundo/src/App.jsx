import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'lopez2730',
    name: 'Alfredo López López',
    isFollowing: true,
  },
  {
    userName: 'rayomcqueen',
    name: 'Francesco Virgolini',
    isFollowing: true,
  },
  {
    userName: 'nintendo',
    name: 'Nintendo Japon',
    isFollowing: false,
  },
  {
    userName: 'Microsoft',
    name: 'factura puentes',
    isFollowing: true,
  }
]
export function App () {
  // const formattedUserName = (<span>@elpepe</span>)
  return (
    <section className='App'>
      {
      users.map( user => {
        const {userName, name, isFollowing} = user
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
      })
      }
    </section>
  )
}


{/* <TwitterFollowCard isFollowing userName='microsoft' name='hideo kojima'/>
<TwitterFollowCard isFollowing={false} userName='twitter' name='este es tw'/> */}