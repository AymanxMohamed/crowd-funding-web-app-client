import React from 'react';
import {StarIcon} from "@heroicons/react/solid";
import classNames from "../utils/classNames";

type Props = {
    rate: number,
}
const Rating: React.FC<Props> = ({ rate }): JSX.Element => {
    return (
        <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                    key={rating}
                    className={classNames(
                        rating < Math.floor(rate) ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                />
            ))}
        </div>
);
};

export default Rating;
