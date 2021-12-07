import { setDifficulty } from "actions/quiz";
import { useDispatch } from "react-redux";

export default function SelectDifficultty({ className }) {
    const dispatch = useDispatch();

    return (
        <div
            className={`select ${className} `}
            onChange={(e) => dispatch(setDifficulty(e.target.value))}
        >
            <select>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
    );
}
