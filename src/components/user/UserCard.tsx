import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const UserCard = () => {
  return (
    <div className="border bg-popover p-2 rounded mt-4 flex justify-items-start cursor-pointer">
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/25190563?v=4" />
        <AvatarFallback className="bg-primary" />
      </Avatar>
      <div className="ml-2">
        <p className="text-base text-title">UserName</p>
        <p className="text-xs text-character">EmailAddress</p>
      </div>
    </div>
  )
}

export default UserCard
