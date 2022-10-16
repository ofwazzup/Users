import './App.css';
import { Success } from './components/Success';
import { Users } from './components/Users';
import React from 'react';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [succes, setSucces] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(response => {
      return response.json();
    })
    .then(data => {
      setUsers(data.data);
    })
    .catch(err => {
      console.warn(err);
    })
    .finally(() => setLoading(false))
  }, [])

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvite = (id) => {
    if(invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites(prev => [...prev, id]);
    }
  }

  const onClickSendInvites = () => {
    setSucces(true);
  }

  return (
    <div className="App">
      {
        succes ? (<Success count={invites.length}/>) :
        (
          <Users 
            onChangeSearchValue={onChangeSearchValue}
            searchValue={searchValue}
            items={users} 
            isLoading={isLoading}
            onClickInvite={onClickInvite}
            invites={invites}
            onClickSendInvites={onClickSendInvites}
          />
        )
      }
    </div>
  );
}

export default App;




// import './App.css';
// import { Success } from './components/Success';
// import { Users } from './components/Users';
// import React from 'react';

// // Тут список пользователей: https://reqres.in/api/users

// function App() {

//   const [users, setUsers] = React.useState([]);
//   const [invites, setInvites] = React.useState([]);
//   const [isLoading, setLoading] = React.useState(true);
//   const [succes, setSucces] = React.useState(false);
//   const [searchValue, setSearchValue] = React.useState('');

//   React.useEffect(() => {
//     fetch('https://reqres.in/api/users')
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       setUsers(data.data)
//     })
//     .catch(err => {
//       console.warn(err);
//     })
//     .finally(() => {
//       setLoading(false);
//     })
//   }, []);

//   const onChangeSearchValue = (event) => {
//     setSearchValue(event.target.value);
//   }

//   const onClickInvite = (id) => {
//     if(invites.includes(id)) {
//       setInvites(prev => prev.filter(_id => _id !== id))
//     } else {
//       setInvites(prev => [...prev, id]);
//     }
//   }

//   const onClickSendInvites = () => {
//     setSucces(true);
//   }

//   return (
//     <div className="App">
//       { succes ? (<Success count={invites.length} />) : 
//         (
//           <Users onClickInvite={onClickInvite} 
//             invites={invites} 
//             onChangeSearchValue={onChangeSearchValue} 
//             searchValue={searchValue} 
//             items={users} i
//             sLoading={isLoading}
//             onClickSendInvites={onClickSendInvites}
//           />
//         )
//       }    
//     </div>
//   );
// }

// export default App;
