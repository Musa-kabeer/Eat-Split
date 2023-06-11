import { useState } from 'react';
import Button from './Button';

const AddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('https://i.pravatar.cc/48');

  function handleSumit(e) {
    e.preventDefault();

    if (!name || !avatar) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id: id,
      name: name,
      image: `${avatar}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName('');
    setAvatar('https://i.pravatar.cc/48');
  }

  return (
    <form className="form-add-friend" onSubmit={handleSumit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        autoFocus
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default AddFriend;
