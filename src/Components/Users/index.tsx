import React from 'react';
import Image1 from '../../Assets/Images/user-1.jpg';
import Image2 from '../../Assets/Images/user-2.png';
import Image3 from '../../Assets/Images/alien-svgrepo-com.svg';

type Props = {}

const User = (props: Props) => {
    return (
        <div>
            <h2>User</h2>
            <p>
                <img src={Image1} alt="user photo" width={200} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Image2} alt="user photo" width={200} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Image3} alt="svg icon" title='svg icon' width={200} />
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )
}

export default User;