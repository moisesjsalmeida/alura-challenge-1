import { signOut, useSession } from 'next-auth/client';
import { ProfileContainer } from './profile-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import useAuthContext from '../../../pages/contexts/authContext';

const Profile = () => {
  const { handleOpenModal } = useAuthContext();
  const [session, loading] = useSession();

  return (
    <ProfileContainer>
      <div onClick={handleOpenModal}>
        {session ? (
          <img src={session.user.image} alt="Avatar" />
        ) : (
          <FontAwesomeIcon
            icon={faUserCircle}
            className="fas fa-user-circle fa-2x"
            style={{ color: 'white', marginRight: '1rem' }}
          />
        )}

        <span>{session ? session.user.name : 'Login'}</span>
      </div>

      {session && (
        <button
          onClick={signOut}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            marginLeft: '1rem',
          }}
        >
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="fas fa-sign-out-alt fa-2x"
            style={{ color: 'white' }}
          />
        </button>
      )}
    </ProfileContainer>
  );
};

export default Profile;
