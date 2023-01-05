### 1. Is this code a correct way to import an image in React?

```
import avatar from "./assets/avatar.png"

function UserImage() {
   return (
      <div>
         <img
            src={avatar}
            alt = "User image"
         />
      < /div>
   )
}
export default UserImage;
```

- [x] Yes.
- [ ] No.

### 2. Is this code a correct way to import an image in React?

```
function UserImage() {
   const avatarImg = "https://picsum.photos/400/265";
   return (
      <div>
            <img
                  src="avatar.png"
                  alt="User image"
            />
      </div>
   )
}
export default UserImage;
```

- [ ] Yes.
- [x] No.

### 3. What's wrong with this code?

```
function ProfileImage() {
   const profileImg = "https://picsum.photos/400/265";
   return <img src={profileImg} alt="Profile image" />
}
export default ProfileImage;
```

- [ ] You must surround the img element with a root, wrapping div element.
- [x] Nothing. This code is correct.
- [ ] There should be parentheses after the return keyword and the img element should spread its attributes over multiple lines.
