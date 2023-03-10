import st from './Users.module.css'

import userPhoto from './../../media/post-avatar.png'
import { NavLink } from 'react-router-dom'

const Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

   let pages = []

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   return (
      <div>
         <div className={st.pages}>
            {pages.map(page => {
               return <span className={props.currentPage === page && st.selectedPage} onClick={(e) => { props.onPageChanged(page) }} >{page}</span>
            })}
         </div>
         {
            props.users.map(user => <div className={st.user} key={user.id}>
               <NavLink to={'/profile/' + user.id} >
                  <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="userPhoto" />
               </NavLink>

               {
                  user.followed
                     ? <button disabled={props.followingInProgress.some(id => id === user.id)}

                        onClick={() => { props.unfollow(user.id) }}>

                        unfollow</button>
                     : <button disabled={props.followingInProgress.some(id => id === user.id)}

                        onClick={() => { props.follow(user.id) }}>

                        follow</button>
               }

               <div className={st.content}>
                  <div>
                     <div className={st.name}>{user.name}</div>
                     <div className={st.status}>{user.status}</div>
                  </div>
                  <div>
                     <div className={st.city}>{'user.location.city'}</div>
                     <div className={st.country}>{'user.location.country'}</div>
                  </div>
               </div>
            </div>)
         }
      </div>
   );
}

export default Users;