import { useState } from 'react';
import AddFriend from './components/AddFriend';
import Button from './components/Button';
import Split from './components/Split';
import FriendLists from './components/FriendLists';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowForm() {
    setShowAddForm((showFriend) => !showFriend);
    setSelectedFriend(null);
  }

  function handleAddFriend(newFriend) {
    setFriends((prev) => [...prev, newFriend]);
    setShowAddForm(false);
  }

  const handleSelection = (friend) => {
    setSelectedFriend((cur) => (cur === null ? friend : null));
    setShowAddForm(false);
  };

  const handleSplitBill = (value) => {
    console.log(value);

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend
      )
    );

    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendLists
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddForm && <AddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowForm}>
          {showAddForm ? 'Close' : 'Add friend'}
        </Button>
      </div>

      {selectedFriend && (
        <Split
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
