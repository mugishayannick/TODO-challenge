type AvatarProps = {
  avatarSize?: number;
};

export default function AvatarGroup({ avatarSize = 10 }: AvatarProps) {
  return (
    <div className="flex flex-wrap -space-x-1">
      <img
        alt="Avatar"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className={`inline-block size-${avatarSize} rounded-full ring-2 ring-white`}
      />
      <img
        alt="Avatar"
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className={`inline-block size-${avatarSize} rounded-full ring-2 ring-white`}
      />
      <img
        alt="Avatar"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        className={`inline-block size-${avatarSize} rounded-full ring-2 ring-white`}
      />
      <img
        alt="Avatar"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className={`inline-block size-${avatarSize} rounded-full ring-2 ring-white`}
      />
    </div>
  );
}
