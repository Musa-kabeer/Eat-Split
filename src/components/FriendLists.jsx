import Friend from './Friend';

const Friends = ({ friends, onSelection, selectedFriend }) => {
  return (
    <ul className="friends">
      {friends?.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default Friends;
