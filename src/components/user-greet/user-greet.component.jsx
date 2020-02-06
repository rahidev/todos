import React from 'react';

import Card from '../../layouts/card/card.component';
import Avatar from '../avatar/avatar.component';
import Chips from '../chips/chips.component';
import Qod from '../qod/qod.component';

import './user-greet.styles.scss';

const UserGreet = props => {
    const getFormattedDate = () => {
        const now = new Date();
        const [, month, date, year] = now.toDateString().split(' ');
        return `${date} ${month}, ${year}`;
    };

    const getGreet = () => {
        const time = new Date().getHours();
        switch (true) {
            case time >= 0 && time < 12:
                return 'Good Morning';
            case time >= 12 && time < 18:
                return 'Good Afternoon';
            case time >= 18 && time < 20:
                return 'Good Evening';
            case time >= 20 && time <= 24:
                return 'Good Night';
            default:
                return 'Not Working';
        }
    };

    return (
        <Card>
            <div className="user-greet">
                <div className="user-greet__user">
                    <Avatar
                        imageUrl="https://cdn4.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-2-512.png"
                        styles={{
                            width: '170px'
                        }}
                    />
                    <div className="user-greet__user-greet">
                        <h1 className="user-greet__user-greet-name">
                            Hi, Jane!
                        </h1>
                        <h2 className="user-greet__user-greet-msg">
                            {getGreet()}!
                        </h2>
                    </div>
                </div>
                <div className="user-greet__chips">
                    <Chips>{getFormattedDate()}</Chips>
                    <Chips type="danger">
                        {props.todosLength} Task For Today
                    </Chips>
                </div>
                <Qod />
            </div>
        </Card>
    );
};

export default UserGreet;
