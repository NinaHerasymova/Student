"use strict"

const getDay = (today) => {
    let day;
    if (typeof today=='number'& today > 0 & today < 8) {
        switch (today) {
            case 1:
                day = 'Monday'; break;

            case 2:
                day = 'Tuesday'; break;

            case 3:
                day = 'Wednesday'; break;

            case 4:
                day = 'Thursday'; break;

            case 5:
                day = 'Friday'; break;

            case 6:
                day = 'Saturday'; break;

            case 7:
                day = 'Sunday'; break;
        }
        return  day;
    } return 'Unreal value';
};
