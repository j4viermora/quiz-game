import { setDifficulty } from "actions/quiz";
import { useDispatch } from "react-redux";

const options = [
    { value: "easy", display: "Easy" },
    { value: "medium", display: "Medium" },
    { value: "hard", display: "Hard" },
];

export default function SelectDifficultty({ className }) {
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        if (target.value !== "no-selected")
            dispatch(setDifficulty(target.value));
    };

    return (
        <div className={`select ${className} `} onChange={handleChange}>
            <select>
                <option value="no-selected">Select Difficulty</option>
                {options.map(({ value, display }) => (
                    <option key={value} value={value}>
                        {display}
                    </option>
                ))}
            </select>
        </div>
    );
}
