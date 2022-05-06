import React from 'react';

type Props = {
    progressPercent: number
}
const CircularProgress: React.FC<Props> = ({ progressPercent }): JSX.Element => {

    return (
        <div className="relative m-auto">
            <div className="inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5">
                <svg width="80" height="80">
                    <circle
                        className="text-gray-300"
                        stroke-width="5"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="40"
                        cy="40"
                    />
                    <circle
                        className="text-blue-600"
                        stroke-width="5"
                        stroke-dasharray="188"
                        stroke-dashoffset={188 - progressPercent * 188} stroke-linecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="40"
                        cy="40"
                    />
                </svg>
                <span className="absolute text-lg text-blue-500">
                    {progressPercent * 100}%
                </span>
            </div>
        </div>
    );
};

export default CircularProgress;
